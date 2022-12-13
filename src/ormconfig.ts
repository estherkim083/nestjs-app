import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'hansken.db.elephantsql.com',
  port: 5432,
  username: 'lwmzzppt',
  password: 'CFEo7RGbH6hG2sARr67GQs7Lo3S7oFyX',
  database: 'lwmzzppt',
  entities: [__dirname + '/**/*.entity{.ts, .js}'],
  synchronize: true,
};
export default config;
