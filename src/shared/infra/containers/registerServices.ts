import { CreateProjectService } from '@modules/project/services/CreateProjectService';
import { AuthenticateUserService } from '@modules/user/services/AuthenticateUserService';
import { CreateUserService } from '@modules/user/services/CreateUserService';
import { AwilixContainer, asClass } from 'awilix';

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
}
