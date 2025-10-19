class Users{
    email:string;
    name:string;
    private x:number=10;
    protected y:number=11;
    private readonly city:string = "gkp";
    constructor(email:string, name:string){
        this.email=email;
        this.name=name;
    }
}

class SubUser extends Users{ // protected is accessable while inherting
    // but its not accessable using object
    isFamily:boolean = true;
    changeCourseCount(){
        this.y=111;
    }
}

export {}
