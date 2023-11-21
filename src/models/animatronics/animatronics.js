
export class AnimatronicList {
    constructor() {
        this.animatronics = [];
    }

    createAnimatronic(animatronic) {
        this.animatronics.push(animatronic);
    }

    getAllAnimatronics() {
        return this.animatronics;
    }

    getAnimtronicById(id) {
        return this.animatronics.find((animatronic) => animatronic.id == id);
    }

    putAnimatronic(id, name, image, occupation, initialLocation, description, color, status, instrument) {
        const animatronic = this.getAnimtronicById(id);

        if(animatronic) {
            animatronic.name = name;
            animatronic.image = image;
            animatronic.occupation = occupation;
            animatronic.initialLocation = initialLocation;
            animatronic.description = description;
            animatronic.color = color;
            animatronic.status = status;
            animatronic.instrument = instrument;
        }
    }

    deleteAnimatronic(id) {
        return this.animatronics = this.animatronics.filter((animatronic) => animatronic.id !== id);
    }

}