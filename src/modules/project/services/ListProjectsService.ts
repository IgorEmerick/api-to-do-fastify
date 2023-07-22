import { Project } from '../infra/typeorm/Project';
import { IProjectMemberRepository } from '../repositories/models/IProjectMemberRepository';

export class ListProjectsService {
  constructor(private projectMemberRepository: IProjectMemberRepository) {}

  async execute(user_id: string): Promise<Project[]> {
    const projectsMember =
      await this.projectMemberRepository.findWithProjectByUserId(user_id);

    return projectsMember.map<Project>(projectMember => projectMember.project);
  }
}
