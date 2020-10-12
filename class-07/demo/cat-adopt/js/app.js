// problem domain: the Seattle Kitten Rescue has tons of kittens who
// need good homes. One of the best ways to reach prospective adoptive
// homes is to have profiles for each kitten available on a website.
// There are hundreds of kittens, though, and only a few volunteers;
// it's too time-consuming to hand-code each kitten's profile on their
// website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like (eg: cuddling, chasing string, napping, food)
// - an image
// good with kids
// good with dogs
// good with other cats
// breed (e.g: Egyptian Mau, Persian,British Shorthair)

// TODO: dynamically generate kitten objects using form data

//1 create object that will contain all properties and a method to getAge
// var frankie = {
//   name: "Frankie",
//   age: 0,
//   likes: ["cuddling", "chasing string", "napping", "food"],
//   imagePath: `images/frankie.jpeg`,
//   goodWithKids: true,
//   goodWithDogs: false,
//   goodWithOtherCats: true,
//   breed: "British Shorthair",
//   getAge: function(min, max) {
//     this.age = getRandomNumber(min, max);
//   },

//   render: function() {
//     var container = document.getElementById("kittenProfiles");
//     // create and append article to the container
//     var articleEl = document.createElement("article");
//     container.appendChild(articleEl);
//     // create h2 with frankie name as textContent and append it to the article
//     var h2El = document.createElement("h2");
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name; // or frankie.name
//     // create p with frankie age string and append it to article
//     var pEl = document.createElement("p");
//     articleEl.appendChild(pEl);
//     pEl.textContent = `Frankie is adorable, and is ${this.age} months old.`;
//     // create ul and append it to article
//     var ulEl = document.createElement("ul");
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.likes.length; i++) {
//       var liEl = document.createElement("li");
//       ulEl.appendChild(liEl);
//       liEl.textContent = this.likes[i];
//     }
//     // create image and set the src attribute to frankie image path then append it to the article
//     var imgEl = document.createElement("img");
//     imgEl.setAttribute("src", this.imagePath);
//     articleEl.appendChild(imgEl);
//   }
// };

// var jumper = {
//   name: "Jumper",
//   age: 0,
//   likes: ["cuddling","napping"],
//   imagePath: `images/jumper.jpeg`,
//   goodWithKids: false,
//   goodWithDogs: true,
//   goodWithOtherCats: false,
//   breed: "Persian",
//   getAge: function(min, max) {
//     this.age = getRandomNumber(min, max);
//   },

//   render: function() {
//     var container = document.getElementById("kittenProfiles");
//     // create and append article to the container
//     var articleEl = document.createElement("article");
//     container.appendChild(articleEl);
//     // create h2 with frankie name as textContent and append it to the article
//     var h2El = document.createElement("h2");
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name; // or frankie.name
//     // create p with frankie age string and append it to article
//     var pEl = document.createElement("p");
//     articleEl.appendChild(pEl);
//     pEl.textContent = `Frankie is adorable, and is ${this.age} months old.`;
//     // create ul and append it to article
//     var ulEl = document.createElement("ul");
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.likes.length; i++) {
//       var liEl = document.createElement("li");
//       ulEl.appendChild(liEl);
//       liEl.textContent = this.likes[i];
//     }
//     // create image and set the src attribute to frankie image path then append it to the article
//     var imgEl = document.createElement("img");
//     imgEl.setAttribute("src", this.imagePath);
//     articleEl.appendChild(imgEl);
//   }
// };

// var serena = {
//   name: "Serena",
//   age: 0,
//   likes: ["cuddling","napping", "chasing string"],
//   imagePath: `images/serena.jpeg`,
//   goodWithKids: true,
//   goodWithDogs: true,
//   goodWithOtherCats: false,
//   breed: "Persian",
//   getAge: function(min, max) {
//     this.age = getRandomNumber(min, max);
//   },

//   render: function() {
//     var container = document.getElementById("kittenProfiles");
//     // create and append article to the container
//     var articleEl = document.createElement("article");
//     container.appendChild(articleEl);
//     // create h2 with frankie name as textContent and append it to the article
//     var h2El = document.createElement("h2");
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name; // or frankie.name
//     // create p with frankie age string and append it to article
//     var pEl = document.createElement("p");
//     articleEl.appendChild(pEl);
//     pEl.textContent = `Frankie is adorable, and is ${this.age} months old.`;
//     // create ul and append it to article
//     var ulEl = document.createElement("ul");
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.likes.length; i++) {
//       var liEl = document.createElement("li");
//       ulEl.appendChild(liEl);
//       liEl.textContent = this.likes[i];
//     }
//     // create image and set the src attribute to frankie image path then append it to the article
//     var imgEl = document.createElement("img");
//     imgEl.setAttribute("src", this.imagePath);
//     articleEl.appendChild(imgEl);
//   }
// };


//Helper function
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Calling functions
// frankie.getAge(3, 7);
// frankie.render();
// jumper.getAge(3, 7);
// jumper.render();
// serena.getAge(3, 7);
// serena.render();


////////////////////////////////////////////////////////////////////
//1 create a constructor function for all cats

var cats = []; // array of objects

function Cat(catName, likes, imagePath, goodWithKids, goodWithDogs, goodWithOtherCats, breed) {
  this.catName = catName;
  this.age = 0;
  this.likes = likes;
  this.imagePath = imagePath;
  this.goodWithKids = goodWithKids;
  this.goodWithDogs = goodWithDogs;
  this.goodWithOtherCats = goodWithOtherCats
  this.breed = breed;
  cats.push(this); // add this object to the cats array
}

//2 add getAge method to the prototype
Cat.prototype.getAge = function (min, max) {
  this.age = getRandomNumber(min, max);
}

Cat.prototype.render = function () {
  var container = document.getElementById("kittenProfiles");
  // create and append article to the container
  var articleEl = document.createElement("article");
  container.appendChild(articleEl);
  // create h2 with frankie name as textContent and append it to the article
  var h2El = document.createElement("h2");
  articleEl.appendChild(h2El);
  h2El.textContent = this.catName; // or frankie.name
  // create p with frankie age string and append it to article
  var pEl = document.createElement("p");
  articleEl.appendChild(pEl);
  pEl.textContent = `${this.catName} is adorable, and is ${this.age} months old.`;
  // create ul and append it to article
  var ulEl = document.createElement("ul");
  articleEl.appendChild(ulEl);
  for (let i = 0; i < this.likes.length; i++) {
    var liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    liEl.textContent = this.likes[i];
  }
  // create image and set the src attribute to frankie image path then append it to the article
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", this.imagePath);
  articleEl.appendChild(imgEl);


  // <table>
//   <tr>
//     <th>good with cats</th>
//     <th>good with dogs</th>
//     <th>good with kids</th>
//   </tr>
//   <tr>
//     <td>true</td>
//     <td>true</td>
//     <td>false</td>
//   </tr>
// </table>

  var tableE1 = document.createElement('table');
  articleEl.appendChild(tableE1);

  var trE1 = document.createElement('tr');
  tableE1.appendChild(trE1);

  var goodStuff = ['good with cats','good with dogs','good with kids'];
  for(var i=0; i<goodStuff.length; i++) {
    var thE = document.createElement('th');
    trE1.appendChild(thE);
    thE.textContent = goodStuff[i];
  }

  var trE2 = document.createElement('tr');
  tableE1.appendChild(trE2);

  var goodStuffValues = [this.goodWithOtherCats,this.goodWithDogs,this.goodWithKids];
  for(var i=0; i<goodStuffValues.length; i++) {
    var tdE = document.createElement('td');
    trE2.appendChild(tdE);
    tdE.textContent = goodStuffValues[i];
  }




}


//3 add render method to the prototype


//4 creat 3 new instance of cats by using the new keyword
var frankie = new Cat("Frankie", ["cuddling", "chasing string", "napping", "food"], `images/frankie.jpeg`, true, false, true, 'British Shorthair');

console.log(cats);
var serena = new Cat("Serena", ["cuddling", "food"], `images/serena.jpeg`, true, false, false, 'Angora');
console.log(cats);



// var cats = [frankie, serena]; // array of objects
// console.log(cats);

for (var i = 0; i < cats.length; i++) {
  cats[i].getAge(1, 11);
  cats[i].render();
  console.log(cats[i]);
}

// frankie.getAge(1, 11);
// frankie.render();
// console.log(frankie);

// serena.getAge(1, 11);
// serena.render();
// console.log(serena);

//5 add all cats in array

//6 loop through them and call the getAge and render methods

//7 do a repl.it for tables (table.html code is attached) then apply it in html



// table steps

// 1 create table

// 2 create first row

// 3 create second row

// 4 create the 3 table headers and assign values to the textContent

// 5 append the table headers to the first row

// 6 creat 3 table data and assign values to the textContent

// 7 append the table data to the second row

// 8 append the two rows to the table

// 9 append the table to the article


////////////////////////////////////////   
