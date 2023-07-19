import { DataSource, Repository } from 'typeorm';
import { ITaskRepository } from '../models/ITaskRepository';
import { Task } from '@modules/task/infra/typeorm/Task';
import { ICreateTaskDTO } from '@modules/task/dtos/ICreateTaskDTO';

export class TaskRepository implements ITaskRepository {
  private repository: Repository<Task>;

  constructor(defaultDataSource: DataSource) {
    this.repository = defaultDataSource.getRepository(Task);
  }

  async create(task: ICreateTaskDTO): Promise<Task> {
    const newTask = this.repository.create(task);

    return this.repository.save(newTask);
  }
}
