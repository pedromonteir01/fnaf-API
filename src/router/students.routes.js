import { Router } from "express";
import {
    getStudent,
    getStudents,
    createStudent,
    updateStudents,
    deleteStudents
} from "../controller/students.controller.js";

//rota anexada no index router
const studentsRouter = Router();

//métodos dos cruds e suas funções
studentsRouter.get("/", getStudents);
studentsRouter.get("/:id", getStudent);
studentsRouter.post("/", createStudent);
studentsRouter.put("/:id", updateStudents);
studentsRouter.delete("/:id", deleteStudents);

export default studentsRouter;