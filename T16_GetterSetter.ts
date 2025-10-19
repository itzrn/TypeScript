class User{
    private coursecount:number=1;
    email:string;
    name:string;
    private readonly city:string = "gkp";
    constructor(email:string, name:string){
        this.email=email;
        this.name=name;
    }

    get getAppleEmail():string{
        return `Apple ${this.email}`;
    }

    get courseCount():number{
        return this.coursecount;
    }

    set courseCount(courseNum){
        this.courseCount=courseNum;
    }
    // while making a setter which is not actually making it void, doo practice is not to mention any return type here


    private deleteToken(){ // not accessable by the object
        console.log("Token Deleted");
    }
}