import { ICreateProjectDTO } from '../../dtos/ICreateProjectDTO';
import { Project } from '../../infra/typeorm/Project';

export interface IProjectRepository {
  create(project: ICreateProjectDTO): Promise<Project>;
  findById(id: string): Promise<Project>;
  findWithStagesAndTasksById(id: string): Promise<Project>;
}
