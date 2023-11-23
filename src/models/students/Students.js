export class Students {

  //armazena os estudantes dentro do array
  constructor() {
    this.students = [];
  }

  //pega todos estudantes
  getStudents() {
    return this.students;
  }

  //pega um estudante por id
  getStudentsById(id) {
    return this.students.find((student) => student.id === id);
  }

  //adiciona um estudante
  addStudent(student) {
    this.students.push(student);
  }

  //atualiza o estudante
  updateStudents(id, name, img, age, gender, description) {
    const student = this.getStudentsById(id);

    if (student) {
      student.name = name;
      student.img = img;
      student.age = age;
      student.gender = gender;
      student.description = description;
    }

    return student;
  }

  //deleta um estudante
  deleteStudents(id) {
    this.students = this.students.filter((student) => student.id !== id);
  }
}