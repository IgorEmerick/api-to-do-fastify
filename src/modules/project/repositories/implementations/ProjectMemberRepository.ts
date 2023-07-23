import { ICreateProjectMemberDTO } from '../../dtos/ICreateProjectMemberDTO';
import { ProjectMember } from '../../infra/typeorm/ProjectMember';
import { IProjectMemberRepository } from '../models/IProjectMemberRepository';
import { DataSource, In, Repository } from 'typeorm';

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

  async update(member: ProjectMember): Promise<ProjectMember> {
    return this.repository.save(member);
  }

  async updateMany(members: ProjectMember[]): Promise<ProjectMember[]> {
    return this.repository.save(members);
  }

  async deleteManyByIds(ids: string[]): Promise<void> {
    await this.repository.delete({ id: In(ids) });
  }

  async findByProjectIdAndUserId(
    project_id: string,
    user_id: string,
  ): Promise<ProjectMember> {
    return this.repository.findOneBy({ project_id, user_id });
  }

  async findWithProjectByUserId(user_id: string): Promise<ProjectMember[]> {
    return this.repository.find({
      relations: { project: true },
      where: { user_id },
    });
  }

  async findManyWithUserByProjectId(
    project_id: string,
  ): Promise<ProjectMember[]> {
    return this.repository.find({
      relations: { user: true },
      where: { project_id },
    });
  }
}
