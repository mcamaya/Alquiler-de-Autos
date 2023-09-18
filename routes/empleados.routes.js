import { Router } from "express";
import * as service from "../controllers/empleados.controllers.js";
import * as EmpleadoValidator from "../validators/empleado.schema.js"
import joiValidator from "../middlewares/joi.validates.js";

const router = Router();

router.get('/vendedores', service.getVendedores);
router.get('/gerentes_asistentes', service.getAsistentesYGerentes);
router.get('/docs/:dni', service.getOneByDNI);

// CRUD básico
router.get('/', service.getAll);
router.get('/:id', joiValidator(EmpleadoValidator.getEmpleadoSchema, 'params'), service.getOne);
router.post('/', joiValidator(EmpleadoValidator.createEmpleadoSchema, 'body'), service.createNew);
router.delete('/:id', joiValidator(EmpleadoValidator.getEmpleadoSchema, 'params'), service.inactive);
router.patch('/:id', [
    joiValidator(EmpleadoValidator.getEmpleadoSchema, 'params'),
    joiValidator(EmpleadoValidator.updateEmpleadoSchema, 'body')
], service.update);


export default router;