import { Router } from "express";
import studentsRouter from "./students.routes.js"
import pizzeriasRouter from "./pizzerias.routes.js"
import animatronicRouter from "./animatronic.routes.js";

const router = Router();

//rota
router.get("/", (req, res) => {
    res.status(200).send({
        message: "SERVER OK!"
    });
});

// Rota para acessar Students
router.use("/students", studentsRouter);
// Rota para acessar Pizzerias
router.use("/pizzerias", pizzeriasRouter);
// Rota para acessar Animatronics
router.use("/animatronics", animatronicRouter);

export default router;