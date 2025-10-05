console.log("hello world");

function getComputerChoice(){
  let x = Math.random();
  if (x > 0.7){
    return "rock";
  }
  else if (x > 0.4){
    return "paper";
  }
  else {
    return "scissors";
  }
}

let humanScore=0;
let computerScore=0;

let playerCount = document.querySelector("#playerCount");
let computerCount = document.querySelector("#computerCount");

function playRound(humanChoice,computerChoice,commentary){
  let condition = (humanChoice == "rock" && computerChoice == "scissors") ||
                  (humanChoice == "scissors" && computerChoice == "paper") ||
                  (humanChoice == "paper" && computerChoice == "rock") ? 1 : humanChoice == computerChoice ? 2 : 0;
  if (condition == 1){
    commentary.textContent = `you won ! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
    playerCount.textContent = humanScore;
  }
  else if (condition == 0){
    commentary.textContent = `you lose ! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
    computerCount.textContent = computerScore;
  }
  if (condition == 2){
    commentary.textContent = `thats a tie ! ${humanChoice} is the same as ${computerChoice}`;
  }
}

function endRound(){
  commentary.textContent = `the final score is human ${humanScore} - ${computerScore} computer`;
  let h3 = document.createElement("h3");
  if (humanScore > computerScore){
    h3.textContent = "Congrats you just won the game";
  }
  else if (computerScore > humanScore){
    h3.textContent = "The bots triumphs over human";
  }
  else {
    h3.textContent = "nobody wins";
  }
  commentary.append(h3);
}

let commentator = document.querySelector("#commentary");
let playerOption = document.querySelector("#playerOption");

playerOption.addEventListener('click',(event) => {
  let target = event.target;

  let humanChoice = '';
  let computerChoice = getComputerChoice();

  switch(target.id){
    case 'rock':
      humanChoice = "rock";
      break;
    case 'paper':
      humanChoice = "paper";
      break;
    case 'scissors':
      humanChoice = "scissors";
      break;
  }
  playRound(humanChoice,computerChoice,commentator);
  if (humanScore >= 5 || computerScore >= 5){
    endRound();
  }
});
