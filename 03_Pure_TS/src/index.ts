// class User {
//   email: string;
//   name: string;
//   private readonly city:string="Ngp"
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  protected _courseCount = 1;

  readonly city: string = "Ngp";
  constructor(
    public email: string,
    public name: string // private userId?:string
  ) {}

  private deleteToken(){
    console.log("Token deleted successfully");
  }

  //   Getters and setters
  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount():number{
    return this._courseCount
  }

  set courseCount(courseNum){
    if(courseNum<=1){
        throw new Error("Course count should be more than 1")
    }
    this._courseCount=courseNum
  }
}

class subUser extends User{
    isFamily:boolean=true
    changeCount(){
        this._courseCount=4
    }
}

const hitesh = new User("mohit@gmail.com", "Mohit");

// hitesh.city="Nagpur"
// const city=hitesh.city  ->private laga hai toh access nhi kr payenge yaha
// private can also be used as # in JS

export {}