let userScore = 0
let compScore = 0

const resetBtn = document.querySelector("#reset");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const msg = document.querySelector("#msg");

const choises = document.querySelectorAll(".choise");

const genCompChoise = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again. ";
    msg.style.backgroundColor = "#333";
}

const resetBtnDisplay = () => {
    if(userScore === 0 && compScore === 0){
        resetBtn.style.display = "none";
    } else {
        resetBtn.style.display = "block";
    }
}

const pointsColorChosser = () => {
    if(userScore === compScore){
        userScorePara.style.color = "#333";
        compScorePara.style.color = "#333";
    } else if(userScore > compScore){
        userScorePara.style.color = "green";
        compScorePara.style.color = "red";
    } else {
        userScorePara.style.color = "red";
        compScorePara.style.color = "green";
    }
}

const showWinner = (userWin,userChoise,compChoise) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! your ${userChoise} beats ${compChoise}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoise} beats Your ${userChoise}`;
        msg.style.backgroundColor = "red";
    }
    pointsColorChosser();
    resetBtnDisplay();
}

// Secound step
const playGame = (userChoise) => {
    const compChoise = genCompChoise();
    let userWin = true;

    if(userChoise === compChoise){
        drawGame();
        return;
    } else {
        if(userChoise === "rock"){
            // paper, scissors
            userWin = compChoise === "paper" ? false : true;
        } else if(userChoise === "paper"){
            // rock, scissor
            userWin = compChoise === "rock" ? true : false;
        } else {
            // rock, paper
            userWin = compChoise === "rock" ? false : true;
        }
    }
    showWinner(userWin,userChoise,compChoise);
}

const resetGame = () => {
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
    msg.style.backgroundColor = "#007bff";
    msg.color = "#fff";
    msg.innerText = "Play your Move";
    userScore = 0;
    compScore = 0;
    userScorePara.style.color = "#333";
    compScorePara.style.color = "#333";
    resetBtnDisplay();
}

// First Step
choises.forEach((choise) => {
    choise.addEventListener("click", () => {
        const userChoise = choise.getAttribute("id");
        playGame(userChoise);
    })
})

resetBtnDisplay();

resetBtn.addEventListener("click", () => {
    resetGame();
});