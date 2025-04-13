const inputBox = document.getElementById("num-input");
const randomNum = Math.floor(Math.random() * 21);
const showResult = document.getElementById("Result");
const correctGuess = document.getElementById("correct-guess");
const body = document.getElementById("body");

function checkGuess(){
    const userEnteredNum = inputBox.value;
    if(userEnteredNum < randomNum){
        showResult.innerHTML = `<h2>Too Low</h2>`;
    }
    else if(userEnteredNum > randomNum){
        showResult.innerHTML = `<h2>Too High</h2>`;
    }
    else{
        showResult.innerHTML = `<h2>Correct Guess</h2>`;
        correctGuess.innerHTML = `<h3>${randomNum}</h3>`
        body.style.backgroundColor = `rgb(108, 208, 108)`;
    }
}

function playAgain(){
    window.location.reload();
}