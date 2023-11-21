export class alunos {
    constructor() {
      this.alunos = [];
    }
  
    getAlunos() {
      return this.alunos;
    }
  
    getAlunosById(id) {
      return this.alunos.find((aluno) => aluno.id === id);
    }
  
    addAlunos(aluno) {
      this.alunos.push(aluno);
    }
  
    updateAlunos(nome, img, idade, genero, desc) {
      const aluno = this.getAlunosById(id);
  
      if (aluno) {
        aluno.nome = nome;
        aluno.img = img;
        aluno.idade = idade;
        aluno.genero = genero;
        aluno.desc = desc;
      }
  
      return aluno;
    }
  
    deleteAlunos(id) {
      this.alunos = this.alunos.filter((aluno) => aluno.id !== id);
    }
  }