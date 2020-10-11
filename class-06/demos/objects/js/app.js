//  JavaScript object

// how to define an object ?
// pName,weight
var person1 = {
    pName: 'Razan',
    weight:57,
    changeName: function() {
        // console.log('hello, this is the first method of person1');
        // console.log(person1.pName);
        // console.log(person1['pName']);
        // console.log(this.pName);
        console.log(this); // refers to the owner of this method >>> person1 obj
        this.pName = 'Aya';
        this.weight = 55;
    }
}

console.log(person1);
//  Bracket Notation to add a new property
person1['age'] = 28;
console.table(person1);

// Dot Notation to update a value of an property
// person1.pName = 'ola';
// console.table(person1);

person1.changeName();
console.table(person1);
