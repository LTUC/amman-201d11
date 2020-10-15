// what's Hoisting ??
// Hoisting is a JS mechanism where variables declarations and function declarations
// are moved to the top of their scope before code execution.


// In JavaScript, a variable can be declared after it has been used.
// i.e; a variable can be used before it has been declared.

'use strict';

// var x;
// x= 10;
// console.log(x);

// //same result here too
// x= 10;
// console.log(x);
// var x;


// // Hoisting is JavaScript's default behavior of moving all declarations
// // to the top of the current scope 

// var x= 5;
// var y= 7;
// console.log(`x= ${x} and y= ${y}`);

// //not same here (undefined)
// var x= 5;
// console.log(`x= ${x} and y= ${y}`);
// var y= 7;

// //(undefined)
// var x= 5;
// var y;
// console.log(`x= ${x} and y= ${y}`);
// y= 7;

// // JavaScript in strict mode does not allow variables
// // to be used if they are not declared.

hello();
console.log(n1);
function hello () {
    var n2 = 15;
    n1 = 10;
    // var n1;
    console.log(n2);
}

var n1;
console.log(n1);

