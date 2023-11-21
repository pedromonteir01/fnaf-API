import { Router } from "express";
import { 
    deleteAnimatronic, 
    getAnimatronicById, 
    getAnimatronics, 
    postAnimtronic, 
    putAnimatronic
} from "../controller/animatronics.controller.js";

//rota anexada no index router
const animatronicRouter = Router();

//métodos dos cruds e suas funções
animatronicRouter.get("/", getAnimatronics);
animatronicRouter.get("/:id", getAnimatronicById);
animatronicRouter.post("/", postAnimtronic);
animatronicRouter.put("/:id", putAnimatronic);
animatronicRouter.delete("/:id", deleteAnimatronic);

export default animatronicRouter;