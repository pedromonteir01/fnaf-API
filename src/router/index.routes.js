import { Router } from "express";
import studentsRouter from "./students.routes.js"
import pizzeriasRouter from "./pizzerias.routes.js"

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send({
        message: "SERVER OK!"
    });
});

router.use("/students", studentsRouter);
router.use("/pizzerias", pizzeriasRouter);

export default router;