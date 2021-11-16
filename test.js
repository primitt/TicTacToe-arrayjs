let array = ["", "", "",]
console.log(array)
const prompt = require('prompt-sync')();
let p = prompt("Click to continue")
array.shift();
array.shift();
array.unshift("0");
console.log(array)
let e = prompt("Click to continue")
array.unshift("");
console.log(array);
