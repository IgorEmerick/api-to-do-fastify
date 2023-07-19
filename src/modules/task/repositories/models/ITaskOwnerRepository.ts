import { ICreateTaskOwnerDTO } from '@modules/task/dtos/ICreateTaskOwnerDTO';
import { TaskOwner } from '@modules/task/infra/typeorm/TaskOwner';

export interface ITaskOwnerRepository {
  createMany(tasks_owners: ICreateTaskOwnerDTO[]): Promise<TaskOwner[]>;
}
