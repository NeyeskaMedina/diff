import Joi from "joi";

//USER
export const name = Joi.string().max(55).required();
export const password = Joi.string().max(10).required();