import { Router } from "express";
import {
    getStudent,
    getStudents,
    createStudent,
    updateStudents,
    deleteStudents
} from "../controller/alunos.controller.js";

const studentsRouter = Router();

studentsRouter.get("/", getStudent);
studentsRouter.get("/:id", getStudents);
studentsRouter.post("/", createStudent);
studentsRouter.put("/:id", updateStudents);
studentsRouter.delete("/:id", deleteStudents);

export default studentsRouter;