






function unprocEntity(resource) {
    return {
        type: "unprocessableEntity",
        message: `${resource ? resource : "ERROR 409"}`
    }
}


export const error = { unprocEntity };