import { Student } from "../models/students/Student.js"
import { Students } from "../models/students/Students.js"

//lista de estudante
const studentsList = new Students();

//verificação de imagem
const verifyUrl = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) == null;
}

//pegar todos estudante 
export const getStudents = (req, res) => {
    const students = studentsList.getStudents();
    if (students.length) {
        return res.status(200).send({ students, totalStudents: students.length });
    }
    return res.status(404).json({ message: "Não há alunos cadastrados" });
};

//pegar um estudante por id
export const getStudent = (req, res) => {
    const { id } = req.params;
    const student = studentsList.getStudentsById(id);

    if (!student) res.status(404).send({ message: "Aluno não encontrado!" });

    return res.send(student);
};

//cadastrar um estudante
export const createStudent = (req, res) => {
    const { name, img, age, gender, description } = req.body;
    const student = new Student(name, img, age, gender, description);

    let numbersErrors = 0;
    let errors = [];

    if (!name || !img || !age || !gender || !description) {
        numbersErrors++;
        errors.push("Dados insuficientes");
    }

    if (name.length > 50 || name.length < 3) {
        numbersErrors++;
        errors.push('O nome deve ter entre 3 e 50 caracteres.');
    }

    if (gender != "feminino" || gender != "masculino") {
        numbersErrors++;
        errors.push("O gênero deve ser somente feminino ou masculino.")
    }

    if (age < 0 || !(Number.isInteger(age))) {
        numbersErrors++;
        errors.push("A idade do estudante deve ser um número inteiro.");
    }

    if ((verifyUrl(img))) {
        numbersErrors++;
        errors.push("O formato da imagem é inválido.");
    }

    if (numbersErrors > 0) {
        return res.status(400).send({
            message: errors,
            status: "BAD REQUEST"
        });
    } else {
        studentsList.addStudent(student);
        return res.status(201).send(student);
    }
};

//atualizar/editar estudante
export const updateStudents = (req, res) => {
    const { id } = req.params;
    const { name, img, age, gender, description } = req.body;

    const student = studentsList.getStudentsById(id);

    let numbersErrors = 0;
    let errors = [];

    if (!name || !img || !age || !gender || !description) {
        numbersErrors++;
        errors.push("Dados insuficientes");
    }

    if (name.length > 50 || name.length < 3) {
        numbersErrors++;
        errors.push('O nome deve ter entre 3 e 50 caracteres.');
    }

    if (gender.length < 8 || gender.length > 9) {
        numbersErrors++;
        errors.push("O gênero deve ser somente feminino ou masculino.")
    }

    if (age < 0 || !(Number.isInteger(age))) {
        numbersErrors++;
        errors.push("A idade do estudante deve ser um número inteiro.");
    }

    if ((verifyUrl(img))) {
        numbersErrors++;
        errors.push("O formato da imagem é inválido.");
    }

    if (numbersErrors > 0) {
        return res.status(400).send({
            message: errors,
            status: "BAD REQUEST"
        });
    } else {
        studentsList.updateStudents(id, name, img, age, gender, description);
        return res.status(201).send(student);
    }
};

//deletar estudante
export const deleteStudents = (req, res) => {
    const { id } = req.params;
    const student = studentsList.getStudentsById(id);

    if (!student) res.status(404).send({ message: "Aluno não encontrado!" });

    studentsList.deleteStudents(id);

    return res.send(student);
};