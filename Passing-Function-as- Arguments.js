/*

Function are also objects in JAVASCRIPT. so it can pass arguments 

*/

var years = [1990, 1995, 1965, 2005, 1985];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

// calllBack fuction
function calcAge(el) {
  return 2020 - el;
}

var ages = arrayCalc(years, calcAge); //function pass as variable
console.log(ages);

//another callBack function
function isFullAge(el) {
  return el >= 18;
}

var isAdult = arrayCalc(ages, isFullAge);
console.log(isAdult);
