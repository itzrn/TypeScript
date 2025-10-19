interface User{
    name:string,
    email:string
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

interface Circle{
    kind:"circle",
    radius:number
}


interface Square{
    kind:"square",
    side:number
}


interface Rectangle{
    kind:"rectangle",
    len:number,
    bre:number
}


type SHape = Circle | Square;

function getTrueShape(shape:SHape){
    if(shape.kind === "circle"){
        return Math.PI+shape.radius**2;
    }

    return shape.side*shape.side;
}

type Shape = Circle | Square | Rectangle;

function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI*shape.radius**2;

        case "square":
            return shape.side*shape.side;
        case "rectangle":
            return shape.len*shape.bre;

        default:
            const _defaultForShape:never=shape;
            return _defaultForShape;
    }
}