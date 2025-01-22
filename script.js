

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
const choices =["rock","paper","scissors","quit"];

function getPlayerChoice(){
    player_choice = prompt("Enter your choice:");
    if (player_choice == null){
        return "quit";
    }
    return player_choice.toLowerCase();
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

//console.log(getPlayerChoice(), getComputerChoice());// get choices

//for game over
/*function gameOver(){
    if(player_score > computer_score){
        return "Congratulations! You win!";
    }else if(player_choice == "quit"){
        return "Game over";
    }
   
    else if (player_score == computer_score){
        return "It's A Draw!";
    }else{
        return "You lose! Try Again"
    }
    
}

while(true){
    let player_choice = getPlayerChoice();

    if (!choices.includes(player_choice)) {
        console.log("Invalid choice. Please enter rock, paper, scissors, or quit.");
        continue;
    }
    if(player_choice == "quit"){
    break;
    }

    let computer_choice = getComputerChoice();
    let result = playRound(player_choice,computer_choice);
    console.log(result);
    console.log(`player score:${player_score} computer score: ${computer_score}`);
}
console.log(gameOver());*/

// event listeners

const buttons = document.querySelectorAll("button");
buttons.forEach((button)=> {
    button.addEventListener("click",(event)=>{
       const choice = event.target.getAttribute("data-choice");
    
       if (choice == "quit"){
        console.log("Game Over");
       }else
       console.log(`You have selected : ${choice}`);
})
    
})
