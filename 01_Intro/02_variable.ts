let greetings: string = "Hello Mohit";

// greetings=true
// greeting=6

greetings.toUpperCase();
console.log(greetings);

// number
let userId: number = 334455.3;

// It is obvious that userId is number so we dont have to declare it explicitly , TS automatically infers it
let user = 6777667;
// user="Hi"  -> This gives an error

// boolean
let isLoggedIn: boolean = false;

// any
// It is not a good practice to use any , it basically turns off the type checking
let hero: string;

function getHero() {
  return true;
}
// hero = getHero(); ->will throw an error because we are passing a boolean value to a string type variable

export {};
