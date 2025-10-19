function addTwo(num:number){
    return num+2;
}
addTwo(10); 

// arrow function
let loginUser = (name:string, email:string, isPaid:boolean) =>{}

// passing default values
let login = (name:string, email:string, isPaid:boolean=false) =>{}
login("Aryan", "aryangithub2017@gmail.com"); // this wont give problem as login have the default value

// specifying the return type to function
function demo(num:number):string{
    return num.toString();
}


// alowwing more than one datatype
const getHello = (s:string):string => {
    return "manju";
}

const heros = ["thor", "spiderman", "ironman"];
heros.map((hero):string => { // more detailed version of map
    return `hero is ${hero}`;
});


function getValue(myValue:number):boolean|string{
    if(myValue>5){
        return true;
    }
    return "200 ok";
}

const getHallo = (s:string):string=>{
    return "";
}



function consoleError(errmsg:string):void{
    console.log(errmsg);
}
function handleError(errmsg:string):never{ // some functions never return a value, this is ver close to void(returns nothing) but never is not like void, This is something made to handle some kind of error
    throw new Error(errmsg);
}

export {}