'use strict';

var catbutton = document.getElementById('catbutton');

catbutton.addEventListener('click', handleCatButtonClick);
function handleCatButtonClick() {
  var cats = localStorage.getItem('cats');
  if (cats) {
    allCats = JSON.parse(cats);
    render();
  }
}

