function getComputerChoice() {
  let randInt = Math.floor(Math.random() * 3) + 1
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

getComputerChoice();