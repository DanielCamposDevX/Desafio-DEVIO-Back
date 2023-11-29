import express from "express";
import "express-async-errors"
import cors from "cors";
import indexRouter from "./routes/index.routes.js";
import errorHandler from "./middlewares/error-handler.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(indexRouter);
app.use(errorHandler);


export default app;

