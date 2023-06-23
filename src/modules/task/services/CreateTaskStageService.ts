import { HttpError } from '@shared/errors/HttpError';
import { TaskStage } from '../infra/typeorm/TaskStage';
import { ITaskStageRepository } from '../repositories/models/ITaskStageRepository';
import { IProjectRepository } from '@modules/project/repositories/models/IProjectRepository';

interface IRequest {
  name: string;
  project_id: string;
  color: string;
}

export class CreateTaskStageService {
  constructor(
    private taskStageRepository: ITaskStageRepository,
    private projectRepository: IProjectRepository,
  ) {}

  async execute({ name, project_id, color }: IRequest): Promise<TaskStage> {
    const existStage = await this.taskStageRepository.findByNameAndProjectId(
      name,
      project_id,
    );

    if (existStage) {
      throw new HttpError(400, 'This stage already exists!');
    }

    const project = await this.projectRepository.findById(project_id);

    if (!project) {
      throw new HttpError(404, 'Project not found!');
    }

    return this.taskStageRepository.create({ color, name, project_id });
  }
}
