"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Mohit";
// greetings=true
// greeting=6
greetings.toUpperCase();
console.log(greetings);
// number
var userId = 334455.3;
// It is obvious that userId is number so we dont have to declare it explicitly , TS automatically infers it
var user = 6777667;
// user="Hi"  -> This gives an error
// boolean
var isLoggedIn = false;
// any
// It is not a good practice to use any , it basically turns off the type checking
var hero;
function getHero() {
    return true;
}
