import { HttpError } from '../../../shared/errors/HttpError';
import { ProjectMember } from '../infra/typeorm/ProjectMember';
import { IProjectMemberRepository } from '../repositories/models/IProjectMemberRepository';

interface IRequest {
  project_id: string;
  user_id: string;
  permission: string;
}

export class UpdateUserProjectPermissionService {
  constructor(private projectMemberRepository: IProjectMemberRepository) {}

  async execute({
    permission,
    project_id,
    user_id,
  }: IRequest): Promise<ProjectMember> {
    const projectMember =
      await this.projectMemberRepository.findByProjectIdAndUserId(
        project_id,
        user_id,
      );

    if (!projectMember) {
      throw new HttpError(400, 'User is not on this project!');
    }

    return projectMember.permission === permission
      ? projectMember
      : this.projectMemberRepository.update({ ...projectMember, permission });
  }
}
