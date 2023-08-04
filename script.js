function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Convert playerSelection to lowercase for case-insensitivity

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

function typeWriter(text, element, interval) {
    let i = 0;
    const typingInterval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                startGame();
            }, 1500); // Add a delay of 1.5 seconds before starting the game
        }
    }, interval);
}

function startGame() {
    const introText = "Let us see who wins between machines & humans in the game of Rock Paper Scissors so to prove who owns our planet.";
    const introElement = document.getElementById("intro-text");

    // Set the text content to an empty string before starting the animation
    introElement.textContent = '';

    typeWriter(introText, introElement, 75);
}

function showCelebration() {
    const celebrationElement = document.getElementById("celebration");
    celebrationElement.classList.remove("hidden");
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
        playerScoreDisplay.textContent = `PLAYER: ${playerScore}`;

        if (playerScore >= 5) {
            resultDisplay.textContent = "Congratulations! You won the game!";
            showCelebration(); // Show celebration animation
            return;
        }
    } else if (result.startsWith("You Lose")) {
        // Handle the loss condition
    }

    // Update computer score and check for end of game
    // ...

}

// Event listeners for choice images
const choiceImages = document.querySelectorAll(".choice-img");
choiceImages.forEach((image) => {
    image.addEventListener("click", function () {
        const playerSelection = image.getAttribute("data-choice");
        game(playerSelection);
    });
});

// Call the startGame function to initiate the typing animation when the page loads
window.addEventListener("DOMContentLoaded", startGame);
