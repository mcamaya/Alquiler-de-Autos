import boom from "@hapi/boom";
import Cliente from "../models/Cliente.js";

export const getOneByDNI = async (req, res, next) => {
    try {
        const {dni} = req.params;
        const data = await Cliente.find({dni});

        if(data == false){
            throw boom.notFound('Documento no encontrado en la base de datos');
        }

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

// 2. Mostrar todos los clientes registrados en la base de datos.
export const getAll = async (req, res, next) => {
    try {
        const data = await Cliente.find();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

export const getOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = await Cliente.find({_id: id});

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
        const newData = new Cliente(req.body);
        const done = await newData.save();
        res.status(200).json(done);
    } catch (error) {
        next(error);
    }
}

export const inactive = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = await Cliente.findOneAndUpdate({_id: id}, {activo: false}, {new: true});

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
        const data = await Cliente.findOneAndUpdate({_id: id}, req.body, {new: true});

        if(data == null){
            throw boom.notFound('ID no encontrado en la base de datos');
        }

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

