"use strict";

// target our order form the html
var orderForm = document.getElementById("orderForm");
var orders = document.getElementById("orders");

// constructor function to create a basic drink
function Coffee(name, size, milk, isHot, drinkType) {
  this.name = name;
  this.size = size;
  this.isHot = isHot;
  this.drinkType = drinkType;
  this.milk = milk;

  // add every drink that gets created into an array
  Coffee.all.push(this);
}

// set the global array to empty
Coffee.all = [];


// Add an event listener to the submit button
orderForm.addEventListener("submit", handleSubmit);
// event handler function to run everytime the form is submitted
function handleSubmit(event) {

  event.preventDefault();
  console.log(event.target);

  // get all the values from the form
  var drink = event.target;
  var name = drink.name.value;
  var size = drink.size.value;
  var isHot = drink.isHot.checked;
  var dType = drink.drinkType.value;
  var milk = drink.milk.value;


  new Coffee(name, size, milk, isHot, dType);
console.log(Coffee.all);

  sendOrderToLS();
  renderOrders();
}

function renderOrders() {
  // clear all my current uls to prevent duplicate information
  orders.textContent = "";
  
  // go through the array and output the details of each drink in the array
  for (var i = 0; i < Coffee.all.length; i++) {
    var drinkLI = document.createElement("li");
    var temp;
    if (Coffee.all[i].isHot === false) {
      temp = "cold";
    } else {
      temp = "hot";
    }
    drinkLI.textContent = `${Coffee.all[i].name} orderd ${Coffee.all[i].drinkType} /${temp} /size: ${Coffee.all[i].size} /milk:  ${Coffee.all[i].milk}`;
    orders.appendChild(drinkLI);
  }
}

function sendOrderToLS() {
  var coffeeOrdersArray = JSON.stringify(Coffee.all);
  localStorage.setItem('CoffeeOrders',coffeeOrdersArray);
}

function getOrdersFromLS() {
  console.log('getting the Coffee.all array of objects frm the LS function')
  var ordersArray = localStorage.getItem('CoffeeOrders');
  console.log(ordersArray);
  
  // Coffee.all = JSON.parse(ordersArray) || [];
  // renderOrders();
  
  if(ordersArray) {
    Coffee.all = JSON.parse(ordersArray)
    renderOrders();
  }
}

console.log(Coffee.all);
getOrdersFromLS();
console.log(Coffee.all);

