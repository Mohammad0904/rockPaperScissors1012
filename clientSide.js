var url = "http://localhost:2500/post";

//This function stores the name of the first player in PVP mode.
function player1() {
    var name1 = prompt("Please enter your name: ");
    document.getElementById("welcomePlayer1").innerHTML = name1;
}

//This function stores the name of the second player in PVP mode.
function player2() {
    var name2 = prompt("Please enter your name: ");
    document.getElementById("welcomePlayer2").innerHTML = name2;
}

//This function stores the name of the player in PVC mode.
function player3() {
    var name3 = prompt("Please enter your name: ");
    document.getElementById("welcomePlayer3").innerHTML = name3;
}

//This function alerts the players regarding the rules of the game.
function rules() {
    alert("Rules: \n \n Rock beats scissors but loses to paper. \n \n Scissors beat paper but lose to rock. \n \n Paper beats rock but loses to scissors. \n \n There will be three rounds. \n \n Whoever wins 2 rounds wins the game. \n \n BEST OF LUCK!!!");
    document.getElementById("begin").style.display = "inline";
    document.getElementById("wht").style.display = "inline";
}

// This function generates a random sign for the computer.
function randomSign() {
    var options = ["r", "p", "s"];
    var randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

// This function ensures that only one of the checkboxes is checked.
function checkUncheck() {
    if (document.getElementById("check1").checked == true) {
        document.getElementById("check2").innerHTML = document.getElementById("check2").checked == false;
        document.getElementById("check3").innerHTML = document.getElementById("check3").checked == false;
    } else if (document.getElementById("check2").checked == true) {
        document.getElementById("check1").innerHTML = document.getElementById("check1").checked == false;
        document.getElementById("check3").innerHTML = document.getElementById("check3").checked == false;
    } else if (document.getElementById("check3").checked == true) {
        document.getElementById("check1").innerHTML = document.getElementById("check1").checked == false;
        document.getElementById("check2").innerHTML = document.getElementById("check2").checked == false;
    }
}

// This function posts the selected option of the player in PVC mode and receives the response from server.
function playButton() {

    var playerChoice = 0;

    if (document.getElementById("check1").checked == true) {
        playerChoice = "r";
    }
    else if (document.getElementById("check2").checked == true) {
        playerChoice = "p";
    }
    else if (document.getElementById("check3").checked == true) {
        playerChoice = "s";
    }
    $.post(url + '?data=' + JSON.stringify({
        'name': myName,
        'playerChoice': playerChoice,
        'action': 'evaluate'
    }),
        response);
}

// This function posts the selected options of the two players in PVP mode and receives the response from server.
function twoPlayButton() {
    var player1Choice = 0;
    var player2Choice = 0;

    if (document.getElementById("p1check1").checked == true) {
        player1Choice = "r";
    }
    else if (document.getElementById("p1check2").checked == true) {
        player1Choice = "p";
    }
    else if (document.getElementById("p1check3").checked == true) {
        player1Choice = "s";
    }

    if (document.getElementById("p2check1").checked == true) {
        player2Choice = "r";
    }
    else if (document.getElementById("p2check2").checked == true) {
        player2Choice = "p";
    }
    else if (document.getElementById("p2check3").checked == true) {
        player2Choice = "s";
    }
    $.post(url + '?data=' + JSON.stringify({
        'player1Choice' : player1Choice,
        'player2Choice' : player2Choice,
        'action' : 'evaluatePVP'
    }),
    response);
}

// This function receives the response from the server.
function response(data, status) {
    var response = JSON.parse(data);
    console.log(data);
    if (response['action'] == 'evaluate') {
        var win = response['win'];
        if (win == true) {
            alert("You won");
        } else { alert("You lost") };
    }

    if (response['action'] == 'evaluatePVP') {
        var winP1 = response['winP1']
        var winP2 = response['winP2']
        if (winP1 == true) {
            alert("Player 1 won this round!")
        }
        else if (winP2 == true) {
            alert("Player 2 won this round!")
        }
        else if (winP1 == false && winP2 == false) {
            alert("It is a tie! ")
        }
    }
}

