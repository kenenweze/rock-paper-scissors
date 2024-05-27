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

let humanScore = 0;
let computerScore = 0;

function playGame() {

    function playRound(humanChoice, computerChoice) {

        let result;

        if (humanChoice === "rock" && computerChoice === "Rock" || humanChoice === "paper" && computerChoice === "Paper" || humanChoice === "scissors" && computerChoice === "Scissors") {
            return console.log("Play another round");

        } else if (humanChoice === "rock" && computerChoice === "Scissors") {
            humanScore++;
            return console.log("You win! Rock beats Scissors.");

        } else if (humanChoice === "paper" && computerChoice === "Rock") {
            humanScore++;
            return console.log("You win! Paper beats Rock.");

        } else if (humanChoice === "scissors" && computerChoice === "Paper") {
            humanScore++;
            return console.log("You win! Scissors beats Paper.");

        } else if (humanChoice === "rock" && computerChoice === "Paper") {
            computerScore++;
            return console.log("You lose! Paper beats Rock.");

        } else if (humanChoice === "paper" && computerChoice === "Scissors") {
            computerScore++;
            return console.log("You lose! Scissors beats Paper.");

        } else if (humanChoice === "scissors" && computerChoice === "Rock") {
            computerScore++;
            return console.log("You lose! Rock beats Scissors.");

        }

    }

    let humanSelection;
    let computerSelection;
    //const play = playRound(humanSelection, computerSelection);

    for (let i = 0; i < 5; i++) {

        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);


        console.log(humanScore, computerScore);
        console.log(humanSelection, computerSelection);

    }
    if (humanScore > computerScore) {
        return console.log("You win " + humanScore, computerScore);
    } else if (humanScore < computerScore) {
        return console.log("You lose " + humanScore, computerScore);
    } else {
        return console.log("It's a draw");
    }


}

playGame();