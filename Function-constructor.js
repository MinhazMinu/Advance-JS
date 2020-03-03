/*
Hear is the minhaz objet . This object then created with function constructor
var minhaz = {
    name: 'minhaz',
    yearOfBirth: 1993,
    job:'programmer'
}

*/

//  function constructor
var Person = function(name, yearOfBirth, job) {
  (this.name = name), (this.yearOfBirth = yearOfBirth), (this.job = job);
};

// Constructor Prototype property

Person.prototype.calcAge = function() {
  console.log(2020 - this.yearOfBirth);
};
Person.prototype.firstName = "MD";

// object minhaz
var minhaz = new Person("minhaz", 1993, "programmer");

// object Hasib
var Hasib = new Person("hasib", 1992, "web-Developer"); // new oparator create an Empty object and poit to the empty object

minhaz.calcAge();
Hasib.calcAge();

console.log(minhaz.firstName + " " + minhaz.name);
console.log(Hasib.firstName + " " + Hasib.name);
