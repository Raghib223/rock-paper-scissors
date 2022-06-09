function computerSelection() {
    let computerSelection = "";
    let randomNum = Math.floor(Math.random()*3)

    if (randomNum == 0) {
        computerSelection = "Rock";
    }
    else if (randomNum == 1) {
        computerSelection = "Paper";
    }

    else {
        computerSelection = "Scissors";
    }

    return computerSelection
}

function playerSelection() {
    let playerSelection = prompt("Please choose Rock, Paper or Scissors");
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let winner = ""

    if (playerSelection === computerSelection ) {
        return "It's a tie";
    }

    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        winner = "You Loser! Paper beats Rock"
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
        winner = "You Loser! Rock beats Scissors"
    }

    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        winner = "You Win! Scissors beats Paper"
    }

    return winner
}

function game() {
    let roundResult = "";
    let computerScore = 0;
    let playerScore = 0;
    let playerTurn = "";
    let computerTurn = "";
    for (i=0; i < 5; i++) {
        computerTurn = computerSelection();
        playerTurn = playerSelection();
        roundResult = playRound(playerTurn, computerTurn);
        if (roundResult.includes("You Win!")) {
            playerScore+=1;
            console.log("You win this round")
        }
        else if (roundResult.includes("You Lose!")) {
            computerScore+=1;
            console.log("You Lose this round")
        }
        else {
            console.log("This round is a tie")
        }
    }
    
    if (playerScore > computerScore) {
        console.log("You won the game")
    }
    else if (playerScore < computerScore) {
        console.log("You lost the game")
    }
    else {
        console.log("It's a tie")
    }
}

game()