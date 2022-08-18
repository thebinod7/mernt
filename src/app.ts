import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from 'config';
import todoRoutes from "./routes";

const app: Express = express();

const PORT: string | number = config.get("app.port") || 4000;
const MONGO_URI: string = config.get("app.db_url");
const MONGO_OPTIONS: object = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(cors())
app.use(todoRoutes)

mongoose
  .connect(MONGO_URI, MONGO_OPTIONS)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  });