import { AnimatronicList } from "../models/animatronics/animatronics.js";
import { Animatronic } from "../models/animatronics/animatronic.js";
import { mockedAnimatronic } from "../data/data.js";

//verificação de imagem
const verifyURL = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

const verifyVideo = (url) => {
    console.log("Caiu na func video")
    return url.match(/\.(mp4)$/) != null;
}


//lista dos animatronics
const list = new AnimatronicList();

    mockedAnimatronic.forEach((animatronic) => {
        const animatronicMocked = new Animatronic(animatronic.name, animatronic.image, animatronic.occupation, animatronic.initialLocation, animatronic.description, animatronic.color, animatronic.status, animatronic.instrument, animatronic.jumpscare);
        list.createAnimatronic(animatronicMocked);
    })


//Requisitar todos os animatronics
export const getAnimatronics = (req, res) => {
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
    const { name, image, occupation, initialLocation, description, color, status, instrument, jumpscare } = req.body;

    if (!name || !image || !occupation || !initialLocation || !description || !color || !status || !instrument || !jumpscare) {
        //retorna erro
        return res.status(400).send({
            message: "incomplete_data"
        })
    }

    //faz a verificação do tamanho do nome    if (name.length < 3 && name.length > 25) {
        errors.push("invalid_name");
    }

    //faz a verificação do Url da imagem
    if (!verifyURL(image)) {
        errors.push("invalid_image");
    }

    //faz a verificação do tamanho da ocupação
    if (occupation.length < 3 && occupation.length > 25) {
        errors.push("invalid_occupation");
    }

    //faz a verificação do tamanho da localização inicial
    if (initialLocation.length < 3 && initialLocation > 25) {
        errors.push("invalid_initialLocation");
    }

    //faz a verificação do tamanho da descrição
    if (description.length < 10 ){
        errors.push("invalid_description");
    }

    //faz a verificação do tamanho da cor
    if (color.length < 3 && color.length > 25) {
        errors.push("invalid_color");
    }

    //faz a verificação do tamanho do nome
    if (instrument.length <3 && instrument.length > 25) {
        errors.push("invalid_instrument");
    }

    //faz a verificação do tamanho do status
    if (status.length < 3 && status.length > 25 ) {
        errors.push("invalid_status");
    }

    //faz a verificação do Url do video
    if (!verifyVideo(video)) {
        errors.push("invalid_Url");
    }

    //restorna os erros adicionas ao array
    if (errors.length) {
        return errors;
    }
    
    //cria o animatronic
    const animatronic = new Animatronic(name, image, occupation, initialLocation, description, color, status, instrument, jumpscare);

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