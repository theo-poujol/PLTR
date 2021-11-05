const { CartObject } = require("./cartObject");

export class ServerSessionCookie {

    _sessionID;
    _email;
    _cart = new CartObject([]);
    

    constructor(sessionID, email) {
        this._sessionID = sessionID;
        this._email = email;
    }

    // getSessionID() {
    //     return this.#_sessionID;
    // }
    // getUserEmail() {
    //     return this.#_email;

    // }

    // getUserCart() {
    //     return this.#_cart;
    // }
}

module.exports = { ServerSessionCookie }

