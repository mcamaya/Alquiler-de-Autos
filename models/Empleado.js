import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";

const EmpleadoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    dni: {
        type: Number,
        required: [true, 'El documento de identidad es obligatorio'],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        trim: true
    },
    cargo: {
        type: String,
        default: 'USER'
    },
    activo: {
        type: Boolean,
        default: true
    },
    sucursal: {
        type: Schema.Types.ObjectId,
        ref: 'sucursales',
    },
    fechaContratacion: String,
    fechaTerminacion: String
}, {
    versionKey: false,
    timestamps: true
});

EmpleadoSchema.statics.encryptPassword = (password) => {
    const salt = bcryptjs.genSaltSync(10);
    return bcryptjs.hashSync(password, salt);
}

EmpleadoSchema.statics.comparePassword = (password, receivedPassword) => {
    return bcryptjs.compareSync(password, receivedPassword)
}

export default model('empleados', EmpleadoSchema);