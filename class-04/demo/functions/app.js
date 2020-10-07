console.log('Class04 Demo!!');

// what is a function?

// function declaration (function follwed by the func name)
function sayHello() {
    console.log('hello world .. this is my first function');
}

// invoke or call a function
sayHello();

// passing data in function (Parameter + Argument)
function sayGoodBye(uName) { // Parameters
    console.log(`Good bye ${uName}`);
}
sayGoodBye('hadeel'); //Arguments


function getFullName(fName, lName) {
    // console.log(`hello ${fName} ${lName}`);
    var uName = `${fName} ${lName}`;
    return uName;
    console.log('after return'); // will never executed
}
var result = getFullName('Fatima', 'Atieh');
console.log(result);






// return statement

// So, now why do we need Functions?
// you can reuse the code : define the code once and use it many times
function sumNum(x, y) {
    return x + y;
}
var sumRes = sumNum(4, 5);
var sumRes2 = sumNum(3, 2);
console.log(sumRes);
console.log(sumRes2);

// var x=4;
// var y=5;
// var sumRes = x+y;
// console.log(sumRes);

// var x2=3;
// var y2=2;
// var sumRes2 = x2+y2;
// console.log(sumRes2);



// Returning Multiple Values
function square(length) {
    var area = length * length;
    var ocean = 4 * length;
    var result = [area, ocean];
    return result;
}

var mySquare = square(3);
console.log('mySquare = ', mySquare[0], mySquare[1]);

var mySquare2 = square(6);
console.log('mySquare2 = ', mySquare2[0], mySquare2[1]);


// Function Declaration
// function displayName() {
//     var uName = prompt('what is ur name?')
//     alert(uName);
// }
// displayName();

// Function Expression
// var displayName = function() {
//     var uName = prompt('what is ur name?')
//     alert(uName);
// }
// displayName();


//local vs global scope
// 1- global variables (declared outside of any function) are available anywhere
// 2- local variables (declared inside a function) are only available inside the function.

var globalVar = 'universal';

function scoper(param) {
    // console.log('globally we can see globalVar: ' + globalVar);
    var localVar = 'I like my privacy.';

    // console.log('we can also see localVar = ' + localVar);
    // console.log('inside the function we can see param = ' + param);
    // console.log('and we can see globalVar = ' + globalVar);

    for (var i = 0; i < 3; i++) {
    	console.log('the value of i in the loop is ' + i);
    }

    // console.log('can we see i outside the loop? ' + i);
    return param;
}

scoper('argument');

// console.log('can we see i outside the function? ' + i);
// console.log('globally we can see globalVar: ' + globalVar);
// console.log('but not localVar: ' + localVar);
console.log('or param: ' + param);