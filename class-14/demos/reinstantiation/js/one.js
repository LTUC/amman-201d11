'use strict';

function getCatsFromLS() {
  var cats = localStorage.getItem('cats');
  if (cats) {
    allCats = JSON.parse(cats);
    render();
  }
}
getCatsFromLS();

catform.addEventListener('submit', handleCatSubmit);
function handleCatSubmit(event) {
  event.preventDefault();
  new Cat(event.target.kitteh.value);
  catform.reset();
  render();
  sendCatsToLs();
}

function sendCatsToLs() {
  var catsObj = JSON.stringify(allCats);
  localStorage.setItem('cats', catsObj);
}
