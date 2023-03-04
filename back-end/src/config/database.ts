import { DataSource } from "typeorm"

import * as dotenv from "dotenv";

dotenv.config();

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRESURL,
  port: 5432,
  username: process.env.POSTGRESUSERNAME,
  password: process.env.POSTGRESPASSWORD,
  database: process.env.POSTGRESUSERNAME,
  entities: [],
  synchronize: true,
});

export default AppDataSource;