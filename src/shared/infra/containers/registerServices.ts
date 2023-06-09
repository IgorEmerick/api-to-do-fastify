import { CreateUserService } from '@modules/user/services/CreateUserService';
import { AwilixContainer, asClass } from 'awilix';

export function registerServices(container: AwilixContainer): void {
  container.register(
    'createUserService',
    asClass(CreateUserService, { lifetime: 'SINGLETON' }),
  );
}
