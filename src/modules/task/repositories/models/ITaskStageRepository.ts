import { ICreateTaskStageDTO } from '../../dtos/ICreateTaskStageDTO';
import { TaskStage } from '../../infra/typeorm/TaskStage';

export interface ITaskStageRepository {
  create(task_stage: ICreateTaskStageDTO): Promise<TaskStage>;
  findByNameAndProjectId(name: string, project_id: string): Promise<TaskStage>;
  findById(id: string): Promise<TaskStage>;
}
