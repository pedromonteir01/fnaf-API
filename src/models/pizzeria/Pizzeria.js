import { v4 as uuidv4 } from "uuid";

export class Pizzeria {
    constructor(name, img, franchise, animatronics, description) {
        // Atributos da pizzaria
        this.id = this.generateId();
        this.name = name;
        this.img = img;
        this.franchise = franchise;
        this.animatronics = animatronics;
        this.description = description;
    }

    // Método de gerar ID
    generateId() {
        return uuidv4();
    }
}