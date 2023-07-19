import { ICreateProjectDTO } from '../../dtos/ICreateProjectDTO';
import { Project } from '../../infra/typeorm/Project';
import { IProjectRepository } from '../models/IProjectRepository';
import { DataSource, Repository } from 'typeorm';

export class ProjectRepository implements IProjectRepository {
  private repository: Repository<Project>;

  constructor(defaultDataSource: DataSource) {
    this.repository = defaultDataSource.getRepository(Project);
  }

  async create(project: ICreateProjectDTO): Promise<Project> {
    const newProject = this.repository.create(project);

    return this.repository.save(newProject);
  }

  async findById(id: string): Promise<Project> {
    return this.repository.findOneBy({ id });
  }
}
