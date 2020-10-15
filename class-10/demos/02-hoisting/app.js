//javascript Hoisting

showMsg();

// console.log('call function',msgExpression);
// msgExpression(); //msgExpression is not a function

globalFunc();

function showMsg() {
  console.log("I am the showMsg function");
}

var msgExpression = function() {
  console.log("I am the msgExpression function expression");
};
msgExpression();


// //global scope

function globalFunc() {
  console.log("I can be called anywhere");
}



var someObj = [
  {
    a: 10,
    b: 9
  }
]; // array : 1 object

someObj.push(20);
// // predict the output ?
console.log(someObj);