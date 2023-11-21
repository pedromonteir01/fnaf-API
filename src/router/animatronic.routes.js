import { Router } from "express";
import { 
    deleteAnimatronic, 
    getAnimatronicById, 
    getAnimatronics, 
    postAnimtronic, 
    putAnimatronic
} from "../controller/animatronics.controller";

const animatronicRouter = Router();

animatronicRouter.get("/", getAnimatronics);
animatronicRouter.get("/:id", getAnimatronicById);
animatronicRouter.post("/", postAnimtronic);
animatronicRouter.put("/:id", putAnimatronic);
animatronicRouter.delete("/:id", deleteAnimatronic);

export default animatronicRouter;