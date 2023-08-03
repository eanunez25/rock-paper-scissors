function getComputerChoice() {
  let randInt = Math.floor(Math.random() * 3) + 1;
  let computerChoice;

  if (randInt == 1) {
    computerChoice = "rock"
  } else if (randInt == 2) {
    computerChoice = "paper"
  } else {
    computerChoice = "scissors"
  }

  console.log("Computer's choice: " + computerChoice)
  return computerChoice
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    return `Tie game! Both players chose ${playerSelection}.`
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "Computer wins! Paper beats rock."
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "Player wins! Rock beats scissors."
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "Player wins! Paper beats rock."
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "Computer wins! Scissors beat paper."
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "Computer wins! Rock beats scissors."
  } else {
    return "Player wins! Scissors beat paper."
  }
}

console.log(playRound("rOck", getComputerChoice()));