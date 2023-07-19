import { DataSource, Repository } from 'typeorm';
import { ITaskOwnerRepository } from '../models/ITaskOwnerRepository';
import { TaskOwner } from '@modules/task/infra/typeorm/TaskOwner';
import { ICreateTaskOwnerDTO } from '@modules/task/dtos/ICreateTaskOwnerDTO';

export class TaskOwnerRepository implements ITaskOwnerRepository {
  private repository: Repository<TaskOwner>;

  constructor(defaultDataSource: DataSource) {
    this.repository = defaultDataSource.getRepository(TaskOwner);
  }

  async createMany(tasks_owners: ICreateTaskOwnerDTO[]): Promise<TaskOwner[]> {
    const tasksOwners = this.repository.create(tasks_owners);

    return this.repository.save(tasksOwners);
  }
}
