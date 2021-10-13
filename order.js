export default class Order {
    constructor() {
        this._products = new Array();
    }

    add(product) {
        let pos = this._findProduct(product);

        if(pos >= 0) {
            return false;
        } else if(this._products.length === 20) {
            return false;
        } 

        this._products.push(product);

        return true;
    }

    delete(product) {
        let pos = this._findProduct(product);

        if(pos > -1) {
            for(let i=pos; i<this._products.length; i++) {
                this._products[i] = this._products[i+1];
                this._products.pop();
            }
        }
    }

    find(product) {
        for(let i=0; i<this._products.length; i++) {
            if(this._products[i].getCode() == product) {
                return this._products[i];
            }
        }
        return null;
    }

    list() {
        let list = ``;
        for(let i=0; i<this._products.length; i++) {
            list = list + this._products[i].getInfo();
        }
        return list;
    }

    listInverse() {
        let listInv = ``;
        for(let i=this._products.length-1; i>=0; i--) {
            listInv = listInv + this._products[i].getInfo();
        }
        return listInv;
    }

    insert(product, position) {
        this._products.push(this._products[this._products.length-1]);
        for (let p=position, i=this._products.length-2, q=i-1; p < this._products.length; p++, i--, q--) {
            this._products[i] = this._products[q];
        }

        this._products[position] = product;
        return this._products;
      }

    _findProduct(product) {
        for(let i=0; i<this._products.length; i++) {
            if(this._products[i].getCode() === product) {
                return i;
            }
            return -1;
        }
    }

    getTotalQuantity() {
        let qty = 0;

        for(let i = 0; i < this._products.length; i++) {
            qty += this._products[i].getQuantity();
        }
        
        return qty;
    }

    getCompleteTotal() {
        let total = 0;

        for(let i = 0; i < this._products.length; i++) {
            total += this._products[i].getTotal();
        }

        return total;
    }
}