import { Router } from "express";
import alunosRouter from "./aluno.routes.js"

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send({
        message: "SERVER OK!"
    });
});

router.use("/alunos", alunosRouter)
export default router;