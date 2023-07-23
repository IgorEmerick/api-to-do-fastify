import { ICreateProjectMemberDTO } from '../../dtos/ICreateProjectMemberDTO';
import { ProjectMember } from '../../infra/typeorm/ProjectMember';

export interface IProjectMemberRepository {
  createMany(members: ICreateProjectMemberDTO[]): Promise<ProjectMember[]>;
  update(member: ProjectMember): Promise<ProjectMember>;
  updateMany(members: ProjectMember[]): Promise<ProjectMember[]>;
  deleteManyByIds(ids: string[]): Promise<void>;
  findByProjectIdAndUserId(
    project_id: string,
    user_id: string,
  ): Promise<ProjectMember>;
  findWithProjectByUserId(user_id: string): Promise<ProjectMember[]>;
  findManyWithUserByProjectId(project_id: string): Promise<ProjectMember[]>;
}
