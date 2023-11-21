import { AnimatronicList } from "../models/animatronics/animatronics.js";
import { Animatronic } from "../models/animatronics/animatronic.js";

const list = new AnimatronicList();

export const getAnimatronics = (res, res) => {
    const animatronics = list.getAllAnimatronics();

    if(animatronics.length) {
        return res.status(200).send({ animatronics });
    }

    return res.status(200).send({
        message: "no_animtronics_found"
    });
}

export const getAnimatronicById = (req, res) => {
    const { id } = req.params.id;
    const animatronic = list.getAnimtronicById(id);

    if(animatronic) {
        res.status(200).send({ animatronic });
    }

    return res.status(400).send({ 
        message: "no_animatronic_found"
     });
}

export const postAnimtronic = (req, res) => {
    const animatronic = req.body;

    list.createAnimatronic(animatronic);
    return res.status(201).send({ animatronic });
}

export const putAnimatronic = (req, res) => {
    const { id } = req.params.id;
    const { name, image, occupation, initialLocation, description, color, status, instrument } = req.body;

    
}

