const inputBox = document.getElementById("num-input");
const randomNum = Math.floor(Math.random() * 21);
const showResult = document.getElementById("Result");
const correctGuess = document.getElementById("correct-guess");
const body = document.getElementById("body");
const displayScore = document.getElementById("score");
const displayhighScore = document.getElementById("highscore");
let score = 20;
let highscore = 0;

function checkGuess(){
    const userEnteredNum = inputBox.value;
    if(userEnteredNum < randomNum){
        showResult.innerHTML = `<h4>📉 Too Low</h4>`;
        score--;
        displayScore.innerHTML = `${score}`;
    }
    else if(userEnteredNum > randomNum){
        showResult.innerHTML = `<h4>📈 Too High</h4>`;
        score--;
        displayScore.innerHTML = `${score}`;
    }
    else{
        showResult.innerHTML = `<h4>🥳 Correct Guess</h4>`;
        correctGuess.innerHTML = `<h3>${randomNum}</h3>`
        body.style.backgroundColor = `rgb(108, 208, 108)`;
        if(score>highscore){
            highscore = score;
            displayhighScore.innerHTML = `${highscore}`
        }
        displayScore.innerHTML = `${score}`;
    }
}

function playAgain(){
    window.location.reload();
    if(highscore>score){
        displayhighScore = `${highscore}`;
    }
}