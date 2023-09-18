import { Router } from "express";
import * as service from "../controllers/sucursales.controllers.js";
import * as SucursalValidator from "../validators/sucursal.schema.js"
import joiValidator from "../middlewares/joi.validates.js";

const router = Router();

// CRUD básico
router.get('/', service.getAll);
router.get('/:id', joiValidator(SucursalValidator.getSucursalSchema, 'params'), service.getOne);
router.post('/', joiValidator(SucursalValidator.createSucursalSchema, 'body'), service.createNew);
router.delete('/:id', joiValidator(SucursalValidator.getSucursalSchema, 'params'), service.inactive);
router.patch('/:id', [
    joiValidator(SucursalValidator.getSucursalSchema, 'params'),
    joiValidator(SucursalValidator.updateSucursalSchema, 'body')
], service.update);


export default router;