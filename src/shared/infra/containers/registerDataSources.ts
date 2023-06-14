import { AwilixContainer, asValue } from 'awilix';
import { DefaultDataSource } from '../typeorm/data_sources/DefaultDataSource';

export function registerDataSources(container: AwilixContainer): void {
  container.register('defaultDataSource', asValue(DefaultDataSource));
}
