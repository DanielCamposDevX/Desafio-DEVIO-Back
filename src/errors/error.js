
function unprocEntity(resource) {
    return {
        type: "unprocessableEntity",
        message: `${resource ? resource : "ERROR 422"}`
    }
}


function notFound(resource) {
    return {
        type: "notFound",
        message: `${resource ? resource : "ERROR 404"}`
    }
}

function badRequest(resource) {
    return {
        type: "badRequest",
        message: `${resource ? resource : "ERROR 400"}`
    }
}


export const error = { unprocEntity, notFound, badRequest };