import boom from "@hapi/boom";
import Empleado from "../models/Empleado.js";
import { trusted } from "mongoose";

//7. Listar los empleados con el cargo de "Vendedor".
export const getVendedores = async (req, res, next) => {
    try {
        const data = await Empleado.find({cargo: "Vendedor"});
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

//14. Mostrar los empleados con cargo de "Gerente" o "Asistente".
export const getAsistentesYGerentes = async (req, res, next) => {
    try {
        const data = await Empleado.find({$or: [{cargo: "Gerente"}, {cargo: "Asistente"}]});
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

export const getOneByDNI = async (req, res, next) => {
    try {
        const {dni} = req.params;
        const data = await Empleado.find({dni});

        if(data == false){
            throw boom.notFound('Documento no encontrado en la base de datos');
        }

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

export const getAll = async (req, res, next) => {
    try {
        const data = await Empleado.find();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

export const getOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = await Empleado.find({_id: id});

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
        const newData = new Empleado(req.body);
        const done = await newData.save();
        res.status(200).json(done);
    } catch (error) {
        next(error);
    }
}

export const inactive = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = await Empleado.findOneAndUpdate({_id: id}, {activo: false}, {new: true});

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
        const data = await Empleado.findOneAndUpdate({_id: id}, req.body, {new: true});

        if(data == null){
            throw boom.notFound('ID no encontrado en la base de datos');
        }

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

