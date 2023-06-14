import { ICreateProjectDTO } from '@modules/project/dtos/ICreateProjectDTO';
import { Project } from '@modules/project/infra/typeorm/Project';

export interface IProjectRepository {
  create(project: ICreateProjectDTO): Promise<Project>;
}
