import { createContainer } from 'awilix';
import { registerDataSources } from './registerDataSources';
import { registerRepositories } from './registerRepositories';
import { registerProviders } from './registerProviders';
import { registerServices } from './registerServices';

const container = createContainer({ injectionMode: 'CLASSIC' });

registerDataSources(container);
registerRepositories(container);
registerProviders(container);
registerServices(container);

export { container };
