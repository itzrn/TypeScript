const User = {
    name:"Aryan",
    email:"aryangithub2017@gmail.com",
    isActive:true
}


function createUser({name, isPaid}: {name:string, isPaid:boolean}){}

createUser({name:"Aryan",isPaid:false});


function createCourse():{}{
    return {};
}

function createCourse1():{name:string, isPaid:boolean}{
    return {name:"aryan", isPaid:true};
}


// odd behaviours in TS that object shows
// createUser({name:"Aryan",isPaid:false,email:"a@gmail.com"}); // this is not allowed bcz in the behaviour the defination is different 

let newUser ={name:"Aryan", isPaid:false, email:"a@tcs.com"}
createUser(newUser); // you will notice you will able to pass this user which is an odd behaviour, to remove this will look afteword

export {}