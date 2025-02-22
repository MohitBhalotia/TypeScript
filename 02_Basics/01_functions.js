"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase() -> will throw an error
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// addTwo("5") -> will throw an error
addTwo(5);
getUpper("mohit");
signUpUser("Mohit", "mohit@gmail.com", true);
loginUser("h", "h@h.com");
