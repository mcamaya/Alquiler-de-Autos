import { Schema, model } from "mongoose";

const EntregaSchema = new Schema({
    fecha: {
        type: String,
        required: [true, 'La fecha es obligatoria'],
        trim: true
    },
    entregaConRetraso: {
        type: Boolean,
        default: false
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'clientes',
        required: [true, 'El cliente que alquiló el auto es obligatorio'],
    },
    empleado: {
        type: Schema.Types.ObjectId,
        ref: 'empleados',
        required: [true, 'El empleado que recibe el auto es obligatorio'],
    },
    daños: [{
        agravamiento: Number,
        descripcion: String,
        compensacionMonetaria: Number
    }],
    hora: String
},
{
    timestamps: true,
    versionKey: false
})

export default model('entregas', EntregaSchema);