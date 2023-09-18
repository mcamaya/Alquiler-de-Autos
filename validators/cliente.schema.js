import Joi from "joi";

const id = Joi.string().hex().length(24);
const nombre = Joi.string().min(5).max(20);
const direccion = Joi.string().min(10).max(30);
const dni = Joi.number().integer();
const tipoDocumento = Joi.string().min(7).max(20);
const celular = Joi.number().integer();
const email = Joi.string().email();

export const getClienteSchema = Joi.object({
    id: id.required()
});

export const createClienteSchema = Joi.object({
    id,
    nombre: nombre.required(),
    dni: dni.required(),
    direccion: direccion.required(),
    celular: celular.required(),
    email: email.required(),
    tipoDocumento: tipoDocumento.required(),

});

export const updateClienteSchema = Joi.object({
    nombre,
    dni,
    direccion,
    tipoDocumento,
    celular,
    email
});
