import { HttpError } from '@shared/errors/HttpError';
import { Task } from '../infra/typeorm/Task';
import { ITaskStageRepository } from '../repositories/models/ITaskStageRepository';
import { IUserRepository } from '@modules/user/repositories/models/IUserRepository';
import { ITaskRepository } from '../repositories/models/ITaskRepository';
import { ITaskOwnerRepository } from '../repositories/models/ITaskOwnerRepository';
import { ICreateTaskOwnerDTO } from '../dtos/ICreateTaskOwnerDTO';

interface IRequest {
  title: string;
  description: string;
  stage_id: string;
  owners_ids: string[];
}

export class CreateTaskService {
  constructor(
    private taskStageRepository: ITaskStageRepository,
    private userRepository: IUserRepository,
    private taskRepository: ITaskRepository,
    private taskOwnerRepository: ITaskOwnerRepository,
  ) {}

  async execute({
    description,
    owners_ids,
    stage_id,
    title,
  }: IRequest): Promise<Task> {
    const taskStage = await this.taskStageRepository.findById(stage_id);

    if (!taskStage) {
      throw new HttpError(400, 'Stage not found!');
    }

    const owners = await this.userRepository.findWithProjectsPermissionsByIds(
      owners_ids,
    );

    const allowedOwnersIds = owners_ids.filter(ownerId =>
      owners.find(
        owner =>
          owner.id === ownerId &&
          owner.projects.find(
            project =>
              project.permission === 'EDIT' || project.permission === 'ADMIN',
          ),
      ),
    );

    const task = await this.taskRepository.create({
      description,
      stage_id,
      title,
    });

    const createTasksOwners = allowedOwnersIds.map<ICreateTaskOwnerDTO>(
      ownerId => {
        return {
          task_id: task.id,
          user_id: ownerId,
        };
      },
    );

    task.owners = await this.taskOwnerRepository.createMany(createTasksOwners);

    return task;
  }
}
