import Joi from "joi";

export const orderSchema = Joi.object({
    userId: Joi.number().required(),
    observation: Joi.string().required(),
    items: Joi.array().items(
        Joi.object({
            extras: Joi.array().items(Joi.number()).required(),
            quantity: Joi.number().required(),
            foodId: Joi.number().required(),
            observation: Joi.string().required()
        })
    ).required(),
});