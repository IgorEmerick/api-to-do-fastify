import { ICreateTaskStageDTO } from '@modules/task/dtos/ICreateTaskStageDTO';
import { TaskStage } from '@modules/task/infra/typeorm/TaskStage';

export interface ITaskStageRepository {
  create(task_stage: ICreateTaskStageDTO): Promise<TaskStage>;
  findByNameAndProjectId(name: string, project_id: string): Promise<TaskStage>;
  findById(id: string): Promise<TaskStage>;
}
