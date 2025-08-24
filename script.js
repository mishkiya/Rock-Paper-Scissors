// ===== VARIABLES =====
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;
let totalRounds = 0;

// DOM Elements
const modeButtons = document.querySelectorAll(".mode-btn");
const scoreboard = document.querySelector(".scoreboard");
const choices = document.querySelector(".choices");
const resultDiv = document.getElementById("result");
const restartBtn = document.getElementById("restart");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const currentRoundEl = document.getElementById("current-round");
const totalRoundsEl = document.getElementById("total-rounds");

// ===== GAME LOGIC =====
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "draw";
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) return "win";
  return "lose";
}

function updateScore(result) {
  if (result === "win") playerScore++;
  if (result === "lose") computerScore++;
  currentRound++;

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  currentRoundEl.textContent = currentRound;
}

function showResult(result, player, computer) {
  resultDiv.className = "result"; // reset classes
  if (result === "win") {
    resultDiv.textContent = `You Win! ${player} beats ${computer}`;
    resultDiv.classList.add("win");
  } else if (result === "lose") {
    resultDiv.textContent = `You Lose! ${computer} beats ${player}`;
    resultDiv.classList.add("lose");
  } else {
    resultDiv.textContent = `It's a Draw! You both chose ${player}`;
    resultDiv.classList.add("draw");
  }
  resultDiv.classList.remove("hidden");
}

function checkGameOver() {
  if (currentRound >= totalRounds) {
    let finalMsg = "";
    if (playerScore > computerScore) finalMsg = "🎉 You are the Final Winner!";
    else if (computerScore > playerScore) finalMsg = "😢 Computer Wins the Game!";
    else finalMsg = "⚖️ It's an Overall Draw!";

    resultDiv.textContent = finalMsg;
    restartBtn.classList.remove("hidden");
    choices.classList.add("hidden");
  }
}

// ===== EVENT HANDLERS =====
modeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    totalRounds = parseInt(btn.dataset.rounds);
    totalRoundsEl.textContent = totalRounds;

    // Reset
    playerScore = 0;
    computerScore = 0;
    currentRound = 0;

    playerScoreEl.textContent = 0;
    computerScoreEl.textContent = 0;
    currentRoundEl.textContent = 0;

    scoreboard.classList.remove("hidden");
    choices.classList.remove("hidden");
    resultDiv.classList.add("hidden");
    restartBtn.classList.add("hidden");
  });
});

choices.addEventListener("click", e => {
  if (!e.target.dataset.choice) return;
  const playerChoice = e.target.dataset.choice;
  const computerChoice = getComputerChoice();

  const result = playRound(playerChoice, computerChoice);
  updateScore(result);
  showResult(result, playerChoice, computerChoice);
  checkGameOver();
});

restartBtn.addEventListener("click", () => {
  location.reload();
});