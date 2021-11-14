const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
const prompt = require('prompt-sync')();
let toprow = ["_", "_", "_"]
let middlerow = ["_", "_", "_"]
let bottomrow = ["_", "_", "_"]
console.log("A ", toprow)
console.log("")
console.log(middlerow)
console.log("")
console.log(bottomrow)
while(true){
    let question = prompt("Enter Move > ")
    if (question == "exit"){
        console.log("Cleaning Board, and exiting, bye!")
        setTimeout(function(){
            break
        }, 1000)
    }
}