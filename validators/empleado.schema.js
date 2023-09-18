import Joi from "joi";

const id = Joi.string().hex().length(24);
const nombre = Joi.string().min(5).max(20);
const password = Joi.string().min(8).max(15);
const sucursal = Joi.string();
const dni = Joi.number().integer();
const cargo = Joi.string().min(5).max(20);
const fechaContratacion = Joi.string().length(10);
const fechaTerminacion = Joi.string().length(10);

export const getEmpleadoSchema = Joi.object({
    id: id.required()
});

export const createEmpleadoSchema = Joi.object({
    id,
    nombre: nombre.required(),
    dni: dni.required(),
    password: password.required(),
    cargo: cargo.required(),
    sucursal: sucursal.required(),
    fechaContratacion: fechaContratacion.required(),
    fechaTerminacion: fechaTerminacion.required(),
});

export const updateEmpleadoSchema = Joi.object({
    nombre,
    dni,
    password,
    cargo,
    sucursal,
    fechaContratacion,
    fechaTerminacion
});
