function computerPlay() {
    let computerSelection = '';
    let randomNum = Math.floor(Math.random()*3)

    if (randomNum === 0) { 
        computerSelection = "Rock";
    }

    else if (randomNum === 1) {
        computerSelection = "Paper";
    }
    
    else {
        computerSelection = "Scissors"
    }

    return(computerSelection)
}

function playerSelection(string) {
    let playerSelection = prompt("Please choose Rock, Paper or Scissors");
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}

function playRound(playerSelection, computerSelection) {
    let winner = ''

    if (playerSelection === computerSelection ) {
        return "It's a tie";
    }

    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        winner = "You loser! Paper beats Rock"
    }

    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        winner = "You Win! Rock beats Scissors"
    }

    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        winner = "You Win! Paper beats Rock"
    }

    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        winner = "You Loser! Scissors beats Paper"
    }

    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        winner = "You Loser! Scissors beats Paper"
    }

    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        winner = "You Win! Paper beats Rock"
    }

    return winner
}

