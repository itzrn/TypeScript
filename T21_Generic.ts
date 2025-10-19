function getSearchProducts<T>(products:T[]):T{
    return products[0];
}

// arrow function in generic
// this , is basically this is a syntax of generic
const getProducts = <T,>(products:T[]):T =>{
    return products[0];
}