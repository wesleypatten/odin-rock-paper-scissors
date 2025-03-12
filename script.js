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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    while (round < 5) { // Play 5 rounds
        let result = singleRound(playerSelection(), getComputerChoice());
        console.log(`Round ${round + 1}: ${result}`); // Display round result

        // Update scores based on result
        if (result.includes("You win")) {
            playerScore++;
        } else if (result.includes("You lose")) {
            computerScore++;
        }

        round++; // Move to the next round
    }

    // Display final results
    console.log(`Final Score - Player: ${playerScore}, Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game! 🎉");
    } else if (computerScore > playerScore) {
        console.log("Game over! The computer won. 🤖");
    } else {
        console.log("It's a tie! Well played! 😃");
    }
}

console.log(game());
