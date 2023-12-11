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
    getAllAnimatronics(data) {
        const { franchise, name } = data;

        if(franchise) {
            return this.getAnimatronicByFranchise(franchise);
        }

        if(name) {
            return this.getAnimtronicByName(name);
        }

        return this.animatronics;
    }

    //métodos do filtro
    getAnimatronicByFranchise(franchise) {

        const animatronicsFilter = this.animatronics.filter((animatronic) => {
            const animatronicFranchise = franchise == undefined || animatronic.occupation == franchise;

            return animatronicFranchise;
        });

        
        return animatronicsFilter;
    }

    getAnimtronicByName(name) {
        if(name) {
            name = name.toLowerCase();
        }

        const animatronicFilter = this.animatronics.filter((animatronic) => {
            const animatronicName = name == undefined || animatronic.name.toLowerCase() === name;

            return animatronicName;
        })

        return animatronicFilter;
    }

    //retornar um único animatronic por ID
    getAnimtronicById(id) {
        return this.animatronics.find((animatronic) => animatronic.id == id);
    }

    //editar um animtronic pelo ID
    putAnimatronic(name, imageBody, imageIcon, occupation, initialLocation, description, color, status, instrument, jumpscare, id) {
        const animatronic = this.getAnimtronicById(id);

        //verifica se o animtronic encontrado existe
        if(animatronic) {
            animatronic.name = name;
            animatronic.imageIcon = imageIcon;
            animatronic.imageBody = imageBody;
            animatronic.occupation = occupation;
            animatronic.initialLocation = initialLocation;
            animatronic.description = description;
            animatronic.color = color;
            animatronic.status = status;
            animatronic.instrument = instrument;
            animatronic.jumpscare = jumpscare;
        }

        return animatronic;
    }

    //deleta o animatronic pelo ID
    deleteAnimatronic(id) {
        return this.animatronics = this.animatronics.filter((animatronic) => animatronic.id !== id);
    }

}