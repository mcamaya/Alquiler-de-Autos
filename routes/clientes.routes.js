import { Router } from "express";
import * as service from "../controllers/clientes.controllers.js";
import * as ClienteValidator from "../validators/cliente.schema.js"
import joiValidator from "../middlewares/joi.validates.js";

const router = Router();

router.get('/docs/:dni', service.getOneByDNI);

// CRUD básico
router.get('/', service.getAll);
router.get('/:id', joiValidator(ClienteValidator.getClienteSchema, 'params'), service.getOne);
router.post('/', joiValidator(ClienteValidator.createClienteSchema, 'body'), service.createNew);
router.delete('/:id', joiValidator(ClienteValidator.getClienteSchema, 'params'), service.inactive);
router.patch('/:id', [
    joiValidator(ClienteValidator.getClienteSchema, 'params'),
    joiValidator(ClienteValidator.updateClienteSchema, 'body')
], service.update);


export default router;