import { Router } from "express";
import * as service from "../controllers/autos.controllers.js";
import * as AutoValidator from "../validators/auto.schema.js"
import joiValidator from "../middlewares/joi.validates.js";

const router = Router();

router.get('/', service.getAll);
router.get('/:id', joiValidator(AutoValidator.getAutoSchema, 'params'), service.getOneAuto);
router.post('/', joiValidator(AutoValidator.createAutoSchema, 'body'), service.createNew);
router.delete('/:id', joiValidator(AutoValidator.getAutoSchema, 'params'), service.inactive);
router.patch('/:id', [
    joiValidator(AutoValidator.getAutoSchema, 'params'),
    joiValidator(AutoValidator.updateAutoSchema, 'body')
], service.update);

export default router;