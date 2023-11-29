import { Router } from "express";
import { extraControllers } from "../controllers/extra.controllers";


const extraRouter = Router();

extraRouter
    .get("/extras", extraControllers.getAllExtras);


export default extraRouter;