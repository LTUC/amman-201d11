// alert('I am alive');

'use strict';


// Data tyes: Boolean, String and Number
var uName = 'razan';
var num1 = 5; //1.5 //.75
var isTrue = false;

// console.log(typeof uName); // string
// console.log(typeof num1); // number
// console.log(typeof isTrue); // bool


// IF conditional statement

// var answer = confirm('Are you ready?')
// console.log(answer);
// if(answer === true) { //if(answer)
//     console.log('GREAT!')
// } else {
//     console.log('be ready then!!')
// }

// logical operators
// AND OR NOT

var myBool = false;
var anotherBool = false;
var thirdBool = false;

//AND = 
if(myBool && thirdBool) {
    console.log('myBool and thirdBool were true!')
} else if (myBool || anotherBool) {
    console.log('MyBool or anotherBool was true')
} else if (thirdBool) {
    console.log('thirdBool is true');
} else {
    console.log('none of them is true');
}



// switch
// The switch statement is used to perform different actions based on different conditions.
// var color = prompt('what is your fav color?');
// console.log(color);

// //red Red REd RED reD -> red
// var color2 = color.toLowerCase(); //red
// // var color2 = color.toUpperCase(); //RED

// console.log(color2);
// switch(color2) {
//     case 'red': //red != Red
//     // case 'Red':
//         console.log('your fav is red');
//         break;
//     case 'blue':
//         console.log('your fav is blue');
//         break;
//     default:
//         console.log('you don\'t like red nor blue');
// }



// var kpi = 100;
// switch (kpi >= 90) {
//     case true:
//         console.log('more than 90');
//         break;
//     case false:
//         console.log('less than 90');
//         break;
// }


// var letter = 'c';
// switch (letter) {
//     case ('d','c'):
//         console.log('letter is d or c');
//         break;
//     case ('a'):
//         console.log('letter is a');
//         break;
//     default:
//         console.log('letter is nor d,c or a');
// }


// var num = 90;
// switch (num) {
//     case (90):
//         console.log('num is 90');
//         break;
//     case 80:
//         console.log('num is 80');
//         break;
//     default:
//         console.log('not 80 or 90');
// }

// if(num == 90) {

// } else if (num == 80) {

// } else {

// }

// arrays: are used to store multiple values in a single variable

var car1='BMW';
var car2='Audi';
var car3 = 'Ford';

var cars = ['BMW','Audi','Ford'];
console.log(cars);

if(cars[0]==='Audi') {
    console.log('Audi');
} else {
    console.log('not Audi');
}

console.log(cars.length);

var flowers = [];
flowers = ['tulip','gardenia'];
console.log(flowers);

//push: add item to the end
flowers.push('orkido');
console.log(flowers);

// pop: remove the last item
flowers.pop();
console.log(flowers);

// unshift: to add an item to the beginning of my array
flowers.unshift('orkido');
console.log(flowers);

// shift: to remove the first item of my array
flowers.shift();
console.log(flowers);