import { ICreateTaskOwnerDTO } from '../../dtos/ICreateTaskOwnerDTO';
import { TaskOwner } from '../../infra/typeorm/TaskOwner';

export interface ITaskOwnerRepository {
  createMany(tasks_owners: ICreateTaskOwnerDTO[]): Promise<TaskOwner[]>;
}
