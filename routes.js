// pequeña prueba de enrutamiento
/* import { Router } from "express";
import sucursal from "./models/Sucursal.js";
import auto from "./models/Auto.js";
const router = Router();

router.get('/', async (req, res) => {
    try {
        const data = await sucursal.find().populate({
            path: 'autosDisponibles',
            select: '-activo -_id',
            model: auto
          });
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json(error)
    }
})

export default router; */