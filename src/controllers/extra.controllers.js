import { extraServices } from "../services/extra.services.js";


async function getAllExtras(req,res) {
    const extras = await extraServices.getAllExtras()
    res.status(httpStatus.OK).send(extras);
}
















export const extraControllers = { getAllExtras };