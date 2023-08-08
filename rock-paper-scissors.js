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
      playerWins++
      results.innerHTML += (`Player wins! Score is ${playerWins} - ${computerWins} - ${ties}`);
      results.innerHTML += `<br>`
      update.innerHTML = 'Player wins! '
    } else if (winner == "computer") {
      computerWins++
      results.innerHTML += (`Computer wins! Score is ${playerWins} - ${computerWins} - ${ties}`);
      results.innerHTML += '<br>'
      update.innerHTML = 'Computer wins! '
    } else {
      ties++
      results.innerHTML += (`Tie Game! Score is ${playerWins} - ${computerWins} - ${ties}`);
      results.innerHTML += '<br>'
      update.innerHTML = 'Tie Game! '
    }
  }

  if(playerWins == 5 || computerWins == 5) {
    playerWins == 5 ? results.innerHTML += "Player wins match!" : results.innerHTML += "Computer wins match!"
    playerWins == 5 ? update.innerHTML = "Player wins match! " : update.innerHTML = "Computer wins match! "
    const reset = document.createElement('button')
    reset.innerHTML = "Reset Game"
    results.appendChild(reset)
    rock.style.display = 'none'
    paper.style.display = 'none'
    scissors.style.display = 'none'
    reset.addEventListener('click', () => {
      results.innerHTML = ""
      score.innerHTML = "0 - 0 - 0"
      update.innerHTML = "Make a selection"
      updateDetails()
      playerWins = 0
      computerWins = 0
      ties = 0
      rock.style.display = 'inline'
      paper.style.display = 'inline'
      scissors.style.display = 'inline'
    })
  }
}

function updateDetails() {
  if (update.innerHTML == "Make a selection") {
    details.className += " hide"
  } else {
    details.className = "details"
  }
}

let playerWins = 0
let computerWins = 0
let ties = 0
let games = 0
let playerWinPercentage = ((playerWins / games)*100).toFixed(2)
let results = document.querySelector('.results')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const score = document.querySelector('.score')
let update = document.querySelector('.update')
const details = document.querySelector('.details')

updateDetails()

rock.addEventListener('click', () => {
  let compChoice = getComputerChoice()
  game(playRound("rock", compChoice))
  score.innerHTML = `${playerWins} - ${computerWins} - ${ties}`
  update.innerHTML += `Computer chose ${compChoice}.`
  updateDetails()
})

paper.addEventListener ('click', () => {
  let compChoice = getComputerChoice()
  game(playRound("paper", compChoice))
  score.innerHTML = `${playerWins} - ${computerWins} - ${ties}`
  update.innerHTML += `Computer chose ${compChoice}.`
  updateDetails()
})

scissors.addEventListener ('click', () => {
  let compChoice = getComputerChoice()
  game(playRound("scissors", compChoice))
  score.innerHTML = `${playerWins} - ${computerWins} - ${ties}`
  update.innerHTML += `Computer chose ${compChoice}.`
  updateDetails()
})
