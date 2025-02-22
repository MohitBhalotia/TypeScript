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
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

type MyString = string;

function create(user: User): User {
  return { name: "", email: "", isActive: true };
}

create({ name: "", email: "", isActive: true });

export {};
