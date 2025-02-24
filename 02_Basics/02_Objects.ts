const User = {
  name: "mohit",
  email: "mohit@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "mohit", isPaid: false, email: "h@h.com" };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactJs", price: 399 };
}

// type aliases
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// type MyString = string;

// function create(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// create({ name: "", email: "", isActive: true });



// Readonly and optional
type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: cardDetails;
};

let myUser: User = {
  _id: "1234",
  name: "Mohit",
  email: "mohit@gmail.com",
  isActive: false,
};

myUser.email = "m@gmail.com";

// myUser._id="122" -> this will throw an error because _id is read-only

export {};
