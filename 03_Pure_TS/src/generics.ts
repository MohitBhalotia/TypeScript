const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}
function identityTWo(val: any): any {
  return val;
}
function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree("3")

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: string;
}

identityFour<Bottle>({ brand: "Milton", type: "Sipper" });

function getSearchProducts<T>(products: T[]): T {
  // do some db operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some db Operations
  const myIndex = 4;
  return products[myIndex];
};

interface Database{
    connection:string,
    username:string,
    password:string
}
function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(3,{})

interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}


class Sellable<T,>{
    public cart:T[]=[]
    addToCart(products:T){
        this.cart.push(products)
    }
}

export{}