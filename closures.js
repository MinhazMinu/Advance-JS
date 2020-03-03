/*

inner fuction can access outer function data , though outer function return.
This is the power of Closures

*/
//outer function
function retirement(retirementAge) {
  //outer function data
  var a = " years left  to retirement. ";
  // outer function return Here
  return function(yearOfBirth) {
    //inner function
    var age = 2016 - yearOfBirth;
    console.log(retirementAge - age + a); // though outer function return , inner function can access outer function data
  };
}
retirement(60)(1993);
