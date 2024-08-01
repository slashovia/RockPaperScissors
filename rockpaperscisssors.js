let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const containerResult = document.querySelector(".result");

rockBtn.addEventListener('click', () => {
    const computerPick = getComputerChoice();
    const playerPick = 'rock';
    playRound(computerPick, playerPick);
});
paperBtn.addEventListener('click', () => {
    const computerPick = getComputerChoice();
    const playerPick = 'paper';
    playRound(computerPick, playerPick);
});
scissorsBtn.addEventListener('click', () => {
    const computerPick = getComputerChoice();
    const playerPick = 'scissors';
    playRound(computerPick, playerPick);
});


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

function playRound(computerChoice, humanChoice) {
    // Condition for computer victory.
    if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {


        computerScore++;
        containerResult.innerHTML = `Computer choice: ${computerChoice}<br>Player choice: ${humanChoice}<br>You lose, ${computerChoice} beats ${humanChoice}!<br>Current score:<br>Computer ${computerScore} - Player ${humanScore}<br>`;
    }

    //Condition for human victory.
    else if (computerChoice === "rock" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "rock") {


        humanScore++;
        containerResult.innerHTML = `Computer choice: ${computerChoice}<br>Player choice: ${humanChoice}<br>You win, ${humanChoice} beats ${computerChoice}!<br>Current score:<br>Computer ${computerScore} - Player ${humanScore}<br>`;
    }

    //Condition for draw.
    else {
        containerResult.innerHTML = `Computer choice: ${computerChoice}<br>Player choice: ${humanChoice}<br>Tie!<br>Current score:<br>Computer ${computerScore} - Player ${humanScore}<br>`;

    }
    if (humanScore == 5) {
        containerResult.innerHTML += `Congratulations! You win the game!`;
        humanScore = 0;
        computerScore = 0;
    }
    if (computerScore == 5) {
        containerResult.innerHTML += `Oh no! Computer wins the game!`;
        humanScore = 0;
        computerScore = 0;
    }
}

// function playGame() {

//     // for (let i = 0; i < 5; i++) {
//     //     playRound(getComputerChoice(), getHumanChoice());
//     // }
//     playRound();

//     if (computerScore > humanScore) {
//         console.log(`Computer wins the challenge!`)
//     }
//     else if (humanScore > computerScore) {
//         console.log(`You win the challenge!`)
//     }
//     else {
//         console.log(`It's a tie!`)
//     }
// }

// playGame();

