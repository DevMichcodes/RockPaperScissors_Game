

let computer_score =0;
let player_score =0;

// getting computer choice for the game
function getComputerChoice(){
    let computer_choice = ["Rock","Paper","Scissors"];
        return computer_choice[Math.floor(Math.random ()*3)];
}

//console.log(getComputerChoice());
// playing a single round
let player_choice ="";
const choices =["rock","paper","scissors"];

function getPlayerChoice(){
    player_choice = prompt("Enter your choice:").toLowerCase();
    return player_choice;
}
//console.log(getComputerChoice(),getPlayerChoice());

// playing a round
function playRound(){
    let computer_choice = getComputerChoice().toLowerCase();
   //return both player and computer choices
    console.log(`Player choice: ${player_choice}`);
    console.log(`Computer choice: ${computer_choice}`);
// logic to get winner
    if (!choices.includes(player_choice)){
        return "Invalid choice, choose either rock, paper or scissors";
    }
    if(player_choice == computer_choice){
        return "It is a tie!";
    }
    if((player_choice == "scissors" && computer_choice == "paper")||
       (player_choice == "rock" && computer_choice == "scissors")||
       (player_choice == "paper" && computer_choice == "rock")){
        player_score ++;
       return `You win!,${player_choice} beats ${computer_choice} `;
       
    }else{
        computer_score++;
        return `You lose! ${computer_choice} beats ${player_choice}`;
        
    }
    

}
/*
//console.log(getPlayerChoice(), getComputerChoice());// get choices



//for game over
function gameOver(){
    if(player_score > computer_score){
        return "Congratulations! You win!";
    }else if (player_score == computer_score){
        return "It's A Draw!";
    }else{
        return "You lose! Try Again"
    }
    
}
const allRounds = 5;

for ( rounds = 0; rounds <= allRounds; rounds ++){
    console.log (`Rounds = ${rounds}`);
    getPlayerChoice();
    let result = playRound();
    console.log(result);
   console.log(`Player score: ${player_score} Computer score: ${computer_score}`);

}
console.log(gameOver());

