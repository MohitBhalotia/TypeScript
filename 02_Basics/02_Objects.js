"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "mohit",
    email: "mohit@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "mohit", isPaid: false, email: "h@h.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactJs", price: 399 };
}
var myUser = {
    _id: "1234",
    name: "Mohit",
    email: "mohit@gmail.com",
    isActive: false,
};
myUser.email = "m@gmail.com";
