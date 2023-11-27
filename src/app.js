import express from "express";
import cors from "cors";
import indexRouter from "./routes/index.routes.js";
import "express-async-errors"
import errorHandler from "./middlewares/error-handler.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(indexRouter);
app.use(errorHandler);


export default app

