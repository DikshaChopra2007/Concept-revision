//Classes and objects
// class definition
// constructir 
//access modifier(public,private,protected)
//read only properties 
//optional properties 
// prameter properties
// getter and setter
//static member 
// abstract clsses and methods  
/*class Device{
    name= "lg";
    price = 12000;
    category = "digital";
}
let d1 = new Device();
let d2 = new Device();*/
/*class Bottle{
radius=120;
price=100;
color=white;
}
let b1 = new Bottle()*/
//constructor 
/*class BottleMaker{
 constructor(public name:string,public price:number  ){

 }
}
new BottleMaker("Milton",1200);*/
//class ko jab bhi chalaoge constructor sabse pehle chalta hai 
/*class HumanMaker{
    age =0;
    constructor(public name: string, public isHandsome :boolean){

    }
}
new HumanMaker('Ashir',true)*/
/*class BottleMaker{
    constructor(brand:string, price :number , color:string ,material:string){

    }
}*/
// class Music {
//     constructor(public name: string, public artist: string, public thumbnail: string = "somethumbnail.jpg", public length: number, public free: boolean) {
//     }
// }

/*class Music {
    public name;
    public artist;
    public thumbnail;
    public length;
    public free;

    constructor(
        name: string,
        artist: string,
        thumbnail: string = "somethumbnail.jpg",
        length: number,
        free: boolean
    ) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
    }
}   */
//this keyw ord 
//CLASS KE ANDAR FUNCTION KO METHOD KEHTE HAIN
 //class ke andar kisi entity ko target kr rhe hain toh this use krte hain
 /*class Abcd{
    name="diksha";
    changeSomeStuff(){
        console.log(this.name);
    }
    changeSomeMoreStuff(){
        console.log("hey");
    }
 }
class BottleMaker {
    constructor(public name: string) {}
}

class MetalBottleMaker extends BottleMaker {
        constructor(name:string){
            super(name);
        }
        getValue(){
            console.log(this.name);
        }
}

let b1 = new BottleMaker("Milton");*/
 /*class User{
    constructor( public  name:string){}
changeName(){
    this.name="hellyow"
}
    
 }
let u1 = new User("Harsh");*/
//public gender?: --> gender becomes optional to fill
/*class User {
    public name;
    public age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}*/
//getter and setters
//getter --> clas ke andar ek aisa method jo tumhe value nikalke de
//setter--> aisa method jo tumse value le aur class ke andar ki value change krde 
/*class User{
    constructor(public name:string, public age:number) { }
    getName(){
        return this.name;
    }
    setName(value:string){
        this.name= value;
    }
}
let u1 = new User("harsh",25);*/
//functions 
/*function abcd(): string{
return "hey";
}*/
//Generics
//generic function
//generic interface
//generic classes
//humein ek function bnana hai jo ki acept krega koi bhi vaue and usey print krega
//hum ek function ko use krte waqt bta skte hai ki function argument ko kis type se treat kare
/*function abcd<T>(a:T){}
//T --> template classes
abcd<string>("harsh");
abcd<number>(12);*/
//humara T abb string ban chuka hai
function abcd <H>(a:H,b:string,c:number) { }
abcd<string>