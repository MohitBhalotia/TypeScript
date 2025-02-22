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
function create(user) {
    return { name: "", email: "", isActive: true };
}
create({ name: "", email: "", isActive: true });
