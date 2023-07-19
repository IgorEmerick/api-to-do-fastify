import { ICreateTaskDTO } from '../../dtos/ICreateTaskDTO';
import { Task } from '../../infra/typeorm/Task';

export interface ITaskRepository {
  create(task: ICreateTaskDTO): Promise<Task>;
}
