interface Database{
    connection:string,
    username:string,
    password:string
}

function anotherFunction<T, U extends number>(valOne:T, valTwo:U):object{
    return{
        valOne, valTwo
    }
}

// anotherFunction(3, "4");
anotherFunction("Aryan", 10); // mandatorly the second parameter is number


function anotherFunction1<T, U extends Database>(valOne:T, valTwo:U):object{
    return{
        valOne, valTwo
    }
}

// anotherFunction1("Aryan", {});



// we can define class as generic
interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart:T[]=[];
    addToCart(product:T){
        this.cart.push(product);
    }
}



