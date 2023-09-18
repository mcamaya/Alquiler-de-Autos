import boom from "@hapi/boom";
import Alquiler from "../models/Alquiler.js";
import Auto from "../models/Auto.js";

// 4. Listar todos los alquileres activos junto con los datos de los clientes relacionados.
export const getAllActivos = async (req, res, next) => {
    try {
        const data = await Alquiler.find({estado: "Activo"})
            .populate('cliente', '-_id nombre dni email')
            .populate('auto', '-_id modelo marca año')
            .populate('empleado', '-_id nombre cargo')
            .populate('sucursal', '-_id ciudad direccion');

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

// 5. Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado.
export const getAllPendientes = async (req, res, next) => {
    try {
        const data = await Alquiler.find({estado: "Pendiente"})
            .populate('cliente', '-_id nombre dni email')
            .populate('auto', '-_id modelo marca año')
            .populate('empleado', '-_id nombre cargo')
            .populate('sucursal', '-_id ciudad direccion');

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

// 9. Obtener el costo total de un alquiler específico.
export const calcularPrecio = async (req, res, next) => {
    try {
        const {auto, horas, dias} = req.query;
        if ((auto && horas && dias) == undefined){
            throw boom.expectationFailed('Es obligatorio enviar queries "auto", "horas" y "dias"');
        }

        const automovil = await Auto.findOne({_id: auto});

        if(Boolean(automovil) == false){
            throw boom.notFound('ID automovil no encontrado en la base de datos');
        }

        const {precioHora, precioDia} = automovil;
        const precioTotal = ((precioDia * dias) + (precioHora * horas));

        if (Boolean(precioTotal) == false){
            throw boom.badRequest('Favor enviar números dentro de los campos correspondientes');
        }

        res.status(200).json({precioTotal});
    } catch (error) {
        next(error);
    }
}

export const getAll = async (req, res, next) => {
    try {
        const data = await Alquiler.find()
            .populate('cliente', '-_id nombre dni email')
            .populate('auto', '-_id modelo marca año')
            .populate('empleado', '-_id nombre cargo')
            .populate('sucursal', '-_id ciudad direccion');

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

export const getOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = await Alquiler.find({_id: id});

        if(data == false){
            throw boom.notFound('ID no encontrado en la base de datos');
        }

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

export const createNew = async (req, res, next) => {
    try {
        const newData = new Alquiler(req.body);
        const done = await newData.save();
        res.status(200).json(done);
    } catch (error) {
        next(error);
    }
}

export const inactive = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = await Alquiler.findOneAndUpdate({_id: id}, {activo: false}, {new: true});

        if(data == null){
            throw boom.notFound('ID no encontrado en la base de datos');
        }

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

export const update = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = await Alquiler.findOneAndUpdate({_id: id}, req.body, {new: true});

        if(data == null){
            throw boom.notFound('ID no encontrado en la base de datos');
        }

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

