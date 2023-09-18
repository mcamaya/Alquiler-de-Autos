import Joi from "joi";

const id = Joi.string().hex().length(24);
const ciudad = Joi.string().min(3).max(20);
const pais = Joi.string().min(3).max(15);
const direccion = Joi.string().min(7).max(30);
const autosDisponibles = Joi.array().items(Joi.string());

export const getSucursalSchema = Joi.object({
    id: id.required()
});

export const createSucursalSchema = Joi.object({
    id,
    ciudad: ciudad.required(),
    pais: pais.required(),
    direccion: direccion.required(),
    autosDisponibles: autosDisponibles.required(),

});

export const updateSucursalSchema = Joi.object({
    ciudad,
    pais,
    direccion,
    autosDisponibles
});
