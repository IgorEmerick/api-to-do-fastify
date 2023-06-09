import { BCryptHashProvider } from '@modules/user/providers/implementations/BCryptHashProvider';
import { AwilixContainer, asClass } from 'awilix';

export function registerProviders(container: AwilixContainer): void {
  container.register(
    'hashProvider',
    asClass(BCryptHashProvider, { lifetime: 'SINGLETON' }),
  );
}
