import { DataSource } from 'typeorm';
import { container } from '../containers';

export async function startEnvironment(): Promise<void> {
  const defaultDataSource = container.resolve<DataSource>('defaultDataSource');

  await defaultDataSource.initialize();
}
