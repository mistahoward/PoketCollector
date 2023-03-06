import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import cors from "cors";

import Router from "./routes";
import AppDataSource from "./config/database";
const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.options('*', cors());
app.use(cors({ origin: process.env.FRONT_END_ROOT }));

app.use(Router);

AppDataSource.initialize()
    .then(() => {
      app.listen(PORT, () => {
        console.log("Server is running on port", PORT);
      });
    })
    .catch((error) => console.log(error))