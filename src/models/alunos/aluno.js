import { v4 as uuidv4 } from "uuid";

export class aluno {
  constructor(nome, img, idade, genero, desc){
    this.id = this.generateId();
    this.nome = nome;
    this.img = img;
    this.idade = idade;
    this.genero = genero;
    this.desc = desc;
  }

  generateId() {
    return uuidv4();
  }
}