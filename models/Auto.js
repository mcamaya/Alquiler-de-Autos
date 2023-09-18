import { Schema, model } from "mongoose";

const AutoSchema = new Schema({
    modelo: {
        type: String,
        required: [true, 'El modelo del auto es obligatorio'],
        trim: true
    },
    marca: {
        type: String,
        required: [true, 'La marca del auto es obligatoria'],
        trim: true,
        unique: true
    },
    año: {
        type: Number,
        required: [true, 'El año del modelo del auto es obligatorio'],
    },
    activo: {
        type: Boolean,
        default: true
    },
    precioDia: Number,
    precioHora: Number,
    capacidad: Number
},
{
    versionKey: false
})

export default model('autos', AutoSchema);