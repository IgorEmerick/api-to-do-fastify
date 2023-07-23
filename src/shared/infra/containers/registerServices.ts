import { AwilixContainer, asClass } from 'awilix';
import { CreateProjectService } from '../../../modules/project/services/CreateProjectService';
import { CreateTaskService } from '../../../modules/task/services/CreateTaskService';
import { CreateTaskStageService } from '../../../modules/task/services/CreateTaskStageService';
import { AuthenticateUserService } from '../../../modules/user/services/AuthenticateUserService';
import { CreateUserService } from '../../../modules/user/services/CreateUserService';
import { GetProjectByIdService } from '../../../modules/project/services/GetProjectByIdService';
import { ListProjectsService } from '../../../modules/project/services/ListProjectsService';
import { UpdateUserProjectPermissionService } from '../../../modules/project/services/UpdateUserProjectPermissionService';

export function registerServices(container: AwilixContainer): void {
  container.register(
    'createUserService',
    asClass(CreateUserService, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'authenticateUserService',
    asClass(AuthenticateUserService, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'createProjectService',
    asClass(CreateProjectService, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'createTaskStageService',
    asClass(CreateTaskStageService, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'createTaskService',
    asClass(CreateTaskService, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'getProjectByIdService',
    asClass(GetProjectByIdService, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'listProjectsService',
    asClass(ListProjectsService, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'updateUserProjectPermissionService',
    asClass(UpdateUserProjectPermissionService, { lifetime: 'SINGLETON' }),
  );
}
