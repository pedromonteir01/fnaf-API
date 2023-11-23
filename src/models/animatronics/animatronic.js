import { v4 as uuidv4 } from "uuid";

export class Animatronic {
    constructor(name, image, occupation, initialLocation, description, color, status, instrument, jumpscare) {
        this.name = name;
        this.image = image;
        this.occupation = occupation;
        this.initialLocation = initialLocation;
        this.description = description;
        this.color = color;
        this.status = status;
        this.instrument = instrument;
        //método do ID importado do uuid
        this.id = this.generateId();
        this.jumpscare = jumpscare;
    }

    generateId() {
        return uuidv4()
    }
}