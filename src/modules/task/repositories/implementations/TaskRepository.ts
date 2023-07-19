import { DataSource, Repository } from 'typeorm';
import { ITaskRepository } from '../models/ITaskRepository';
import { ICreateTaskDTO } from '../../dtos/ICreateTaskDTO';
import { Task } from '../../infra/typeorm/Task';

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
