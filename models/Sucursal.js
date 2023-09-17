import { Schema, model } from "mongoose";

const SucursalSchema = new Schema({
    ciudad: {
        type: String,
        required: [true, 'La ciudad es obligatoria'],
        trim: true
    },
    pais: {
        type: String,
        trim: true
    },
    direccion: {
        type: String,
        required: [true, 'La dirección de la sucursal es obligatoria'],
        trim: true,
        unique: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    autosDisponibles: [{
        type: Schema.Types.ObjectId,
        ref: 'autos',
    }]
},
{
    timestamps: true,
    versionKey: false
})

export default model('sucursales', SucursalSchema);