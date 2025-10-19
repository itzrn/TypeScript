abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}

    // we can create method defination
    public abstract getSepia():void;
    public getReelTime():number{
        // some complex calculation
        return 8;
    }
}

// const aryan = new TakePhoto("test","test");
// its not possble to make the object of abstract and interface

class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode, filter);
    }

    public getSepia(): void {
        console.log("this is Sepia");
    }
}

const aryan = new Instagram("test", "test", 10);

// this is valid