function addTwo(num: number): number {
  // num.toUpperCase() -> will throw an error
  // return "hello" -> will throw an error
  return num + 2;
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

// addTwo("5") -> will throw an error
addTwo(5);

getUpper("mohit");

signUpUser("Mohit", "mohit@gmail.com", true);

loginUser("h", "h@h.com");

// function getValue(myVal:number):string{
//   if(myVal>5){
//     return true ->will throw an error
//   }
//   return "200 OK"
// }

const getHello = (s: string): string => {
  return "";
};

const heroes = ["thor", "spiderman", "ironman"];
// const heroes=[1,2,3]
heroes.map((hero): string => {
  // return 2 ->this will throw an error
  return "";
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
  // return 1
}

function handleError(errMsg:string): never{
  throw new Error(errMsg)
}
export {};
