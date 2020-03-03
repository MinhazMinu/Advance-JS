function interViewQuestion(job) {
  if (job === "designer") {
    //function returing a function!!!
    return function(name) {
      console.log(name + " Can you say What is UI/Ux");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log(name + " What subject do you teach");
    };
  }
}

interViewQuestion("designer")("Minhaz");
interViewQuestion("teacher")("Hasib");
