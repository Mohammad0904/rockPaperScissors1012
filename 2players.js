
//This function stores the name of the first player in PVP mode.
function player1() {
    var name1 = prompt("Please enter your name: ");
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
    alert("Rules: \n \n Rock beats scissors but loses to paper. \n \n Scissors beat paper but lose to rock. \n \n Paper beats rock but loses to scissors. \n \n There will be three rounds. \n \n Whoever wins 2 rounds wins the game. \n \n BEST OF LUCK!!!");
    document.getElementById("begin").style.display = "inline";
    document.getElementById("wht").style.display = "inline";
}




