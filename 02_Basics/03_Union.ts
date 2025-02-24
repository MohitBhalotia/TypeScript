// Unions

let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let mohit: User | Admin = { name: "mohit", id: 222 };

mohit = { username: "admin", id: 23232 };

function getDbId(id: number | string) {
  // making some API Calls
  //   console.log(`DB id is ${id}`);

  if (typeof id === "string") {
    id.toUpperCase();
  } else {
    id + 2;
  }
}

getDbId(4);
getDbId("A");



const data:number[]=[1,2,3]
const data2:string[]=["1","3","5"]
const data3:(string|number|boolean)[]=["1","4",5,true]



let seatAllotment:"aisle"|"middle"|"window"
seatAllotment="aisle"
// seatAllotment="crew" -> this will give an error 
export {}


