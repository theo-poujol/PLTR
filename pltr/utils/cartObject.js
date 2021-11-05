const { Clothes } = require("./clothes");

class CartObject {
    #_clothesList;
    #_isEmpty = true;
    #_total = 0;

    constructor(clothesList) {
        this.#_clothesList = clothesList;
        if (this.#_clothesList.length != 0) this.#_isEmpty = false;
    }

    addClothes(clothes) {
        this.#_clothesList.push(clothes);
        this.#_total += clothes.getPrice();
    }

    removeClothes(clothes) {
        if (this.#_clothesList.length != 0) {
            const index = this.#_clothesList.indexOf(clothes);
            if (index > -1) {
                this.#_clothesList.splice(index, 1);
                this.#_total -= clothes.getPrice();
            }
        }
    }

    getTotalPrice() {
        return this.#_total;
    }

}

module.exports = {CartObject}
