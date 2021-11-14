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
let startprompt = prompt("Player 1 is represented by \"0\" and player 2 is represented by \"X\". Click enter to continue...");
let name1 = prompt("Player 1, what is your name? > ");
let name2 = prompt("Player 2, what is your name? > ");
while (true) {
    while (true) {
        let player1 = prompt("Player 1 Enter Move > ");
        if (player1 == "exit") {
            console.log("Cleaning Board, and exiting, bye!");
            process.exit();
        }
        if (player1 == "A1") {
            toprow[0].push("0");
            break;
        }
        if (player1 == "A2") {
            toprow[1].push("0");
            break;
        }
        if (player1 == "test"){
            break;
        }
    }
    while (true) {
        let player2 = prompt("Player 2 Enter Move > ");
        if (player2 == "test"){
            break;
        }
    }
}