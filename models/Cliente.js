import { Schema, model } from "mongoose";

const ClienteSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    dni: {
        type: Number,
        required: [true, 'El N° de documento es obligatorio'],
        trim: true,
        unique: true
    },
    tipoDocumento: {
        type: String,
        default: 'Cédula de Ciudadanía'
    },
    activo: {
        type: Boolean,
        default: true
    },
    celular: Number,
    email: String,
    direccion: String
},
{
    timestamps: true,
    versionKey: false
})

export default model('clientes', ClienteSchema);