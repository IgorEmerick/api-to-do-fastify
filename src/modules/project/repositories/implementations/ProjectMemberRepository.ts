import { ICreateProjectMemberDTO } from '@modules/project/dtos/ICreateProjectMemberDTO';
import { ProjectMember } from '@modules/project/infra/typeorm/ProjectMember';
import { IProjectMemberRepository } from '../models/IProjectMemberRepository';
import { DataSource, Repository } from 'typeorm';

export class ProjectMemberRepository implements IProjectMemberRepository {
  private repository: Repository<ProjectMember>;

  constructor(defaultDataSource: DataSource) {
    this.repository = defaultDataSource.getRepository(ProjectMember);
  }

  async createMany(
    members: ICreateProjectMemberDTO[],
  ): Promise<ProjectMember[]> {
    const newMembers = this.repository.create(members);

    return this.repository.save(newMembers);
  }
}
