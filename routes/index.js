import { Router } from "express";
import autos from "./autos.routes.js";

const router = Router();

router.use('/autos', autos);

export default router;