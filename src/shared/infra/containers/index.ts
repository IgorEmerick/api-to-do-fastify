import { createContainer } from 'awilix';
import { registerDataSource } from './registerDataSource';
import { registerRepositories } from './registerRepositories';
import { registerProviders } from './registerProviders';
import { registerServices } from './registerServices';

const container = createContainer({ injectionMode: 'CLASSIC' });

registerDataSource(container);
registerRepositories(container);
registerProviders(container);
registerServices(container);

export { container };
