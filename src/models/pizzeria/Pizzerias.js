export class Pizzerias {
    constructor() {
        // Array de pizzarias
        this.pizzerias = [];
    }

    // Método de mostrar todas as pizzarias
    getPizzerias(data) {
        console.log('class data', data);
        const { franchise } = data;

        if(franchise){
            return this.getPizzeriasbyFranchise(franchise);
        }
        
        return this.pizzerias;
    }

    getPizzeriasbyFranchise(franchise){

        if(franchise){
            franchise = franchise.toUpperCase();
        }

        const pizzeriasFilt = this.pizzerias.filter((pizzeria) =>{
            const franchiseCondition = franchise == undefined || pizzeria.franchise == franchise;

            return franchiseCondition;
        });

        return pizzeriasFilt;

    }
    // Método de mostrar uma pizzaria específica por ID
    getPizzeriasById(id) {
        return this.pizzerias.find((pizzeria) => pizzeria.id === id);
    }

    // Método de criar uma pizzaria
    addPizzeria(pizzeria) {
        this.pizzerias.push(pizzeria);
    }

    // Método de editar uma pizzaria
    updatePizzeria(id, name, img, franchise, description) {
        const pizzeria = this.getPizzeriasById(id);

        if (pizzeria) {
            pizzeria.name = name;
            pizzeria.img = img;
            pizzeria.franchise = franchise;
            pizzeria.description = description;
        }

        return pizzeria;
    }

    // Método de excluir uma pizzaria
    deletePizzeria(id) {
        this.pizzerias = this.pizzerias.filter((pizzeria) => pizzeria.id !== id);
    }
}