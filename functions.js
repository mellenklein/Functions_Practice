///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum(a, b) {
    var c = a + b;
    return c;
}
console.log( sum(2,3) );

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg(num1, num2, num3) {
  var score = (num1 + num2 + num3)/3;
  return score;
}
console.log( avg(98,92,100) );

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(color) {
  var length = color.length;
  return length;
}
console.log( getLength('purple') );

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan(first, second) {
  if(first < second) {
    return true;
  } else if (first === second) {
    return 'equal';
  } else {
    return false;
  }
}
console.log( greaterThan(45,61) );

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(whoDat) {
  var name = whoDat;
  return 'Hello, ' + name + '!';
}
console.log( greet('Christopher the cat') );

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madlib(word1, word2, word3, word4, word5, word6, word7, word8) {
  var noun1 = word1;
  var verb1 = word2;
  var adjective1 = word3;
  var place1 = word4;
  var verb2 = word5;
  var noun2 = word6;
  var adjective2 = word7;
  var adverb1 = word8;
  return 'Once upon a ' + noun1 + ', there lived a cat who loved to write code and ' + verb1 + '. One especially ' + adjective1 + ' Monday afternoon, the cat escaped to ' + place1 + ' and decided to ' + verb2 + ' on a ' + noun2 + '. The result was so ' + adjective2 + ' that the cat lived ' + adverb1 + ' ever after. The end.'
}

console.log( madlib('tangerine', 'fly', 'beautiful', 'Jupiter', 'dance', 'quesadilla', 'ridiculous', 'harmoniously') );


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

function madderlib() {
  var timeOfDay;
  var food;
    food = prompt('Please enter a food: ');
    timeOfDay = prompt('Please enter a time of day: ');

  console.log('Every day at ' + timeOfDay + ', my favorite snack to eat is ' + food + '.');
}

madderlib();
