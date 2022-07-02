import { DataSource } from 'typeorm';
import 'dotenv/config';

const appDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '12345',
  database: process.env.DB_NAME || 'databaseName',
  logging: true,
  entities: [],
  migrations: ['./src/database/migrations/*.ts'],
});

export { appDataSource };
