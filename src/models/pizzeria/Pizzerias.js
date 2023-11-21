export class Pizzerias {
    constructor() {
        this.pizzerias = [];
    }

    getPizzerias() {
        return this.pizzerias;
    }

    getPizzeriasById(id) {
        return this.pizzerias.find((pizzeria) => pizzeria.id === id);
    }

    addPizzeria(pizzeria) {
        this.pizzerias.push(pizzeria);
    }

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

    deletePizzeria(id) {
        this.pizzerias = this.pizzerias.filter((pizzeria) => pizzeria.id !== id);
    }
}