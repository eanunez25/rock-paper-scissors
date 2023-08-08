function getComputerChoice() {
  let randInt = Math.floor(Math.random() * 3) + 1;
  let computerChoice;

  if (randInt == 1) {
    computerChoice = "rock"
    computerRock++
  } else if (randInt == 2) {
    computerChoice = "paper"
    computerPaper++
  } else {
    computerChoice = "scissors"
    computerScissors++
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
    ai.style.display = 'none'
    reset.addEventListener('click', () => {
      results.innerHTML = ""
      score.innerHTML = "0 - 0 - 0"
      update.innerHTML = "Make a selection"
      updateDetails()
      playerWins = 0
      playerRock = 0
      playerPaper = 0
      playerScissors = 0
      computerWins = 0
      computerRock = 0
      computerPaper = 0
      computerScissors = 0
      ties = 0
      rock.style.display = 'inline'
      paper.style.display = 'inline'
      scissors.style.display = 'inline'
      ai.style.display = 'inline'
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

function updateStats() {
  games = playerWins + computerWins + ties

  let playerWinPercentage = playerWins / games
  let fixedPlayerWinPercentage = playerWinPercentage*100
  playerWin.innerHTML = 'Win%: ' + fixedPlayerWinPercentage.toFixed(1) + '%'

  let playerRockSelection = playerRock / games
  let fixedPlayerRockSelection = playerRockSelection * 100
  let playerRockWin = playerWinPercentage * playerRockSelection
  let fixedPlayerRockWin = playerRockWin * 100
  rockPlayer.innerHTML = 'Rock: ' + fixedPlayerRockWin.toFixed(1) + '% / ' + fixedPlayerRockSelection.toFixed(1) + '%'

  let playerPaperSelection = playerPaper / games
  let fixedPlayerPaperSelection = playerPaperSelection * 100
  let playerPaperWin = playerWinPercentage * playerPaperSelection
  let fixedPlayerPaperWin = playerPaperWin * 100
  paperPlayer.innerHTML = 'Paper: ' + fixedPlayerPaperWin.toFixed(1) + '% / ' + fixedPlayerPaperSelection.toFixed(1) + '%'

  let playerScissorsSelection = playerScissors / games
  let fixedPlayerScissorsSelection = playerScissorsSelection * 100
  let playerScissorsWin = playerWinPercentage * playerScissorsSelection
  let fixedPlayerScissorsWin = playerScissorsWin * 100
  scissorsPlayer.innerHTML = 'Scissors: ' + fixedPlayerScissorsWin.toFixed(1) + '% / ' + fixedPlayerScissorsSelection.toFixed(1) + '%'

  let computerWinPercentage = computerWins / games
  let fixedComputerWinPercentage = computerWinPercentage*100
  computerWin.innerHTML = 'Win%: ' + fixedComputerWinPercentage.toFixed(1) + '%'

  let computerRockSelection = computerRock / games
  let fixedComputerRockSelection = computerRockSelection * 100
  let computerRockWin = computerWinPercentage * computerRockSelection
  let fixedComputerRockWin = playerRockWin * 100
  rockComputer.innerHTML = 'Rock: ' + fixedComputerRockWin.toFixed(1) + '% / ' + fixedComputerRockSelection.toFixed(1) + '%'

  let computerPaperSelection = computerPaper / games
  let fixedComputerPaperSelection = computerPaperSelection * 100
  let computerPaperWin = computerWinPercentage * computerPaperSelection
  let fixedComputerPaperWin = playerPaperWin * 100
  paperComputer.innerHTML = 'Paper: ' + fixedComputerPaperWin.toFixed(1) + '% / ' + fixedComputerPaperSelection.toFixed(1) + '%'

  let computerScissorsSelection = computerScissors / games
  let fixedComputerScissorsSelection = computerScissorsSelection * 100
  let computerScissorsWin = computerWinPercentage * computerScissorsSelection
  let fixedComputerScissorsWin = playerScissorsWin * 100
  scissorsComputer.innerHTML = 'Scissors: ' + fixedComputerScissorsWin.toFixed(1) + '% / ' + fixedComputerScissorsSelection.toFixed(1) + '%'
}

function aiRecommendation(compChoice, winner) {

  if (winner == 'computer') {
    if (compChoice == 'rock') {
      return 'paper'
    } else if (compChoice == 'paper') {
      return 'scissors'
    } else {
      return 'rock'
    }
  } else if (winner == 'player') {
    if (compChoice == 'rock') {
      return 'scissors'
    } else if (compChoice == 'paper') {
      return 'rock'
    } else {
      return 'paper'
    }
  } else if (winner == 'tie') {
    console.log(Math.max(computerRock, computerPaper, computerScissors))
    return "none"
  }

}


let playerWins = 0
let playerRock = 0
let playerPaper = 0
let playerScissors = 0
let computerWins = 0
let computerRock = 0
let computerPaper = 0
let computerScissors = 0
let ties = 0
let games = 0
let results = document.querySelector('.results')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const score = document.querySelector('.score')
let update = document.querySelector('.update')
const details = document.querySelector('.details')
const ai = document.querySelector('.ai')
const playerWin = document.querySelector('.player-win')
const rockPlayer = document.querySelector('.rock-player')
const paperPlayer = document.querySelector('.paper-player')
const scissorsPlayer = document.querySelector('.scissors-player')
const computerWin = document.querySelector('.computer-win')
const rockComputer = document.querySelector('.rock-computer')
const paperComputer = document.querySelector('.paper-computer')
const scissorsComputer = document.querySelector('.scissors-computer')

updateDetails()

rock.addEventListener('click', () => {
  let compChoice = getComputerChoice()
  let winner = playRound("rock", compChoice)
  game(winner)
  score.innerHTML = `${playerWins} - ${computerWins} - ${ties}`
  update.innerHTML += `Computer chose ${compChoice}.`
  updateDetails()
  playerRock++
  updateStats()
  ai.innerHTML = "AI Recommendation: " + (aiRecommendation(compChoice, winner))
})

paper.addEventListener ('click', () => {
  let compChoice = getComputerChoice()
  let winner = playRound("paper", compChoice)
  game(winner)
  score.innerHTML = `${playerWins} - ${computerWins} - ${ties}`
  update.innerHTML += `Computer chose ${compChoice}.`
  updateDetails()
  playerPaper++
  updateStats()
  ai.innerHTML = "AI Recommendation: " + (aiRecommendation(compChoice, winner))
})

scissors.addEventListener ('click', () => {
  let compChoice = getComputerChoice()
  let winner = playRound("scissors", compChoice)
  game(winner)
  score.innerHTML = `${playerWins} - ${computerWins} - ${ties}`
  update.innerHTML += `Computer chose ${compChoice}.`
  updateDetails()
  playerScissors++
  updateStats()
  ai.innerHTML = "AI Recommendation: " + (aiRecommendation(compChoice, winner))
})
