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
    return "tie"
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "computer"
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "player"
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "player"
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "computer"
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "computer"
  } else {
    return "player"
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;

  while (playerWins < 5 && computerWins < 5) {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Selection:").toLowerCase();

    if (playRound(playerChoice,computerChoice) == "player") {
      playerWins++;
      console.log("Player: " + playerWins);
    } else if (playRound(playerChoice,computerChoice) == "computer") {
      computerWins++;
      console.log("Computer: " + computerWins);
    }
  }
}

game();