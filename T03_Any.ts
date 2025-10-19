// Any is simple a marker in the typescript that there is no need to check the data type for that value

// not a good practice
let arr;
function getArr(){
    return 100;
}
arr = getArr(); // here the type gets any


// good practice
let arr1:number;
function getArr1(){
    return 100;
}
arr1 = getArr1();