
// function getComputerChoice() {
//     arr = ['rock','paper','scissors'];
//     return arr[Math.floor(Math.random()*arr.length)];
// }

// function playRound(playerSelection, computerSelection){
//     if (playerSelection === computerSelection) {
//         return 'draw';
//     }
//     else {
//         return determineWinner(computerSelection,playerSelection);
//     }
// }

// function determineWinner(computerSelection, playerSelection) {

//     arr = ['rock', 'paper', 'scissors'];
//     temp = [...arr];
//     control = 1;
//     while(control)
//         if (computerSelection == arr[0]){
//             if (playerSelection == arr[1]){
//                 return 'win';
//                 control = 0;
//             }
//             else { 
//                 return 'lose';
//                 control = 0;
//             }
//         }
//         else {
//             arr[0] = temp[1];
//             arr[1] = temp[2];
//             arr[2] = temp[0];
//             temp = [...arr];
//         }
// }

// function game(){
//     wins = 0
//     loses = 0
//     draws = 0
//     for (let i = 0; i < 5; i++) {
//         const computerSelection = getComputerChoice();
//         const input = prompt("rock paper or scissors?: ");
//         const playerSelection = input.toLowerCase();
//         result = playRound(computerSelection, playerSelection)
//         if (result == 'win'){
//             wins++;
//         }
//         else if (result == 'lose'){
//             loses++;
//         }
//         else if (result == 'draw'){
//             draws++;
//         }
//     }

//     return "You won " + wins + " times, you lost " + loses + " times and you drew " + draws + " times."

// }

// console.log(game())