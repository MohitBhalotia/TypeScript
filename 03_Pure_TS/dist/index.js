"use strict";
// class User {
//   email: string;
//   name: string;
//   private readonly city:string="Ngp"
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name // private userId?:string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Ngp";
    }
    deleteToken() {
        console.log("Token deleted successfully");
    }
    //   Getters and setters
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCount() {
        this._courseCount = 4;
    }
}
const hitesh = new User("mohit@gmail.com", "Mohit");
