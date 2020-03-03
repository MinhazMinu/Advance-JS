/*

IIFE = immediately invoicing function expression => Data Privacy

*/
/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();


Now  creating this with IIFE
*/
//  to create IIFE  ()();
//  we can also pass an argument to IIFE
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

//  we can also pass an argument to IIFE
(function(highChace) {
  var score = Math.random() * 10;
  console.log(score >= 5 - highChace);
})(5);
