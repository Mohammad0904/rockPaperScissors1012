var express = require('express');
var app = express();
var idCounter = 0;
var win = false;
var winP1 = false;
var winP2 = false;

app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);

 if (z['action' == "evaluate"]) {

        var compChoice = generateSymbol();

        if (z[playerChoice] == 'r' && compChoice == 's') {
            win = true;
        }
        else if (z[playerChoice] == 'p' && compChoice == 'r') {
            win = true;
        }
        else if (z[playerChoice] == 's' && compChoice == 'p') {
            win = true;
        }
        else win = false;

        var jsontext = JSON.stringify({
            'action': 'evaluate',
            'win': win,
        });
        console.log(jsontext);
        res.send(jsontext);
    }

    else if (z['action' == 'evaluatePVP']) {
        if (z[player1Choice] == 'r' && z[player2Choice] == 'p') {
            winP2 = true;
        }
        else if (z[player1Choice] == 'r' && z[player2Choice] == 's') {
            winP1 = true;
        }
        else if (z[player1Choice] == 'p' && z[player2Choice] == 'r') {
            winP1 = true;
        }
        else if (z[player1Choice] == 'p' && z[player2Choice] == 's') {
            winP2 = true;
        }
        else if (z[player1Choice] == 's' && z[player2Choice] == 'r') {
            winP2 = true;
        }
        else if (z[player1Choice] == 's' && z[player2Choice] == 'p') {
            winP1 = true;
        }
        var jsontext = JSON.stringify({
            'action': 'evaluatePVP',
            'winP1': winP1,
            'winP2' : winP2,
        });
        console.log(jsontext);
        res.send(jsontext);
    }

    else {
        res.send(JSON.stringify({ 'msg': 'error!!!' }));
    }

}).listen(2500);
console.log("Server is running!");


function generateSymbol() {
    var symbols = ['r', 'p', 's'];
    var newSymbol = symbols[Math.floor((Math.random) * 3)];
    return newSymbol;
}


/* function evaluate(symbol, playerChoice) {
    var win = false;
    if (symbol == "r" && playerChoice == "r") {
        win = false;
    }
    else if (symbol == "r" && playerChoice == "p") {
        win = true;
    }
    else if (symbol == "r" && playerChoice == "s") {
        win = false;
    }
    else if (symbol == "p" && playerChoice == "r") {
        win = false;
    }
    else if (symbol == "p" && playerChoice == "p") {
        win = false;
    }
    else if (symbol == "p" && playerChoice == "s") {
        win = true;
    }
    else if (symbol == "s" && playerChoice == "r") {
        win = true;
    }
    else if (symbol == "s" && playerChoice == "p") {
        win = false;
    }
    else if (symbol == "s" && playerChoice == "s") {
        win = false;
    } return win
} */