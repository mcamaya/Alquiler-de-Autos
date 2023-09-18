import boom from "@hapi/boom";
import Sucursal from "../models/Sucursal.js";
import Auto from "../models/Auto.js";

// CRUD básico
export const getAll = async (req, res, next) => {
    try {
        const data = await Sucursal.find().populate({
            path: 'autosDisponibles',
            select: '-activo -_id -capacidad',
            model: Auto
        });
        
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

export const getOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = await Sucursal.find({_id: id});

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
        const newData = await new Sucursal(req.body);
        const done = await newData.save();
        res.status(200).json(done);
    } catch (error) {
        next(error);
    }
}

export const inactive = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = await Sucursal.findOneAndUpdate({_id: id}, {activo: false}, {new: true});

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
        const data = await Sucursal.findOneAndUpdate({_id: id}, req.body, {new: true});

        if(data == null){
            throw boom.notFound('ID no encontrado en la base de datos');
        }

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

