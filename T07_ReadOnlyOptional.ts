type User ={
    readonly id:string; // when you want this should only be read only by the user
    name:string;
    email:string;
    isActive:boolean;
    creaditCard?:number // we know that all usee may not have the this detail, so we eill mark optional using '?'
};

let myUser:User={
    id:"1234",
    name:"a",
    email:"aryan.p",
    isActive:false
};


myUser.email="ashmit.p";
// myUser.id = "afd"; // this isnot allowed by the compiler


// there is something known as mix and match of types
type cardNumber = {
    cardnumber:string;
}

type cardDate = {
    carddate:string;
}

type cardDetails = cardNumber & cardDate & {
    cvv:number;
}

export {}