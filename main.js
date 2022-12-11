// functions 

function getComputerChoice() {
    arr = ['rock','paper','scissors'];
    return arr[Math.floor(Math.random()*arr.length)];
}


function determineWinner(computerSelection, playerSelection) {
    arr = ['rock', 'paper', 'scissors'];
    temp = [...arr];
    control = 1;
    while(control)
        if (computerSelection == arr[0]){
            if (playerSelection === computerSelection) {
                return 'draw';
            }
            if (playerSelection == arr[1]){
                return 'win';
                control = 0;
            }
            else { 
                return 'lose';
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
    
const buttons = document.querySelectorAll('button');
let playerSelection;
let computerSelection;
let wins = 0;
let loses = 0;
let draws = 0;
let winCountDisplay = document.querySelector('.win-count');
let loseCountDisplay = document.querySelector('.lose-count');
let drawCountDisplay = document.querySelector('.draw-count');
let gameDescription = document.querySelector('.game-description');


buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

        playerSelection = btn.id;
        computerSelection = getComputerChoice();
        result = determineWinner(computerSelection, playerSelection);
        if (result == 'win'){
            wins++;
            winCountDisplay.textContent = wins;
        }
        if (result == 'lose'){
            loses++;
            loseCountDisplay.textContent = loses;
        }
        if (result == 'draw'){
            draws++;
            drawCountDisplay.textContent = draws;
        }

        gameDescription.textContent = `You picked ${playerSelection} and the Computer picked ${computerSelection}. This means you ${result}`;
    })
})

