// the main idea is how to restrict the user choice
enum SeatChoice { // by defaule the value is assigned from 0, u can also customize it accordingly
    AISLE=10,
    MIDDLE=22,
    WINDOW
}; // if the assigned is not a number then u need to assign to all the variable

const enum extra{ // good practice to use const, this make the code generated in js is clean
    one="Aryan",
    two="ashmit",
    three=1,// as soon as the enum get the number from there is will automatically handle for other variables 
    four,
    five
};

const arSeat = SeatChoice.AISLE;
