import { Router } from "express";

import animatronicRouter from "./animatronic.routes.js";


const router = Router();

//rota
router.get("/", (req, res) => {
    res.status(200).send({
        message: "SERVER OK!"
    });
});


//rota para acessar animatronics
router.use("/animatronics", animatronicRouter);

export default router;