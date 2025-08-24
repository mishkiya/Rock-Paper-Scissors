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

