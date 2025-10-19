function identityThree<Type>(val:Type):Type{
    return val;
} // instead of using any we using generic bcz here the type get locked

identityThree(1);
identityThree("1");
identityThree(false);


interface Bottle{
    brand:string,
    type:number
}

// identityThree<Bottle>({});