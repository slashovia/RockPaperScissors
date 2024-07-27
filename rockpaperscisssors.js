let computerChoice;
let humanChoice;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    switch (number) {
        case 1:
            return computerChoice = "rock";
            break;
        case 2:
            return computerChoice = "paper";
            break;
        case 3:
            return humanChoice = "scissors";
            break;
    }

}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    switch (choice.toLowerCase()) {
        case "rock":
            return humanChoice = "rock";
            break;
        case "paper":
            return humanChoice = "paper";
            break;
        case "scissors":
            return humanChoice = "scissors";
            break;
        default:
            alert("Invalid input.");
    }
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice) {

        if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {
            computerScore++;
            console.log(`Computer choice: ${computerChoice}\nPlayer choice: ${humanChoice}\nYou lose, ${computerChoice} beats ${humanChoice}!\nCurrent score:\nComputer ${computerScore} - Player ${humanScore}`);
        }

        else if (computerChoice === "rock" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "rock") {
            humanScore++;
            console.log(`Computer choice: ${computerChoice}\nPlayer choice: ${humanChoice}\nYou win, ${humanChoice} beats ${computerChoice}!\nCurrent score:\nComputer ${computerScore} - Player ${humanScore}`);
        }

        else {
            console.log(`Computer choice: ${computerChoice}\nPlayer choice: ${humanChoice}\nTie!\nCurrent score:\nComputer ${computerScore} - Player ${humanScore}`)

        }

    }
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    if (computerScore > humanScore) {
        console.log(`Computer wins the challenge!`)
    }
    else if (humanScore > computerScore) {
        console.log(`You win the challenge!`)
    }
    else {
        console.log(`It's a tie!`)
    }
}

playGame();