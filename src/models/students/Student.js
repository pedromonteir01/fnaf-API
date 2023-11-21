import { v4 as uuidv4 } from "uuid";

export class Student {
  constructor(name, img, age, gender, description){
    this.id = this.generateId();
    this.name = name;
    this.img = img;
    this.age = age;
    this.gender = gender;
    this.description = description;
  }

  generateId() {
    return uuidv4();
  }
}