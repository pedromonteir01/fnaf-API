import { Student } from "../models/students/Student.js"
import { Students } from "../models/students/Students.js"

const studentsList = new Students();

const verifyUrl = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) == null;
}

export const getStudents = (req, res) => {
    const students = studentsList.getStudents();
    if (students.length) {
        return res.status(200).send({students, totalStudents: students.length});
    }
    return res.status(404).json({ message: "Não há alunos cadastrados" });
};

export const getStudent = (req, res) => {
    const { id } = req.params;
    const student = studentsList.getStudentsById(id);

    if (!student) res.status(404).send({ message: "Aluno não encontrado!" });

    return res.send(student);
};

export const createStudent = (req, res) => {
    const { name, img, age, gender, description } = req.body;
    const student = new Student(name, img, age, gender, description);

    if(!name || !img || !age || !gender || !description){
        return res.status(400).send("Dados insuficientes");
    }

    if(name.length > 50 || name.length <3){
        return res.status(400).send('O tamanho do name deve ser entre 3 e 50');
    }

    if(gender.length < 8 || gender.length > 9){
        return res.status(400).send('gender Invalido');
    }

    if(age < 0 || !(Number.isInteger(age))){
        return res.status(400).send({message:"age inválida"});
    }

    if((verifyUrl(img))){
        return res.status(400).send({message:"Formato da imagem inválida"});
    }

    studentsList.addStudent(student);
    return res.status(201).send(student);
};

export const updateStudents = (req, res) => {
    const { id } = req.params;
    const { name, img, age, gender, description } = req.body;

    const student = studentsList.getStudentsById(id);

    if(!name || !img || !age || !gender || !description){
        return res.status(400).send("Dados insuficientes");
    }

    if(name.length > 50 || name.length <3){
        return res.status(400).send('O tamanho do name deve ser entre 3 e 50');
    }

    if(gender.length < 8 || gender.length > 9){
        return res.status(400).send('gender Invalido');
    }

    if(age < 0 || !(Number.isInteger(age))){
        return res.status(400).send({message:"age inválida"});
    }

    if((verifyUrl(img))){
        return res.status(400).send({message:"Formato da imagem inválida"});
    }

    if (!student) res.status(404).send({ message: "Aluno não encontrado!" });

    studentsList.updateStudents(id, name, img, age, gender, description);

    return res.send(student);
};

export const deleteStudents = (req, res) => {
    const { id } = req.params;
    const student = studentsList.getStudentsById(id);

    if (!student) res.status(404).send({ message: "Aluno não encontrado!" });

    studentsList.deleteStudents(id);

    return res.send(student);
};