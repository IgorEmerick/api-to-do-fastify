import { ProjectMemberRepository } from '@modules/project/repositories/implementations/ProjectMemberRepository';
import { ProjectRepository } from '@modules/project/repositories/implementations/ProjectRepository';
import { TaskStageRepository } from '@modules/task/repositories/implementations/TaskStageRepository';
import { UserRepository } from '@modules/user/repositories/implementations/UserRepository';
import { AwilixContainer, asClass } from 'awilix';

export function registerRepositories(container: AwilixContainer): void {
  container.register(
    'userRepository',
    asClass(UserRepository, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'projectRepository',
    asClass(ProjectRepository, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'projectMemberRepository',
    asClass(ProjectMemberRepository, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'taskStageRepository',
    asClass(TaskStageRepository, { lifetime: 'SINGLETON' }),
  );
}
