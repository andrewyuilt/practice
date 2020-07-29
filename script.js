"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World");
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
//  console.log(calc(4,6));
//  console.log(calc(1239,237));
//  console.log(calc(-189,300));

 function ret() {
     let num = 50;
     return num;
 }

 const anotherNum = ret(); 
 console.log(anotherNum);

 const logger = function() {
    console.log("hello");
 };

 logger();

 const calc = (a,b) => a+b; 
 console.log(calc(6,54));