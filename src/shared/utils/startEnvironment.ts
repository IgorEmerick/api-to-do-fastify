import { DataSource } from 'typeorm';
import { container } from '../infra/containers';

export async function startEnvironment(): Promise<void> {
  const defaultDataSource = container.resolve<DataSource>('defaultDataSource');

  await defaultDataSource.initialize();
}
