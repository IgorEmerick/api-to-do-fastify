import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

export const DefaultDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: 'to-do-fastify',
  synchronize: false,
  entities: ['src/modules/**/infra/typeorm/*.ts'],
  migrations: ['src/shared/infra/typeorm/migrations/*.ts'],
});
