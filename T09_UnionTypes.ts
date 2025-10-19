let score: number | string | boolean = 33;
score = 44;
score = false;
score = "Aryan";

type User = {
    name:string;
    id:number;
}

type Admin = {
    username:string;
    id:number;
}

let aryan : User | Admin = {
    name:"Aryan",
    id:33
}
aryan = {
    username:"ap", 
    id:33
}


function getDBId(id:number|string){
    // making some API calls
    console.log(`DB id is :${id}`);
}
getDBId(1);
getDBId("11");

function getDBId1(id:number|string){
    // id.toLowerCase(); // this can't be done bcz this is treating id as just not number but the mix of that
    // so u need to check

    if(typeof id === "string"){
        id.toLowerCase();
    }else{
        id=10;
    }
}



// arrays
const data :string[] |number[] = [1,2,3,4];
// either of it will be the array type
// const data1 :string[] |number[] = [1,2,3,4,"8"]; // not allowed
// another
const data1:(string|number)[]=[1,2,3,"10"];
// not good idea to use any bcz typescript is basically how scrict you make the variable


// where you want to strict a varible with value
let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "middle";

// seatAllotment = "crew"; // this gives error
