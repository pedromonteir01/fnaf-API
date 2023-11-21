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
    const { name, image, occupation, initialLocation, description, color, status, instrument } = req.body;

    const animatronic = new Animatronic(name, image, occupation, initialLocation, description, color, status, instrument);

    list.createAnimatronic(animatronic);
    return res.status(201).send({ animatronic });
}

export const putAnimatronic = (req, res) => {
    const { id } = req.params.id;
    const { name, image, occupation, initialLocation, description, color, status, instrument } = req.body;
    const animatronic = list.getAnimatronicById(id);

    list.putAnimatronic(id, name, image, occupation, initialLocation, description, color, status, instrument);

    return res.status(200).send({ animatronic });
}

export const deleteAnimatronic = (req, res) => {
    const { id } = req.params.id;
    const animatronic = list.deleteAnimatronic(id);

    list.deleteAnimatronic(id);

    return res.status(200).send({ animatronic });
}