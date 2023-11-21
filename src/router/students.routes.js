import { Router } from "express";
import {
    getStudent,
    getStudents,
    createStudent,
    updateStudents,
    deleteStudents
} from "../controller/students.controller.js";

const studentsRouter = Router();

studentsRouter.get("/", getStudents);
studentsRouter.get("/:id", getStudent);
studentsRouter.post("/", createStudent);
studentsRouter.put("/:id", updateStudents);
studentsRouter.delete("/:id", deleteStudents);

export default studentsRouter;