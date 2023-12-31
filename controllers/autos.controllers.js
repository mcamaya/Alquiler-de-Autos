import boom from "@hapi/boom";
import Auto from "../models/Auto.js";

// 3. Obtener todos los automóviles disponibles para alquiler.
export const getAll = async (req, res, next) => {
    try {
        const data = await Auto.find();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

export const getOneAuto = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = await Auto.find({_id: id});

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
        const newData = await new Auto(req.body);
        const done = await newData.save();
        res.status(200).json(done);
    } catch (error) {
        next(error);
    }
}

export const inactive = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = await Auto.findOneAndUpdate({_id: id}, {activo: false}, {new: true});

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
        const data = await Auto.findOneAndUpdate({_id: id}, req.body, {new: true});

        if(data == null){
            throw boom.notFound('ID no encontrado en la base de datos');
        }

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

// 11. Mostrar todos los automóviles con una capacidad mayor a 5 personas.
export const capacidad5OMayor = async (req, res, next) => {
    try {
        const data = await Auto.find({capacidad: {$gte: 5}});
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

// 16. Listar todos los automóviles ordenados por marca y modelo.
export const getOrdenadosMarcaModelo = async (req, res, next) => {
    try {
        const data = await Auto.aggregate([
            {$sort: {
                marca: 1,
                modelo: 1
            }}
        ]);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}