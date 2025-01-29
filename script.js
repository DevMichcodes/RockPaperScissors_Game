// initialising player scores

let player_score = 0;
let computer_score = 0;
const player_choice ="";
const computer_choice ="";
let gameOver = false;

function getComputerChoice(){
    let computer_choice = ["Rock","Paper","Scissors"];
     return computer_choice[Math.floor(Math.random()*3)];
}

function getPlayerChoice(event){
    if(gameOver) return;//no accepting inputs if game over
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
    gameOver = true;
    
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


