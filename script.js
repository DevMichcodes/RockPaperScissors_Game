

/*let computer_score =0;
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

function getPlayerChoice(player_choice){
    const playerChose = document.getElementById("playerChoice");
    playerChose.textContent = player_choice;
    /*player_choice = prompt("Enter your choice:");
    if (player_choice == null){
        return "quit";
    }*/
  /*  return player_choice.toLowerCase();
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

/*const buttons = document.querySelectorAll("button");
buttons.forEach((button)=> {
    button.addEventListener("click",(event)=>{
       const choice = event.target.getAttribute("data-choice");
//selects where the result will be displayed
       const gameResult = document.getElementById("results");
       if (choice === "quit") {
        document.getElementById("results").textContent = "Game Over!";
        return;
    }else{
        document.getElementById("results").textContent = `You selected : ${choice}`;
    
 }
console.log("Before updating the DOM");
const computer_choice = getComputerChoice();
const result = playRound(player_choice, computer_choice);




    
      
})
    
})*/
// updating the UI
/*
function showResults(player_choice,computer_choice,result){
            //update choices
           document.getElementById("playerChoice").textContent = player_choice;
           document.getElementById("computerChoice").textContent = computer_choice; 

            // Update Scores
            document.getElementById("player-score").textContent = player_score;
            document.getElementById("computer-score").textContent = computer_score;

            // Display Result
            document.getElementById("results").textContent = result;
}

//add event listeners

const buttons = document.querySelectorAll("button");
    buttons.forEach((button) =>{
        button.addEventListener("click",(event)=>{
            const choice = event.target.getAttribute("data-choice");
            if(player_choice === "quit"){
                document.getElementById("results").textContent = "Game over!";
                return;
            }
            const computer_choice = getComputerChoice();
            const result = playRound(player_choice,computer_choice);
            showResults(player_choice,computer_choice,result);

        });

    });
    */
    
// initialising player scores

let player_score = 0;
let computer_score = 0;
const player_choice ="";
const computer_choice ="";

function getComputerChoice(){
    let computer_choice = ["Rock","Paper","Scissors"];
     return computer_choice[Math.floor(Math.random()*3)];
}

function getPlayerChoice(event){
    
    const player_choice = event.target.dataset.choice;
    
    const computer_choice =getComputerChoice();

    //display both items
    document.getElementById("playerChoice").textContent = `${player_choice}`;
    document.getElementById("computerChoice").textContent = `${computer_choice}`;

if(player_choice === computer_choice){
    document.getElementById("results").textContent='it\'s a Tie';
}
else if(
    (player_choice === "Rock" && computer_choice === "Scissors")||
    (player_choice === "Scissors"&& computer_choice === "Paper")||
    (player_choice === "Paper" && computer_choice === "Rock")
)
{
    player_score++;
    document.getElementById("player-scores").textContent = `${player_score}`;
    document.getElementById("results").textContent = `${player_choice} beats ${computer_choice}. You win!!`;

}else{
    computer_score++;
    document.getElementById("computer-scores").textContent = `${computer_score}`;
    document.getElementById("results").textContent = `${computer_choice} beats ${player_choice}. You lose!!`;

}


}



function quitGame(){
    let showResult = 'GAME OVER!';
    if(player_score > computer_score){
        showResult += 'You win!';
     }else if(computer_score > player_score){
        showResult += 'You lose!';
     }else{
        showResult += "It\s a tie!"
     }
     const finalResult = document.getElementById('finalResult');
     finalResult.textContent = showResult;
}

// Attaching event listeners

const buttons = document.querySelectorAll('[data-choice]');

buttons.forEach(button => {
    button.addEventListener("click", getPlayerChoice);
});
document.getElementById("quitButton").addEventListener("click", quitGame);


