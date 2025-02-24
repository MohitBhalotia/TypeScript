interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;

  // startTrial:()=>string
  startTrial(): string;
  getCoupon(couponName: string,value:number): number;
}

const hitesh: User = {
  dbId: 22,
  email: "h@h.com",
  userId: 22221,
  startTrial: () => {
    return "Trial started";
  },
  getCoupon: (name:"BUY10",off:10) => {
    return 10;
  },
};

// Re-opening an interface
interface User{
    githubToke?:string
}

interface Admin extends User{
    role:"admin"|"ta"|"learner"
}

const mohit: Admin = {
    dbId: 22,
    role:"ta",
    email: "h@h.com",
    userId: 22221,
    startTrial: () => {
      return "Trial started";
    },
    getCoupon: (name:"BUY10",off:10) => {
      return 10;
    },
  };