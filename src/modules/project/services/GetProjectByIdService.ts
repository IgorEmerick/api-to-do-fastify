import { HttpError } from '../../../shared/errors/HttpError';
import { Project } from '../infra/typeorm/Project';
import { IProjectRepository } from '../repositories/models/IProjectRepository';

export class GetProjectByIdService {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(project_id: string): Promise<Project> {
    const project = await this.projectRepository.findWithStagesAndTasksById(
      project_id,
    );

    if (!project) {
      throw new HttpError(404, 'Project not found!');
    }

    return project;
  }
}
