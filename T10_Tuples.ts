const user:(string | number)[]=["hc",1];
const user1:(string | number)[]=[1,"hc"]; // this is also fine


// when you want to be written in the very specific manner
// tuple 
let user2:[string, number, boolean];
user2 = ["Aryan", 1, false]; // the order should be maintain and every value should be present

let rgb : [number, number, number] = [1,2,3];

type newUser=[number, string];
const newUsers :newUser=[112, "Aryan"];
newUsers[1]="ashmit"; // tuples do allow to change the values



export {}
