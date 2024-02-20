let userScore = 0;
let botScore = 0;
const userPoints = document.querySelector("#user-score");
const botPoints = document.querySelector("#bot-score");
 const choices = document.querySelectorAll(".choice");
 const winnerDisplay = document.querySelector(".msg");
const getCompChoice = () =>{
    let options = ["rock","paper","scissors"];
    let randomIdx = Math.floor(Math.random () * 3);
    return options[randomIdx];
}

const showWinner = (userWin, userChoice , compChoice) => {
    if(userWin){
        winnerDisplay.innerText = `You win!! Your ${userChoice} beats ${compChoice}`;
        winnerDisplay.style.backgroundColor = "green";
        userScore++;
        userPoints.innerText = userScore;
        
    }
    else{
        winnerDisplay.innerText = `You lose!! ${compChoice} beats Your ${userChoice}`;
        winnerDisplay.style.backgroundColor = "red";
        botScore++;
        botPoints.innerText = botScore;
    }
}
const drawGame = () =>{
    winnerDisplay.innerText = "Game was draw, Play again!";
    winnerDisplay.style.backgroundColor = "#081b31";

}

 const playGame = (userChoice) =>{
    console.log(`User choice was = ${userChoice}`);
    let compChoice = getCompChoice();
    console.log(`Computer choice was = ${compChoice}`);
    if( userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;

        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else if(userChoice === "scissors"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
        
    }
 }

 choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
 })