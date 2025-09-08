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

function getHumanChoice(){
  let x = prompt("what you want big bruh ?");
  if (x.toLowerCase() == "rock"){
    return "rock";
  }
  else if (x.toLowerCase() == "paper"){
    return "paper";
  }
  else {
    return "scissors";
  }
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
  let condition = (humanChoice == "rock" && computerChoice == "scissors") ||
                  (humanChoice == "scissors" && computerChoice == "paper") ||
                  (humanChoice == "paper" && computerChoice == "rock") ? 1 : humanChoice == computerChoice ? 2 : 0;
  if (condition == 1){
    console.log (`you won ! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  }
  else if (condition == 0){
    console.log (`you lose ! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
  if (condition == 2){
    console.log (`thats a tie ! ${humanChoice} is the same as ${computerChoice}`);
  }
}

function playGame(){
  for(let i=0;i<5;i++){
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  console.log (`you just used *${humanChoice}* !!!`);
  console.log (`the computer used *${computerChoice}* against you !!!`);
  playRound(humanChoice,computerChoice);
  console.log (`the score is now ${humanScore} for you\nand ${computerScore} for the clanker!`);  
  }
  console.log(`the final score is human ${humanScore} - ${computerScore} computer`);
  if (humanScore > computerScore){
    console.log("Congrats you just won the game");
  }
  else if (computerScore>humanScore){
    console.log("The bots triumphs over human");
  }
  else {
    console.log("nobody wins");
  }
}
playGame();
