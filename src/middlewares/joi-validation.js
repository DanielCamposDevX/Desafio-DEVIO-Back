import { error } from "../errors/error.js"

export default function validateSchema(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false });

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            throw error.unprocEntity(errors)
        }
        else {
            next()
        }
    }
}