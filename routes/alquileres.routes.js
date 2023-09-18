import { Router } from "express";
import * as service from "../controllers/alquileres.controllers.js";
import * as AlquilerValidator from "../validators/alquiler.schema.js"
import joiValidator from "../middlewares/joi.validates.js";

const router = Router();

router.get('/activos', service.getAllActivos);
router.get('/pendientes', service.getAllPendientes);
router.get('/calcular-precio', service.calcularPrecio);

// CRUD básico
router.get('/', service.getAll);
router.get('/:id', joiValidator(AlquilerValidator.getAlquilerSchema, 'params'), service.getOne);
router.post('/', joiValidator(AlquilerValidator.createAlquilerSchema, 'body'), service.createNew);
router.delete('/:id', joiValidator(AlquilerValidator.getAlquilerSchema, 'params'), service.inactive);
router.patch('/:id', [
    joiValidator(AlquilerValidator.getAlquilerSchema, 'params'),
    joiValidator(AlquilerValidator.updateAlquilerSchema, 'body')
], service.update);


export default router;