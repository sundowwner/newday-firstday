"use strict";
var x = 5;
var y = 5;
var z = "hello";
var me = true;
var MY_NUMBER = 10;
var things = [];
var other_things = [];
var many_things = ["hello", 5, 5];
var you = {};
var multiple = "test";
multiple = 4;
function stuff() {
    console.log(x);
    return;
}
function cool_stuff(x, y) {
    return x + y;
}
var str = "hello";
if (str !== null && str !== undefined && str !== "") {
    console.log("cool");
}
if (str) {
    console.log("cool");
}
function getAndDisplayName(event) {
    event.preventDefault();
    var inputField = document.getElementById("inputName");
    var name = inputField.value;
    document.getElementById("display-name").innerHTML = "<h1>" + name + "</h1>";
    console.log("ran");
}
try {
    console.log("this is the try");
}
catch (ex) {
    console.log("you have hit an error, " + ex.message + "." + ex.name);
}
finally {
    console.log("run this last");
}
