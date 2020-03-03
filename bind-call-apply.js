/*

 function has some special method , inherited from function constructors object

 these methods allows us to set `this`.

*/

var minhaz = {
  name: "minhaz",
  age: 29,
  job: "teacher",

  presentation: function(style, timeOfDay) {
    if (style == "formal") {
      console.log("good " + timeOfDay + " , i am " + this.name);
    } else if (style == "friendly") {
      console.log(
        "Hi Buddy !, good " + timeOfDay + " , you know i am  " + this.name
      );
    }
  }
};

minhaz.presentation("formal", "morning");

var hasib = {
  name: "hasib"
};

minhaz.presentation.call(hasib, "friendly", "night"); //use call method and set `this` to hasib object . it inherit minhaz object method

// call and apply are sme method ..deference is apply  pass argument as array
// minhaz.presentation.call(hasib, ["friendly", "night"]);

// bind dose not immediately  call the function. its take a copt of the function. and return a function

var minhazFriendly = minhaz.presentation.bind(minhaz, "friendly");

minhazFriendly("morning");
minhazFriendly("Night");

var hasibFormal = minhaz.presentation.bind(hasib, "formal");
hasibFormal("afternoon");
