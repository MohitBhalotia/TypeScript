"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTWo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree("3")
function identityFour(val) {
    return val;
}
identityFour({ brand: "Milton", type: "Sipper" });
function getSearchProducts(products) {
    // do some db operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // do some db Operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
