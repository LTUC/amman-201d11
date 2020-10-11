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
var cat1 = {
    catName: 'frankie',
    age: 0,
    likes: ['cuddling', 'chasing string'],
    imgPath: `images/frankie.jpeg`,
    goodWithKids: true,
    goodWithDogs: false,
    goodWithOtherCats: false,
    breed: 'British shorthair',
    getAge: function (min, max) {
        // console.log('getAge function');
        this.age = getRandomNumber(min, max);
    },
    render: function () {

        // render function
        // get (from the DOM) who the parent element is going to be.
       
        // where am I attaching this new element ??
        var container = document.getElementById('kittenProfiles');
        console.log('container= ', container);
        
        // create and append article to the container
        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);
        
        // create h2 with frankie name as textContent and append it to the article
        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = this.catName;
        
        // create p with frankie age string and append it to article
        var pE1 = document.createElement('p');
        articleE1.appendChild(pE1);
        pE1.textContent = `Frankie is adorable, and is ${this.age} months old.`;

         // create ul and append it to article
         var ulE1 = document.createElement('ul');
         articleE1.appendChild(ulE1);
        // append li's to the ul containing frankie interests
        for (var i=0 ; i<this.likes.length;i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = this.likes[i];
        }

        // create image and set the src  attribute to frankie image path then append it to the article
        var imgE1 = document.createElement('img');
        articleE1.appendChild(imgE1);
        imgE1.setAttribute('src', this.imgPath);

    }
}




var cat2 = {
    catName: 'serena',
    age: 0,
    likes: ['cuddling', 'napping'],
    imgPath: `images/serena.jpeg`,
    goodWithKids: true,
    goodWithDogs: true,
    goodWithOtherCats: true,
    breed: 'turkish Angora',
    getAge: function (min, max) {
        // console.log('getAge function');
        this.age = getRandomNumber(min, max);
    },
    render: function () {

        // render function
        // get (from the DOM) who the parent element is going to be.
       
        // where am I attaching this new element ??
        var container = document.getElementById('kittenProfiles');
        console.log('container= ', container);
        
        // create and append article to the container
        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);
        
        // create h2 with serena name as textContent and append it to the article
        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = this.catName;
        
        // create p with serena age string and append it to article
        var pE1 = document.createElement('p');
        articleE1.appendChild(pE1);
        pE1.textContent = `${this.catName} is adorable, and is ${this.age} months old.`;

         // create ul and append it to article
         var ulE1 = document.createElement('ul');
         articleE1.appendChild(ulE1);
        // append li's to the ul containing frankie interests
        for (var i=0 ; i<this.likes.length;i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = this.likes[i];
        }

        // create image and set the src  attribute to frankie image path then append it to the article
        var imgE1 = document.createElement('img');
        articleE1.appendChild(imgE1);
        imgE1.setAttribute('src', this.imgPath);

    }
}





//2 helper function to calculate random age within a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//3 call getAge after creating the object to set the age property to the random age
console.log(cat1);
cat1.getAge(1, 9);
console.log(cat1);
cat1.render();

cat2.getAge(3, 11);
cat2.render();





