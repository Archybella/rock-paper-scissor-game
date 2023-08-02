function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
        (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
        (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const resultDisplay = document.getElementById("result");
    resultDisplay.textContent = result;

    const playerScoreDisplay = document.getElementById("player-score");
    const computerScoreDisplay = document.getElementById("computer-score");
    let playerScore = parseInt(playerScoreDisplay.textContent.split(":")[1]);
    let computerScore = parseInt(computerScoreDisplay.textContent.split(":")[1]);

    if (result.startsWith("You Win")) {
        playerScore++;
    } else if (result.startsWith("You Lose")) {
        computerScore++;
    }

    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;

    if (playerScore >= 5) {
        resultDisplay.textContent = "Congratulations! You won the game!";
    } else if (computerScore >= 5) {
        resultDisplay.textContent = "You lost the game. Better luck next time!";
    }
}

const choiceButtons = document.querySelectorAll(".choice-btn");
choiceButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const playerSelection = button.dataset.choice;
        game(playerSelection);
    });
});
