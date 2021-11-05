class Clothes {

    #_img_src;
    #_price;

    _name;
    _size;
    _color;
    _ref;

    constructor(img_src, price, name, size, color, ref) {
        this.#_img_src = img_src;
        this.#_price = price;
        this._name = name;
        this._size = size;
        this._color = color;
        this._ref = ref;
    }


    getImgSrc() {
        return this.#_img_src;
    }

    getPrice() {
        return this.#_price;
    }
}

module.exports = {Clothes}
