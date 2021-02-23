const scanf = require("scanf");

console.log("Input (integer): ");
let n = scanf("%d");

let sum = 0;
for(let i=1; i<=n; i++){
    sum += i ;
}

console.log(`Sum: ${sum}`);