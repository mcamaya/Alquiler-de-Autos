import { Schema, model } from "mongoose";

const AlquilerSchema = new Schema({
    fechaInicio: {
        type: String,
        required: [true, 'El modelo del auto es obligatorio'],
        trim: true
    },
    fechaFinal: {
        type: String,
        required: [true, 'La marca del auto es obligatoria'],
        trim: true,
        unique: true
    },
    precioTotal: {
        type: String,
        required: [true, 'El precio total del alquiler del auto es obligatorio'],
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'clientes',
        required: [true, 'El cliente que alquilará el auto es obligatorio'],
    },
    empleado: {
        type: Schema.Types.ObjectId,
        ref: 'empleados',
        required: [true, 'El empleado que realiza el alquiler es obligatorio'],
    },
    finalizado: {
        type: Boolean,
        default: false
    },
    sucursal: {
        type: Schema.Types.ObjectId,
        ref: 'sucursales'
    }
},
{
    timestamps: true,
    versionKey: false
})

export default model('alquileres', AlquilerSchema);