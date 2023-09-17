import Joi from "joi";

const id = Joi.string().uuid();
const modelo = Joi.string().alphanum().min(3).max(15);
const marca = Joi.string().alphanum().min(3).max(15);
const año = Joi.number().integer().greater(2020);
const precioDia = Joi.number().integer().min(200);
const precioHora = Joi.number().integer().min(25);

export const getAutoSchema = Joi.object({
    id: id.required()
});

export const createAutoSchema = Joi.object({
    id,
    modelo: modelo.required(),
    marca: marca.required(),
    año: año.required(),
    precioDia: precioDia.required(),
    precioHora: precioHora.required()
});

export const updateAutoSchema = Joi.object({
    modelo,
    marca,
    año,
    precioDia,
    precioHora
});
