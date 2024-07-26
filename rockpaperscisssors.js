let computerChoice;

function getComputerChoice() {
    let number = Math.random();
    if (number < 0.33) {
        return computerChoice = "rock";
    }
    else if (number > 0.66) {
        return computerChoice = "paper";
    }
    else {
        return computerChoice = "scissors";
    }

}

console.log(getComputerChoice());