import { Router } from "express";
import {
    getAluno,
    getAlunos,
    createAluno,
    updateAluno,
    deleteAluno
} from "../controller/alunos.controller";

const alunosRouter = Router();

alunosRouter.get("/", getAlunos);
alunosRouter.get("/:id", getAluno);
alunosRouter.post("/", createAluno);
alunosRouter.put("/:id", updateAluno);
alunosRouter.delete("/:id", deleteAluno);

export default animaisRouter;