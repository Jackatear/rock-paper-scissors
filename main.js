
function getComputerChoice() {
    arr = ['rock','paper','scissors'];
    return arr[Math.floor(Math.random()*arr.length)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "It's a Draw! both picked " + playerSelection;
    }
    else {
        return determineWinner(computerSelection,playerSelection);
    }
}

function determineWinner(computerSelection, playerSelection) {

    arr = ['rock', 'paper', 'scissors'];
    temp = [...arr];
    control = 1;
    while(control)
        if (computerSelection == arr[0]){
            if (playerSelection == arr[1]){
                return "You Win!";
                control = 0;
            }
            else { 
                return "You Lose!";
                control = 0;
            }
        }
        else {
            arr[0] = temp[1];
            arr[1] = temp[2];
            arr[2] = temp[0];
            temp = [...arr];
        }
}


// console.log(getComputerChoice())

const computerSelection = getComputerChoice()

const input = prompt("rock paper or scissors?: ")
const playerSelection = input.toLowerCase()

console.log(playRound(playerSelection, computerSelection))

console.log("The computer picked " + computerSelection)
console.log("You picked " + playerSelection)