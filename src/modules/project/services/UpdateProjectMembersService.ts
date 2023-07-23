import { HttpError } from '../../../shared/errors/HttpError';
import { IUserRepository } from '../../user/repositories/models/IUserRepository';
import { ICreateProjectMemberDTO } from '../dtos/ICreateProjectMemberDTO';
import { IRequestProjectMemberDTO } from '../dtos/IRequestProjectMemberDTO';
import { ProjectMember } from '../infra/typeorm/ProjectMember';
import { IProjectMemberRepository } from '../repositories/models/IProjectMemberRepository';
import { IProjectRepository } from '../repositories/models/IProjectRepository';

interface IRequest {
  project_id: string;
  members: IRequestProjectMemberDTO[];
}

export class UpdateProjectMembersService {
  constructor(
    private projectRepository: IProjectRepository,
    private projectMemberRepository: IProjectMemberRepository,
    private userRepository: IUserRepository,
  ) {}

  async execute({ members, project_id }: IRequest): Promise<ProjectMember[]> {
    const project = await this.projectRepository.findById(project_id);

    if (!project) {
      throw new HttpError(404, 'Project not found!');
    }

    const projectMembers =
      await this.projectMemberRepository.findManyWithUserByProjectId(
        project_id,
      );

    const deleteProjectMembersIds = projectMembers
      .filter(
        projectMember =>
          !members.find(member => member.email === projectMember.user.email),
      )
      .map(projectMember => projectMember.id);

    await this.projectMemberRepository.deleteManyByIds(deleteProjectMembersIds);

    const updateMembers = new Set(
      members.map<ProjectMember>(member => {
        const projectMember = projectMembers.find(
          foundProjectMember => foundProjectMember.user.email === member.email,
        );

        return projectMember && projectMember.permission !== member.permission
          ? { ...projectMember, permission: member.permission, user: undefined }
          : undefined;
      }),
    );

    const newUsersEmails = members
      .filter(
        member =>
          !projectMembers.find(
            projectMember => projectMember.user.email === member.email,
          ),
      )
      .map(member => member.email);

    const newMembers = await this.userRepository.findByEmails(newUsersEmails);

    const createMembers = newMembers.map<ICreateProjectMemberDTO>(newMember => {
      const member = members.find(
        foundMember => foundMember.email === newMember.email,
      );

      return {
        permission: member.permission,
        project_id,
        user_id: newMember.id,
      };
    });

    return [
      ...(await this.projectMemberRepository.updateMany([...updateMembers])),
      ...(await this.projectMemberRepository.createMany(createMembers)),
    ];
  }
}
