const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const prompt = require('prompt-sync')();
let toprow = ["_", "_", "_"];
let middlerow = ["_", "_", "_"];
let bottomrow = ["_", "_", "_"];
console.log("1   2   3");
console.log("A ", toprow);
console.log("");
console.log("B ", middlerow);
console.log("");
console.log("C", bottomrow);
while(true){
    let question = prompt("Enter Move > ");
    if (question == "exit"){
        console.log("Cleaning Board, and exiting, bye!");
        await delay(100);
        process.exit();
    }
}