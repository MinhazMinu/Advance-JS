//  Primitives

/*
primitives Holds the value within it self.  Object contains the reference of the value

*/

var a = 23;
var b = a;
a = 46;
console.log(a + " " + b); // answer : 46 23. though we change value of a  b is not change

var obj1 = {
  name: "minhaz",
  age: 28
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age + " " + obj2.age); // Here Both result is 30. because both object point ot the same memory location
