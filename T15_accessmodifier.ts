class User{
    email:string;
    name:string;
    private readonly city:string = "gkp";
    constructor(email:string, name:string){
        this.email=email;
        this.name=name;
    }
}

class User1{ // another way
    private readonly city:string = "gkp";
    constructor(public email:string, public name:string){
        this.email=email;
        this.name=name;
    }
}



const aryan = new User("h.com","aryan");

export {}
