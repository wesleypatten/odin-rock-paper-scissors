/* This function generates a random move by the computer*/

function getComputerChoice(){
    let moves = ["Rock","Paper","Scissors"];
    return moves[Math.floor((Math.random()*3))];
}

/* This function gets the players selection */

function playerSelection(){
    let selection = prompt("Please enter Rock, Paper or Scissors");
    return selection;
}

/* This function plays a single round of Rock Paper Scissors */

function singleRound(playerSelection, getComputerChoice){
    let capital = playerSelection.slice(0,1).toUpperCase();
    let word = playerSelection.slice(1).toLowerCase();
    let newString = capital+word;

    if (newString === "Rock"){
        if (getComputerChoice==="Rock"){
            return "Its a draw";
        }

        else if(getComputerChoice==="Paper"){
            return "You lose! Paper beats Rock";
        }

        else {
            return "You win! Rock beats Scissors";
        }
    }

    if (newString=== "Paper"){
        if(getComputerChoice==="Paper"){
            return "Its a draw";
        }

        else if(getComputerChoice==="Scissors"){
            return "You lose! Scissors beats Paper";
        }

        else{
            return "You win! Paper beats Rock";
        }
    }

    
    if (newString==="Scissors"){
        if (getComputerChoice==="Scissors"){
            return "Its a draw";
        }

        else if(getComputerChoice==="Rock"){
            return "You lose! Rock beats Scissors";
        }

        else{
            return "You win! Scissors beats Paper";
        }
    }
}

/* This function plays five rounds of Rock Paper Scissors */

function game(){
    
    let player = 0;
    let computer =0;
    console.log(singleRound(playerSelection(),getComputerChoice()));
    console.log(singleRound(playerSelection(),getComputerChoice()));
    console.log(singleRound(playerSelection(),getComputerChoice()));
    console.log(singleRound(playerSelection(),getComputerChoice()));
    console.log(singleRound(playerSelection(),getComputerChoice()));
}

console.log(game());
