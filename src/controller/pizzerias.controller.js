import { mockedPizzeria } from '../data/pizzerias/data.js'
import { Pizzeria } from '../models/pizzeria/Pizzeria.js';
import { Pizzerias } from '../models/pizzeria/Pizzerias.js';

// Instância da classe
const pizzeriasList = new Pizzerias();

// Função de verificação de URL
const verifyUrl = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) == null;
}

mockedPizzeria.forEach((pizzeria) => {
    const pizzeriaMocked = new Pizzeria(pizzeria.name, pizzeria.img, pizzeria.franchise, pizzeria.animatronics, pizzeria.description);
    pizzeriasList.addPizzeria(pizzeriaMocked);
})

// Função de mostrar todas as pizzarias
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

// Função de mostrar uma pizzaria específica por ID
export const getPizzeria = (req, res) => {
    const { id } = req.params;
    const pizzeria = pizzeriasList.getPizzeriasById(id);

    if (!pizzeria) res.status(404).send({
        message: "Pizzeria não encontrada!",
        status: "NOT FOUND"
    });

    return res.send(pizzeria);
};

// Função de criar uma pizzaria
export const createPizzeria = (req, res) => {
    const { name, img, franchise, animatronics, description } = req.body;

    console.log(animatronics);

    const pizzeria = new Pizzeria(name, img, franchise, animatronics, description);
    console.log("pizzeria");
    console.log(pizzeria);
    
    // Variáveis de erros
    let numbersErrors = 0;
    let errors = [];
    
    // Verificação de dados
    if (!name || !img || !franchise || !description || !animatronics) {
        numbersErrors++;
        errors.push("Dados insuficientes.");
    }
    
    // Verificação de caracteres do nome
    if (name.length < 10 || name.length > 50) {
        numbersErrors++;
        errors.push('O nome da pizzaria deve ter entre 10 e 50 caracteres.');
    }
    
    // Verificação de caracteres da franquia
    if (franchise.length > 7) {
        numbersErrors++;
        errors.push('A franquia deve ter até 7 caracteres.');
    }
    
    // Verificação de URL da imagem
    if ((verifyUrl(img))) {
        numbersErrors++;
        errors.push("O formato da imagem é inválido");
    }
    
    // Verificação de erros
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

// Função de editar uma pizzaria
export const updatePizzerias = (req, res) => {
    const { id } = req.params;
    const { name, img, franchise, description, animatronics } = req.body;

    const pizzeria = pizzeriasList.getPizzeriasById(id);

    // Variáveis de erros
    let numbersErrors = 0;
    let errors = [];

    // Verificação de dados
    if (!name || !img || !franchise || !description || !animatronics) {
        numbersErrors++;
        errors.push("Dados insuficientes");
    }

    // Verificação de caracteres do nome
    if (name.length < 10 || name.length > 50) {
        numbersErrors++;
        errors.push('O nome da pizzaria deve ter entre 10 e 50 caracteres');
    }

    // Verificação de caracteres da franquia
    if (franchise.length != 6) {
        numbersErrors++;
        errors.push('A franquia deve ter 6 caracteres.');
    }

    // Verificação de URL da imagem
    if ((verifyUrl(img))) {
        numbersErrors++;
        errors.push("O formato da imagem é inválido");
    }

    // Verificação de erros
    if (numbersErrors > 0) {
        return res.status(400).send({
            message: errors,
            status: "BAD REQUEST"
        });
    } else {
        pizzeriasList.updatePizzeria(id, name, img, franchise, animatronics, description);
        return res.status(201).send(pizzeria);
    }
};

// Função de deletar uma pizzaria
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