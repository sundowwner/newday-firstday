"use strict";
//let is the new var

let x = 5;  //implicit x is a number
let y:number = 5; //explicity y is a number
let z: string = "hello";
let me: boolean = true;
const MY_NUMBER = 10; //constant - means it cannot change.
let things: string[] = [];
let other_things: number [] = [];
let many_things:Array <any> =  ["hello", 5 ,5];
let you: Object = {};

let multiple: any = "test";
multiple = 4;

function stuff(): void    {
    console.log(x);
    return; //returns undefined
}
function cool_stuff(x: number, y:number):number   {
    return x + y;
}

//Falsey
//-----------
//undefined
/////null
///0
//false
//""
//noImplicitAny
//
//Truthy
//----
//"hello"
//"stuff"
//" "
//"0"
//1
//-1
//-9999999
//{}
//[]
//function() {}
//true
//
//5 == "5" true
//5 === "5" Falsey
//null == udefined true
//null == false true
//null === undefined false
//null === false false
//
//
//
let str = "hello"; //some user input
if(str !== null && str !== undefined && str !== ""){
    console.log("cool");
}
if (str) {
    console.log("cool");
}

function getAndDisplayName(event: Event)    {
    event.preventDefault();
    let inputField = <HTMLInputElement>document.getElementById("inputName");
    let name = inputField.value;
document.getElementById("display-name").innerHTML = `<h1>${name}</h1>`;
console.log("ran");
}

try{
    //throw new Error("hello world");
    console.log("this is the try");
}catch(ex) {
    console.log(`you have hit an error, ${ex.message}.${ex.name}`);
}
finally{
    console.log("run this last");
}
