//These are the memory spaces for names of players.
var name1 = 0;
var name2 = 0;
var name3 = 0;

//This function stores the name of the first player in PVP mode.
function player1() {
    name1 = prompt("Please enter your name: ");
    return name1;
}

//This function stores the name of the second player in PVP mode.
function player2() {
    name2 = prompt("Please enter your name: ");
}

//This function stores the name of the player in PVC mode.
function player3() {
    name3 = prompt("Please enter your name: ")
}

//This function alerts the players regarding the rules of the game.
function rules() {
    alert("Rules: Rock beats scissors but loses to paper. Scissors beat paper but lose to rock. Paper beats rock but loses to scissors. There will be three rounds. Whoever wins 2 rounds wins the game. BEST OF LUCK!!!");
    document.getElementById("begin").style.display = "inline";
    document.getElementById("wht").style.display = "inline";
}


document.getElementById("output").innerHTML = name1;

