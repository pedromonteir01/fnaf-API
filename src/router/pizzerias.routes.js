import { Router } from "express";
import {
    getPizzeria,
    getPizzerias,
    createPizzeria,
    updatePizzerias,
    deletePizzerias
} from "../controller/pizzerias.controller.js";

const pizzeriasRouter = Router();

// Rotas
pizzeriasRouter.get("/", getPizzerias);
pizzeriasRouter.get("/:id", getPizzeria);
pizzeriasRouter.post("/", createPizzeria);
pizzeriasRouter.put("/:id", updatePizzerias);
pizzeriasRouter.delete("/:id", deletePizzerias);

export default pizzeriasRouter;