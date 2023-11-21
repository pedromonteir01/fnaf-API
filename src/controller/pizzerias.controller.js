import { Pizzeria } from '../models/pizzeria/Pizzeria.js';
import { Pizzerias } from '../models/pizzeria/Pizzerias.js';

const pizzeriasList = new Pizzerias();

const verifyUrl = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) == null;
}

export const getPizzerias = (req, res) => {
    const pizzerias = pizzeriasList.getPizzerias();
    if (pizzerias.length) {
        return res.status(200).send({ pizzerias, totalPizzerias: pizzerias.length });
    }
    return res.status(404).json({
        message: "Não há pizzerias cadastradas",
        status: "NOT FOUND"
    });
};

export const getPizzeria = (req, res) => {
    const { id } = req.params;
    const pizzeria = pizzeriasList.getPizzeriasById(id);

    if (!pizzeria) res.status(404).send({
        message: "Pizzeria não encontrada!",
        status: "NOT FOUND"
    });

    return res.send(pizzeria);
};

export const createPizzeria = (req, res) => {
    const { name, img, franchise, description } = req.body;
    const pizzeria = new Pizzeria(name, img, franchise, description);

    let numbersErrors = 0;
    let errors = [];

    if (!name || !img || !franchise || !description) {
        numbersErrors++;
        errors.push("Dados insuficientes");
    }

    if (name.length < 10 || name.length > 50) {
        numbersErrors++;
        errors.push('O nome da pizzaria deve ter entre 10 e 50 caracteres');
    }

    if (franchise.length != 6) {
        numbersErrors++;
        errors.push('A franquia deve ter 6 caracteres.');
    }

    if ((verifyUrl(img))) {
        numbersErrors++;
        errors.push("O formato da imagem é inválido");
    }

    if (numbersErrors > 0) {
        return res.status(400).send({
            message: errors,
            status: "BAD REQUEST"
        });
    } else {
        pizzeriasList.addPizzeria(pizzeria);
        return res.status(201).send(pizzeria);
    }
};

export const updatePizzerias = (req, res) => {
    const { id } = req.params;
    const { name, img, franchise, description } = req.body;

    const pizzeria = pizzeriasList.getPizzeriasById(id);

    let numbersErrors = 0;
    let errors = [];

    if (!name || !img || !franchise || !description) {
        numbersErrors++;
        errors.push("Dados insuficientes");
    }

    if (name.length < 10 || name.length > 50) {
        numbersErrors++;
        errors.push('O nome da pizzaria deve ter entre 10 e 50 caracteres');
    }

    if (franchise.length != 6) {
        numbersErrors++;
        errors.push('A franquia deve ter 6 caracteres.');
    }

    if ((verifyUrl(img))) {
        numbersErrors++;
        errors.push("O formato da imagem é inválido");
    }

    if (numbersErrors > 0) {
        return res.status(400).send({
            message: errors,
            status: "BAD REQUEST"
        });
    } else {
        // pizzeriasList.addPizzeria(pizzeria);
        pizzeriasList.updatePizzeria(id, name, img, franchise, description);
        return res.status(201).send(pizzeria);
    }

    // if (pizzeria) {
    //     pizzeria.name = name;
    //     pizzeria.img = img;
    //     pizzeria.franchise = franchise;
    //     pizzeria.description = description;
    // }

    // return res.send(pizzeria);
};

export const deletePizzerias = (req, res) => {
    const { id } = req.params;
    const pizzeria = pizzeriasList.getPizzeriasById(id);

    if (!pizzeria) res.status(404).send({
        message: "Pizzaria não encontrada!",
        status: "NOT FOUND"
    });

    pizzeriasList.deletePizzeria(id);

    return res.send(pizzeria);
};