import { v4 as uuidv4 } from "uuid";

export class Pizzeria {
    constructor(name, img, franchise, description) {
        this.id = this.generateId();
        this.name = name;
        this.img = img;
        this.franchise = franchise;
        this.description = description;
    }

    generateId() {
        return uuidv4();
    }
}