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

console.log(playerSelection())