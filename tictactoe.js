const { doesNotMatch } = require('assert');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const prompt = require('prompt-sync')();
let toprow = ["", "", ""];
let middlerow = ["", "", ""];
let bottomrow = ["", "", ""];
console.log("1   2   3");
console.log("A ", toprow);
console.log("");
console.log("B ", middlerow);
console.log("");
console.log("C", bottomrow);
let startprompt = prompt("Player 1 is represented by \"0\" and player 2 is represented by \"X\". Click enter to continue...");
let name1 = prompt("Player 1, what is your name? > ");
let name2 = prompt("Player 2, what is your name? > ");
class check {
    constructor(winner) {
      if (toprow[0] == "X" && toprow[1] == "X"){
          console.log("you won gg");
          process.exit()
    }
  }
}
while (true) {
    while (true) {
        let player1 = prompt("Player 1 Enter Move > ");
        if (player1 == "exit") {
            console.log("Cleaning Board, and exiting, bye!");
            process.exit();
        }
        if (player1 == "A1") {
            toprow.shift();
            toprow.unshift("X")
            check;
            break;
        }
        if (player1 == "A2") {
            toprow.shift();
            toprow.shift();
            toprow.unshift("X");
            toprow.unshift("");
            check;
            break;
        }
        if (player1 == "test"){
            check;
            break;
        }
        if (player1 == "Print Board"){
            console.log("    1       2       3");
            console.log("A ", toprow);
            console.log("");
            console.log("B ", middlerow);
            console.log("");
            console.log("C ", bottomrow);
        }
        else{
            console.log("This is not a valid command! Please try again")
        }
    }
    while (true) {
        let player2 = prompt("Player 2 Enter Move > ");
        if (player2 == "test"){
            break;
        }
        if (player2 == "exit") {
            console.log("Cleaning Board, and exiting, bye!");
            process.exit();
        }
        else{
            console.log("This is not a valid command! Please try again")
        }
    }
}