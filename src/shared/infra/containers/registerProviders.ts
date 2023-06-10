import { BCryptHashProvider } from '@modules/user/providers/implementations/BCryptHashProvider';
import { JWTTokenProvider } from '@modules/user/providers/implementations/JWTTokenProvider';
import { AwilixContainer, asClass } from 'awilix';

export function registerProviders(container: AwilixContainer): void {
  container.register(
    'hashProvider',
    asClass(BCryptHashProvider, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'tokenProvider',
    asClass(JWTTokenProvider, { lifetime: 'SINGLETON' }),
  );
}
