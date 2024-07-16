const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const showPlayerScore = document.getElementById("human-score");
const showComputerScore = document.getElementById("computer-score");
const winAnnouncement = document.getElementById("winner");
const showWinStatement = document.getElementById("win-statement");

let humanScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

//showPlayerScore.addEventListener("change", () => {
    if (humanScore === 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
//})

function getComputerChoice() {
    let computerChoice = Math.ceil(Math.random() * 3);

    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter 'rock', 'paper' or 'scissors'").toLowerCase();

    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else if (humanChoice === "scissors") {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanScore === 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        showWinStatement.textContent = "YOU WON!!!";
        showWinStatement.style.color = "green";
    } else if (computerScore === 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        showWinStatement.textContent = "YOU LOST THE GAME!!!";
        showWinStatement.style.color = "red";
    } else {

        if (humanChoice === "rock" && computerChoice === "Rock" || humanChoice === "paper" && computerChoice === "Paper" || humanChoice === "scissors" && computerChoice === "Scissors") {
            return winAnnouncement.textContent = `You tied. You both chose ${humanChoice}.`;

        } else if (humanChoice === "rock" && computerChoice === "Scissors") {
            humanScore++;
            showPlayerScore.textContent = "Player Score: " + humanScore;
            winAnnouncement.textContent = `You won. Computer chose ${computerChoice}`;
            return console.log("You win! Rock beats Scissors.");

        } else if (humanChoice === "paper" && computerChoice === "Rock") {
            humanScore++;
            showPlayerScore.textContent = "Player Score: " + humanScore;
            winAnnouncement.textContent = `You won. Computer chose ${computerChoice}`;
            return console.log("You win! Paper beats Rock.");

        } else if (humanChoice === "scissors" && computerChoice === "Paper") {
            humanScore++;
            showPlayerScore.textContent = "Player Score: " + humanScore;
            winAnnouncement.textContent = `You won. Computer chose ${computerChoice}`;
            return console.log("You win! Scissors beats Paper.");

        } else if (humanChoice === "rock" && computerChoice === "Paper") {
            computerScore++;
            showComputerScore.textContent = "Computer Score: " + computerScore;
            winAnnouncement.textContent = `You lost. Computer chose ${computerChoice}`;
            return console.log("You lose! Paper beats Rock.");

        } else if (humanChoice === "paper" && computerChoice === "Scissors") {
            computerScore++;
            showComputerScore.textContent = "Computer Score: " + computerScore;
            winAnnouncement.textContent = `You lost. Computer chose ${computerChoice}`;
            return console.log("You lose! Scissors beats Paper.");

        } else if (humanChoice === "scissors" && computerChoice === "Rock") {
            computerScore++;
            showComputerScore.textContent = "Computer Score: " + computerScore;
            winAnnouncement.textContent = `You lost. Computer chose ${computerChoice}`;
            return console.log("You lose! Rock beats Scissors.");

        }
    }

    }