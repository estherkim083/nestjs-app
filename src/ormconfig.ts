import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: '',
  port: 5432,
  username: '',
  password: '',
  database: '',
  entities: [__dirname + '/**/*.entity{.ts, .js}'],
  synchronize: true,
};
export default config;
