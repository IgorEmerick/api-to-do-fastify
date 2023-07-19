import { ICreateTaskStageDTO } from '@modules/task/dtos/ICreateTaskStageDTO';
import { TaskStage } from '@modules/task/infra/typeorm/TaskStage';
import { ITaskStageRepository } from '../models/ITaskStageRepository';
import { DataSource, Repository } from 'typeorm';

export class TaskStageRepository implements ITaskStageRepository {
  private repository: Repository<TaskStage>;

  constructor(defaultDataSource: DataSource) {
    this.repository = defaultDataSource.getRepository(TaskStage);
  }

  async create(task_stage: ICreateTaskStageDTO): Promise<TaskStage> {
    const taskStage = this.repository.create(task_stage);

    return this.repository.save(taskStage);
  }

  async findByNameAndProjectId(
    name: string,
    project_id: string,
  ): Promise<TaskStage> {
    return this.repository.findOneBy({ name, project_id });
  }

  async findById(id: string): Promise<TaskStage> {
    return this.repository.findOneBy({ id });
  }
}
