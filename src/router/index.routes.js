import { Router } from "express";
import animatronicRouter from "./animatronic.routes";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send({
        message: "SERVER OK!"
    });
});

router.use("/animatronics", animatronicRouter);

export default router;