
function unprocEntity(resource) {
    return {
        type: "unprocessableEntity",
        message: `${resource ? resource : "ERROR 409"}`
    }
}


function notFound(resource) {
    return {
        type: "notFound",
        message: `${resource ? resource : "ERROR 409"}`
    }
}


export const error = { unprocEntity, notFound };