import { UserRepository } from '@modules/user/repositories/implementations/UserRepository';
import { AwilixContainer, asClass } from 'awilix';

export function registerRepositories(container: AwilixContainer): void {
  container.register(
    'userRepository',
    asClass(UserRepository, { lifetime: 'SINGLETON' }),
  );
}
