const choices = ['rock', 'paper', 'scissors'];
let winners =[];


function game(){
    for(let i = 0; i <= 5; i++){
        playRound(i)
    }
    document.querySelector("button").textContent = "Play new game";
    logWins();

}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
    let input = prompt ('Type rock, paper or scissors');
    while(input == null){
        input = prompt('Type rock, paper or scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false){
        input = prompt('Type rock, paper or scissors.  Spelling needs to be exact but capitalisation doesnt matter');
    
        while (input == null) {
            input = prompt("Type Rock, Paper, or Scissors");
            }
        input = input.toLowerCase();
        check = validateInput(input);
    }    
    return input;
}


function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}


function validateInput(choice) {
    return choices.includes(choice);
    
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
      return "tie";
    } else if (
      (choiceP === "rock" && choiceC == "scissors") ||
      (choiceP === "paper" && choiceC == "rock") ||
      (choiceP === "scissors" && choiceC == "paper")
    ) {
      return "player";
    } else {
      return "computer";
    }
  }

function logWins() {
    let playerWins = winners.filter((item) => item == 'player').length;
    let computerWins = winners.filter((item) => item == 'computer').length;
    let ties = winners.filter((item) => item == 'tie').length;
    console.log('Results:');
    console.log('player wins:', playerWins);
    console.log('computer wins:', computerWins);
    console.log('ties:', ties);
}

function logRound (playerChoice, computerChoice, winner, round){
    console.log('player chose:', playerChoice);
    console.log('computer chose:', computerChoice);
    console.log(winner, 'won the round');
    console.log('round:', round);
    console.log("-------------------------------");
}



























/*
let t = 0;
let w = 0;
let l = 0;
let playerChoice;


/*Requests an option from the player

function playerSelection() {
    let playerChoice = prompt('Rock, Paper or Scissors?').toUpperCase();
    return playerChoice;
}
*/

/* the computerPlay function randomly selects 1 of the 3 options 

function computerPlay() {
    let play = Math.random();
    if (play <= 0.333) {
        return 'ROCK';
    } else if (play > 0.333 && play <= 0.666) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

/*plays a round of the game

function playRound(playerPlay, computerSelection) {

    console.log(playerPlay);
    console.log(computerSelection);

    if (playerPlay === computerSelection) {
        t++;
        return 'Draw';
    } else if (playerPlay === 'ROCK' && computerSelection === 'SCISSORS') {
        w++;
        return 'You Win';
    } else if (playerPlay === 'PAPER' && computerSelection === 'ROCK') {
        w++;
        return 'You Win';
    } else if (playerPlay === 'SCISSORS' && computerSelection === 'PAPER') {
        w++;
        return 'You Win';
    } else if (playerPlay === 'ROCK' && computerSelection === 'PAPER') {
        l++;
        return 'You Lose';
    } else if (playerPlay === 'PAPER' && computerSelection === 'SCISSORS') {
        l++;
        return 'You Lose';  
    } else if (playerPlay === 'SCISSORS' && computerSelection === 'ROCK') {
        l++;
        return 'You Lose';         
    }   
}

/*calls functions to run the game

const playerPlay = playerSelection();
const computerSelection = computerPlay();
console.log(playRound(playerPlay, computerSelection));



function game() {
    
    
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt('Rock, Paper or Scissors?').toUpperCase();
        alert(`You:`+`${playerChoice}` \r `Computer:`+ c)
        alert(`Game: ` + i + `/3\r` + `Score:\rYou: ` + w +`\rCPU: ` + l + `\rTies: ` + t);
    }
    
}



/*
function score() {
    if (playerPoints === 3) {
        alert('You Win');
    } else if (computerPoints === 3) {
        alert('You Lose');
    }
}

while (playerPoints < 3 && computerPoints < 3) {
    playerSelection()
}
*/
