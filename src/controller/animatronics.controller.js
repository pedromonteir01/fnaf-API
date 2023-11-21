import { AnimatronicList } from "../models/animatronics/animatronics.js";
import { Animatronic } from "../models/animatronics/animatronic.js";

//verificação de imagem
const verifyURL = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

//lista dos animatronics
const list = new AnimatronicList();

//Requisitar todos os animatronics
export const getAnimatronics = (res, res) => {
    const animatronics = list.getAllAnimatronics();

    //verifica se há algum animatronic
    if (animatronics.length) {
        return res.status(200).send({ animatronics, quantity: animatronics.length });
    }

    //retornar o erro
    return res.status(200).send({
        message: "no_animtronics_found"
    });
}

//requisita o animatronic pelo ID
export const getAnimatronicById = (req, res) => {
    //ID por param na requisição
    const { id } = req.params.id;
    //busca o animatronic
    const animatronic = list.getAnimtronicById(id);

    //verifica se ele existe
    if (animatronic) {
        res.status(200).send({ animatronic });
    }

    //retorna o erro
    return res.status(400).send({
        message: "no_animatronic_found"
    });

}

//cria o animatronic
export const postAnimtronic = (req, res) => {
    const errors = [];

    //captura as informações
    const { name, image, occupation, initialLocation, description, color, status, instrument, jumpascare } = req.body;

    if (!name || !image || !occupation || !initialLocation || !description || !color || !status || !instrument || !jumpascare) {
        //retorna erro
        return res.status(400).send({
            message: "incomplete_data"
        })
    }

    if (name.length < 3 && name.length > 25) {
        errors.push("invalid_name");
    }

    if (!verifyURL(image)) {
        errors.push("invalid_url");
    } 
    
    if (occupation.length < 3 && occupation.length > 50) {
        errors.push("invalid_occupation");
    }
    
    if (initialLocation.length < 3 && initialLocation.length > 30) {
        errors.push("invalid_initialLocation");
    } 

    if (description.length < 10) {
        errors.push("invalid_description");
    }
    
    if (color.length < 3 && color.length > 15) {
        errors.push("invalid_color");
    } 
    
    if (status.length < 2 && status.length > 15) {
        errors.push("invalid_status");
    }
    
    if (instrument.length > 20) {
        errors.push("invalid_instrument");
    }

    if (errors.length) {
        return errors;
    }
    
    //cria o animatronic
    const animatronic = new Animatronic(name, image, occupation, initialLocation, description, color, status, instrument, jumpascare);

    //adiciona ele na lista
    list.createAnimatronic(animatronic);
    return res.status(201).send({ animatronic });
}


//edita o animatronic pelo ID
export const putAnimatronic = (req, res) => {
    //ID por param na requisição
    const { id } = req.params.id;
    //captura os dados
    const { name, image, occupation, initialLocation, description, color, status, instrument, jumpascare } = req.body;
    //altera no animatronic
    const animatronic = list.getAnimatronicById(id);

    list.putAnimatronic(id, name, image, occupation, initialLocation, description, color, status, instrument, jumpascare);

    //retorna o animatronic
    return res.status(200).send({ animatronic });
}


//deleta o animatronic pelo ID
export const deleteAnimatronic = (req, res) => {
    //ID por param na requisição
    const { id } = req.params.id;
    //cria para passar na mensgame
    const animatronic = list.deleteAnimatronic(id);

    //deleta o animatronic
    list.deleteAnimatronic(id);

    //retorna o animatronic criado
    return res.status(200).send({ animatronic });
}