export class Students {
    constructor() {
      this.students = [];
    }
  
    getStudents() {
      return this.students;
    }
  
    getStudentsById(id) {
      return this.students.find((student) => student.id === id);
    }
  
    addStudent(student) {
      this.students.push(student);
    }
  
    updateStudents(name, img, age, gender, description) {
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
  
    deleteStudents(id) {
      this.students = this.students.filter((student) => student.id !== id);
    }
  }