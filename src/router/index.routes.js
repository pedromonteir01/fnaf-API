import { Router } from "express";
import studentsRouter from "./students.routes.js"

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send({
        message: "SERVER OK!"
    });
});

router.use("/students", studentsRouter)
export default router;