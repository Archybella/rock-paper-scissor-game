let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'paper' && computerSelection === 'Rock') ||
        (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
        return 'You Win!';
    } else {
        return 'You Lose!';
    }
}

function displayResult(result) {
    const resultDisplay = document.getElementById("result");
    resultDisplay.textContent = result;
}

function updateScores() {
    const playerScoreDisplay = document.getElementById("player-score");
    const computerScoreDisplay = document.getElementById("computer-score");

    playerScoreDisplay.textContent = `PLAYER: ${playerScore}`;
    computerScoreDisplay.textContent = `COMPUTER: ${computerScore}`;
}

function showWinner(winner) {
    const resultDisplay = document.getElementById("result");
    resultDisplay.textContent = `Game Over. ${winner} wins!`;
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    displayResult("");
    const celebrationElement = document.getElementById("celebration");
    celebrationElement.classList.add("hidden");
    startGame();
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    
    displayResult(result);

    if (result === 'You Win!') {
        playerScore++;
    } else if (result === 'You Lose!') {
        computerScore++;
    }

    updateScores();

    if (playerScore >= 5) {
        showWinner("Player");
    } else if (computerScore >= 5) {
        showWinner("Computer");
    }
}

// Event listeners for choice buttons
const rockButton = document.getElementById("rock-button");
rockButton.addEventListener("click", function () {
    game('rock');
});

const paperButton = document.getElementById("paper-button");
paperButton.addEventListener("click", function () {
    game('paper');
});

const scissorsButton = document.getElementById("scissors-button");
scissorsButton.addEventListener("click", function () {
    game('scissors');
});

// Call the startGame function to initiate the typing animation when the page loads
window.addEventListener
