
export class AnimatronicList {
    constructor() {
        //lista de todos os animatronics
        this.animatronics = [];
    }

    //postar animatronics
    createAnimatronic(animatronic) {
        this.animatronics.push(animatronic);
    }

    //retornar todos os animatronics
    getAllAnimatronics() {
        return this.animatronics;
    }

    //retornar um único animatronic por ID
    getAnimtronicById(id) {
        return this.animatronics.find((animatronic) => animatronic.id == id);
    }

    //editar um animtronic pelo ID
    putAnimatronic(id, name, image, occupation, initialLocation, description, color, status, instrument) {
        const animatronic = this.getAnimtronicById(id);

        //verifica se o animtronic encontrado existe
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

        return animatronic;
    }

    //deleta o animatronic pelo ID
    deleteAnimatronic(id) {
        return this.animatronics = this.animatronics.filter((animatronic) => animatronic.id !== id);
    }

}