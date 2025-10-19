class User{
    email:string;
    name:string;
    readonly city:string = "gkp";
    constructor(email:string, name:string){
        this.email=email;
        this.name=name;
    }
}


const aryan = new User("h.com","aryan");

export {}
