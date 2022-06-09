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
        winner = "You Loser! Scissors beats Paper"
    }

    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        winner = "You Win! Paper beats Rock"
    }

    return winner
}

function game() {
    playRound(playerSelection, computerSelection)
    let roundResult = "";
    let playerScore = 0;
    let computerScore = 0;
    let playerTurn = "";

    for (let i = 0; i < 5; i++) {
        computerTurn = computerPlay();
        playerTurn = playerSelection();
        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.includes("You Win")) {
            playerScore+=1;

        }
            else if (roundResult.includes("You Loser")) {
            computerScore+=1;
            console.log(roundResult + "The Score is" + playerScore + "to" + computerScore)
        }
    }

    if (playerScore > computerScore) {
        console.log("You won the game!" + playerScore + "to" + computerScore)
    }
    else if (playerScore < computerScore) {
        console.log("You lost the game" + playerScore + "to" + computerScore)
    }
    else {
        console.log("It's a tie!")
    }

}

game()