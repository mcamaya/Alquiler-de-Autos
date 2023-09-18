import { Schema, model } from "mongoose";

const AlquilerSchema = new Schema({
    fechaInicio: {
        type: String,
        trim: true
    },
    fechaFinal: {
        type: String,
        trim: true
    },
    cantidadDias: Number,
    cantidadHoras: Number,
    precioTotal: {
        type: Number,
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
    estado: {
        type: String,
        default: 'Pendiente' //Pendiente, activo, finalizado
    },
    sucursal: {
        type: Schema.Types.ObjectId,
        ref: 'sucursales'
    },
    auto: {
        type: Schema.Types.ObjectId,
        ref: 'autos'
    }
},
{
    timestamps: true,
    versionKey: false
})

export default model('alquileres', AlquilerSchema);