import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export default new DataSource({
  type: 'postgres',
  migrationsTableName: 'migrations',
  host: process.env.HOST,
  port: 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [__dirname + '/orders/*.entity{.ts,.js}'],
  migrations: ['dist/data-source/migrations/*{.ts,.js}'],
  logger: 'debug',
  logging: process.env.NODE_ENV === 'development',
  synchronize: false,
});
