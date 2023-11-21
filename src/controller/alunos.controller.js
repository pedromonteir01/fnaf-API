import {aluno} from "../models/alunos/aluno.js"
import {alunos} from "../models/alunos/alunos.js"

const alunosLista = new alunos();

const Url = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) == null;
}

export const getAlunos = (req, res) => {
    const alunos = alunosLista.getAlunos();
    if (alunos.length) {
        return res.status(200).send({alunos, quantidade: alunos.length});
    }
    return res.status(404).json({ message: "Não há alunos cadastrados" });
};

export const getAluno = (req, res) => {
    const { id } = req.params;
    const aluno = alunosLista.getAlunosById(id);

    if (!aluno) res.status(404).send({ message: "Aluno não encontrado!" });

    return res.send(aluno);
};

export const createAluno = (req, res) => {
    const { nome, img, idade, genero, desc } = req.body;
    const aluno = new Aluno(nome, img, idade, genero, desc);

    if(!nome || !img || !idade || !genero || !desc){
        return res.status(400).send("Dados insuficientes");
    }

    if(nome.length > 50 || nome.length <3){
        return res.status(400).send('O tamanho do nome deve ser entre 3 e 50');
    }

    if(genero.length > 8 || genero.length < 9){
        return res.status(400).send('Genero Invalido');
    }

    if(idade < 0 || !(Number.isInteger(idade))){
        return res.status(400).send({message:"Idade inválida"});
    }

    if(!(Url(img))){
        return res.status(400).send({message:"Formato da imagem inválida"});
    }

    alunosLista.addAlunos(aluno);
    return res.status(201).send(aluno);
};

export const updateAluno = (req, res) => {
    const { id } = req.params;
    const { nome, img, idade, genero, desc } = req.body;

    const aluno = alunosLista.getAlunosById(id);

    if (!aluno) res.status(404).send({ message: "Aluno não encontrado!" });

    alunosLista.updateAlunos(nome, img, idade, genero, desc);

    return res.send(aluno);
};

export const deleteAluno = (req, res) => {
    const { id } = req.params;
    const aluno = alunosLista.getAlunosById(id);

    if (!aluno) res.status(404).send({ message: "Aluno não encontrado!" });

    alunosLista.deleteAlunos(id);

    return res.send(aluno);
};