const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const allGameIcons = document.querySelectorAll(".far");
const resultText = document.getElementById("resultText");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

let computerChoice = "";

function computerRandomChoice() {
  const computerChoiceNumber = Math.floor(Math.random() * 5);

  const choices = ["rock", "paper", "scissors", "lizard", "spock"];

  computerChoice = choices[computerChoiceNumber];
}

function displayComputerChoice() {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}

let playerScore = 0;
let computerScore = 0;

function updateScore(playerChoice) {
  console.log(playerChoice, computerChoice);

  if (playerChoice === computerChoice) {
    resultText.textContent = "It's Tie";
  } else {
    const userChoice = choices[playerChoice];
    const resultNumber = userChoice.defeats.indexOf(computerChoice);

    if (resultNumber >= 0) {
      playerScore++;
      resultText.textContent = "You Won!";
    } else {
      computerScore++;
      resultText.textContent = "Computer Won!";
    }
  }

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

function select(playerChoice) {
  checkResult(playerChoice);

  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}
