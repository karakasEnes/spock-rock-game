const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

const playerContainer = document.querySelector(".player-container");

function playerChoice(e) {
  console.log(e.target);
  console.log(e);
}

playerContainer.addEventListener("click", playerChoice);
