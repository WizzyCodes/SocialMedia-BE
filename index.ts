import express, { Application } from "express";
import cors from "cors";
import env from "dotenv";
import { mainApp } from "./mainApp";
import { dbConfig } from "./util/dbConfig";
env.config();
const app: Application = express();

app.use(express.json());
app.use(cors());

mainApp(app);
app.listen(parseInt(process.env.PORT as string), () => {
  dbConfig();
  console.log(process.env.PORT);
});
