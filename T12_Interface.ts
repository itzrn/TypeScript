interface User{
    readonly dbid:number, // will not get manupulate
    email:string,
    userId:number,
    googleId?:string
    // startTrail:()=>string//this wont give much clarety is it varibale or function
    startTrail():string
    getCoupon(couponName:string, value:number):number
};

// you can write the User as interface again, is allowed
interface User{ // this is call as reopening of inteface
    githubToken:string
};
// so there was no need to touch the first user interface using this we also get the entier functionality of the first
// user in second user

// we can also inherit the interface
interface Admin extends User{// put , and add other interface also just like in java we do
    role:"admin"|"ta"|"customer";
};

const aryan :User = {
    dbid:100, 
    githubToken:"token",
    email:"ar.gmail.com", 
    userId:22,
    startTrail:()=>{
        return "trail started";
    },
    getCoupon(couponName="aryan", v=100) {
        return 10;
    },
};
const ashmit :Admin = {
    dbid:100, 
    githubToken:"token",
    email:"ar.gmail.com", 
    userId:22,
    role:"admin",
    startTrail:()=>{
        return "trail started";
    },
    getCoupon(couponName="aryan", v=100) {
        return 10;
    },
};


/*


Differences Between Type Aliases and Interfaces
Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

Interface	Type
Extending an interface

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;
        
Extending a type via intersections

type Animal = {
  name: string;
}

type Bear = Animal & { 
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;
        
Adding new fields to an existing interface

interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
        
A type cannot be changed after being created

type Window = {
  title: string;
}

type Window = {
  ts: TypeScriptAPI;
}

 // Error: Duplicate identifier 'Window'.

        

*/