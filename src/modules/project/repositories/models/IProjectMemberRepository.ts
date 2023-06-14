import { ICreateProjectMemberDTO } from '@modules/project/dtos/ICreateProjectMemberDTO';
import { ProjectMember } from '@modules/project/infra/typeorm/ProjectMember';

export interface IProjectMemberRepository {
  createMany(members: ICreateProjectMemberDTO[]): Promise<ProjectMember[]>;
}
