import { extraRepositories } from "../repositories/extra.repositories.js"


async function getAllExtras() {
    const extras = await extraRepositories.getAllExtras();
    return extras;
}










export const extraServices = { getAllExtras }