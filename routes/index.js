import { Router } from "express";
import autos from "./autos.routes.js";
import sucursales from "./sucursales.routes.js";
import clientes from "./clientes.routes.js";
import empleados from "./empleados.routes.js";
import alquileres from "./alquileres.routes.js";

const router = Router();

router.use('/autos', autos);
router.use('/sucursales', sucursales);
router.use('/clientes', clientes);
router.use('/empleados', empleados);
router.use('/alquileres', alquileres);

export default router;