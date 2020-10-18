var names = [
  "cruisin-goat",
  "emotional-goat",
  "goat-out-of-hand",
  "kissing-goat",
  "sassy-goat",
  "smiling-goat",
  "sweater-goat"
];
// lenght= 7
// 0 to 6 

//(1) get the images
var leftImage = document.getElementById('leftImage');
var rightImage = document.querySelector('#rightImage');

console.log(leftImage);
console.log(rightImage);

//(2) add src,alt,title to the images to test if everything is working
// leftImage.src = `assets/${names[0]}.jpg`;
// leftImage.alt = 'names[0]';
// leftImage.title = names[0];

// rightImage.setAttribute('src',`assets/${names[1]}.jpg`);
// rightImage.setAttribute('alt',names[1]);
// rightImage.setAttribute('title',names[1]);


//(3_1) create constructor function for the goats

// var goats = []; // array of objects
Goat.all = []; // array of objects

function Goat(gName) {
  this.goatName = gName;//property
  this.imagePath = `assets/${gName}.jpg`;
  this.views = 0;
  this.clicks = 0;
  Goat.all.push(this);
}

//(3_2) instantiate objects for all the goats one shot
for (var i = 0; i < names.length; i++) {
  new Goat(names[i]);
}

console.log(Goat.all);

//(4) render 2 random images

var leftGoat, rightGoat;
function render() {
  leftGoat = Goat.all[randomNumber(0, Goat.all.length - 1)];
  rightGoat = Goat.all[randomNumber(0, Goat.all.length - 1)];
  console.log(leftGoat);
  console.log(rightGoat);

  leftImage.setAttribute('src', leftGoat.imagePath);
  leftImage.setAttribute('alt', leftGoat.goatName);
  leftImage.setAttribute('title', leftGoat.goatName);

  rightImage.setAttribute('src', rightGoat.imagePath);
  rightImage.setAttribute('alt', rightGoat.goatName);
  rightImage.setAttribute('title', rightGoat.goatName);
}
render();

var totalClicks = 0;

//(5) add the event listener to render new images
// (5) Where should we add the event listener(for the left or right/ to imagesSection will be better since we will have only one clickListener )
// 5a identify the  clicked image
// 5b keep track of how many times the image have been clicked and viewed?
// 5c re render the images


var imagesSection = document.querySelector('#imagesSection');
imagesSection.addEventListener('click', handleClickonGoat);

function handleClickonGoat(event) {

  console.log(event.target.id);

  if (totalClicks < 5) {
    if (event.target.id !== 'imagesSection') {
      totalClicks++;
      console.log(totalClicks);
      rightGoat.views++;
      leftGoat.views++;

      // if(event.target.)
      // console.log(rightGoat);
      // console.log(leftGoat);

      if (event.target.id === 'leftImage') {
        leftGoat.clicks++;
        // leftGoat.clicks = leftGoat.clicks +1;
      }
      if (event.target.id === 'rightImage') {
        rightGoat.clicks++;
      }

      render();
    }
  } else if (totalClicks === 5){
    renderSummary();
    console.log(totalClicks);
  }

}

function renderSummary() {
  imagesSection.removeEventListener('click',handleClickonGoat);
  console.log('you voted 5 times already!!');
  var ulE1 = document.getElementById('finalResults');
  for(var i=0; i<Goat.all.length; i++) {
    var liE = document.createElement('li');
    ulE1.appendChild(liE);
    // emotional-goat has 3 clicks and 5 views
    liE.textContent = `${Goat.all[i].goatName} has ${Goat.all[i].clicks} clicks and ${Goat.all[i].views} views`;
  }
}


// TODO unique images
// (6) prevent having two exact images at the same time
// (7) prevent images from repeating one right after the other


//helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
