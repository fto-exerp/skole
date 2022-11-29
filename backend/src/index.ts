import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Application } from "express";
import cors from "cors";

var morgan = require("morgan");

const app: Application = express();
const port: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "https://localhost:8080" }));
app.use(morgan("dev"));

/* Routes import */
import todo from "./router/todo";

/* Routes path */
app.use("/todo", todo);
/* Create connection with database */
createConnection()
  .then(async (connection) => {
    await connection.runMigrations();

    app.listen(port, function () {
      console.log(`App is listening on port http://localhost:${port} !`);
    });
  })
  .catch((error) => console.log(error));
