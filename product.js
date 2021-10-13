export default class Product {
    constructor(code, name, quantity, cost) {
        this._code = code;
        this._name = name;
        this._quantity = quantity;
        this._cost = cost;
        this._total = Number(Number(this._quantity) * Number(this._cost));
    }

    //reading methods

    getCode() {
        return this._code;
    }

    getName() {
        return this._name;
    }

    getQuantity() {
        return this._quantity;
    }

    getCost() {
        return this._cost;
    }

    getTotal() {
        return this._cost * this._quantity;
    }

    //other methods/functions

    getInfo() {
        return `
        <div>
        <h2> Producto añadido </h2>
            <p>Producto: ${this._name}</p>
            <p>Código: ${Number(this._code)}</p>
            <p>Cantidad: ${Number(this._quantity)}</p>
            <p>Precio: $${Number(this._cost)}</p>
            <p>Total: $${Number(this._total)}</p>
        </div>
        `;
    }
}