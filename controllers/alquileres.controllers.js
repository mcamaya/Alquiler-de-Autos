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

// 12. Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'.
export const alquileresJulio05 = async (req, res, next) => {
    try {
        const fecha = new Date('2023-07-05').toISOString();
        const data = await Alquiler.find({fechaInicio: {$gte: fecha}})
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

// 21. Listar los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10'.
export const alquileresJulio05Julio10 = async (req, res, next) => {
    try {
        const fecha1 = new Date('2023-07-05').toISOString();
        const fecha2 = new Date('2023-07-10').toISOString();
        const data = await Alquiler.aggregate([
            {
                $match: {
                    fechaInicio: {$gte: fecha1}, 
                    fechaFinal: {$lte: fecha2}
                }
            }
        ]);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

// 13. Listar las reservas pendientes realizadas por un cliente específico.
export const getAllPendientesByID = async (req, res, next) => {
    try {
        const {idCliente} = req.params;
        console.log(idCliente);
        const data = await Alquiler.find({estado: "Pendiente", cliente: idCliente})
            .populate('cliente', '-_id nombre dni email')
            .populate('auto', '-_id modelo marca año')
            .populate('empleado', '-_id nombre cargo')
            .populate('sucursal', '-_id ciudad direccion');

        if(data == false){
            throw boom.notFound('ID cliente no tiene reservar pendientes');
        }

        res.status(200).json(data);
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

