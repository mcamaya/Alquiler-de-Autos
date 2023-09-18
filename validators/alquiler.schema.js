import Joi from "joi";

const id = Joi.string().hex().length(24);
const cliente = Joi.string().hex().length(24);
const empleado = Joi.string().hex().length(24);
const sucursal = Joi.string().hex().length(24);
const auto = Joi.string().hex().length(24);
const fechaInicio = Joi.string().min(10);
const estado = Joi.string();
const fechaFinal = Joi.string().min(10);
const cantidadDias = Joi.number().integer();
const cantidadHoras = Joi.number().integer();
const precioTotal = Joi.number().integer();

export const getAlquilerSchema = Joi.object({
    id: id.required()
});

export const createAlquilerSchema = Joi.object({
    id,
    cliente: cliente.required(),
    empleado: empleado.required(),
    sucursal: sucursal.required(),
    auto: auto.required(),
    fechaInicio: fechaInicio.required(),
    fechaFinal: fechaFinal.required(),
    cantidadDias: cantidadDias.required(),
    cantidadHoras: cantidadHoras.required(),
    precioTotal: precioTotal.required(),
    estado
});

export const updateAlquilerSchema = Joi.object({
    cliente,
    empleado,
    sucursal,
    auto,
    fechaInicio,
    fechaFinal,
    estado,
    cantidadDias,
    cantidadHoras,
    precioTotal
});
