// this makes the behaviour of object correct
type User = {
    name:string;
    email:string;
    isActive:boolean;
};

function createUser(user:User):User{
    return user;
}
createUser({name:"Aryan", email:"a.p", isActive:false});