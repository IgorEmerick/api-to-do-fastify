import { ICreateTaskDTO } from '@modules/task/dtos/ICreateTaskDTO';
import { Task } from '@modules/task/infra/typeorm/Task';

export interface ITaskRepository {
  create(task: ICreateTaskDTO): Promise<Task>;
}
