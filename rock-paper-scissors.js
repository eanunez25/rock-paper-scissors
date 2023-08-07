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

function game(winner) {

  if (playerWins < 5 && computerWins < 5) {
    if (winner == "player") {
      playerWins++;
      results.innerHTML += (`Player wins! Score is ${playerWins} - ${computerWins}`);
      results.innerHTML += `<br>`
    } else if (winner == "computer") {
      computerWins++;
      results.innerHTML += (`Computer wins! Score is ${playerWins} - ${computerWins}`);
      results.innerHTML += '<br>'
    } else {
      results.innerHTML += (`Tie Game! Score is ${playerWins} - ${computerWins}`);
      results.innerHTML += '<br>'
    }
  }

  if(playerWins == 5 || computerWins == 5) {
    playerWins == 5 ? results.innerHTML += "Player wins match!" : results.innerHTML += "Computer wins match!"
  }
}

let playerWins = 0;
let computerWins = 0;
let results = document.querySelector('.results')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

rock.addEventListener('click', () => {
  game(playRound(rock.innerHTML, getComputerChoice()))
})

paper.addEventListener ('click', () => {
  game(playRound(paper.innerHTML, getComputerChoice()))
})

scissors.addEventListener ('click', () => {
  game(playRound(scissors.innerHTML, getComputerChoice()))
})
