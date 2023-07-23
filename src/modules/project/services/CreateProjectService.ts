import { Project } from '../infra/typeorm/Project';
import { IProjectRepository } from '../repositories/models/IProjectRepository';
import { ICreateProjectMemberDTO } from '../dtos/ICreateProjectMemberDTO';
import { IProjectMemberRepository } from '../repositories/models/IProjectMemberRepository';
import { HttpError } from '../../../shared/errors/HttpError';
import { IUserRepository } from '../../user/repositories/models/IUserRepository';
import { IRequestProjectMemberDTO } from '../dtos/IRequestProjectMemberDTO';

interface IRequest {
  members?: IRequestProjectMemberDTO[];
  name: string;
  admin_id: string;
}

export class CreateProjectService {
  constructor(
    private userRepository: IUserRepository,
    private projectRepository: IProjectRepository,
    private projectMemberRepository: IProjectMemberRepository,
  ) {}

  async execute({ admin_id, members, name }: IRequest): Promise<Project> {
    const projectAdmin = await this.userRepository.findById(admin_id);

    if (!projectAdmin) {
      throw new HttpError(404, 'Admin not found!');
    }

    const emails = members?.map(member => member.email) || [];

    const users = await this.userRepository.findByEmails(emails);

    const project = await this.projectRepository.create({ name });

    const createProjectMembers: ICreateProjectMemberDTO[] = [
      ...users.map<ICreateProjectMemberDTO>(user => {
        const { permission } = members.find(
          foundMember => foundMember.email === user.email,
        );

        return { permission, project_id: project.id, user_id: user.id };
      }),
      { permission: 'ADMIN', project_id: project.id, user_id: projectAdmin.id },
    ];

    project.members = await this.projectMemberRepository.createMany(
      createProjectMembers,
    );

    return project;
  }
}
