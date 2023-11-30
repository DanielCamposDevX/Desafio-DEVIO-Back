import Joi from "joi";

export const orderSchema = Joi.object({
    items: Joi.array().items(
        Joi.object({
            extras: Joi.array().items(Joi.number()).required(),
            quantity: Joi.number().required(),
            foodId: Joi.number().required(),
            observation: Joi.string()
        })
    ).required(),
});


export const orderUpdateSchema = Joi.object({
    name: Joi.string(),
    status: Joi.string().required()
})