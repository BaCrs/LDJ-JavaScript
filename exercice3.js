const scanf = require("scanf");

console.log("Input (5 integers): ");
var array = scanf("%d %d %d %d %d");

let maxValue = Math.max(...array);
let indexMaxValue = array.indexOf(maxValue);
console.log(`Maximum value is ${maxValue} at index ${indexMaxValue}`);

let average = array.reduce((a,b) => a+b) / array.length;
console.log(`Average: ${average}`);

