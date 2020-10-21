'use strict';

var allCats = []; // array of objects
var catform = document.getElementById('catform');
var catlist = document.getElementById('catlist');

function Cat(name) {
  this.name = name;
  allCats.push(this); // push the object to the array
}

function render() {
  catlist.innerHTML = "";
  // catlist.textContent = "";

  for (var i = 0; i < allCats.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = allCats[i].name;
    catlist.appendChild(liEl);

    var removeBtn = document.createElement('button');
    removeBtn.setAttribute('id',allCats[i].name)
    removeBtn.textContent = 'X';
    catlist.appendChild(removeBtn);

  }
}

var ulCatList = document.getElementById('catlist');
ulCatList.addEventListener('click',removeItem);

function removeItem (event) {
  event.preventDefault();
  var index;
  if(event.target.id !== 'catlist') {
    // console.log('you clicked on a button');
    console.log(event.target.id); //Nashmi
    for (var i=0; i<allCats.length; i++) {
      if(allCats[i].name === event.target.id) {
        index = i;
        allCats.splice(index,1);
        break;
      }
    }

    console.log(allCats);
    sendCatsToLs();
    getCatsFromLS();
  }
}


