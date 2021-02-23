const scanf = require("scanf");

console.log("Input 1: ");
let string1 = scanf("%s");

console.log("Input 2: ");
let string2 = scanf("%s");

if (string1.length >= string2.length*2){
    console.log("String1 is at least twice as long as String2");
} else {
    console.log("String2 is longer than half of String1.");
}