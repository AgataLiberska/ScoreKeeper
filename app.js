//player one
const playerOneButton = document.querySelector("#playerOnePoint");
const playerOneScore = document.querySelector("#playerOneScore");
let score1 = 0;
//player two
const playerTwoButton = document.querySelector("#playerTwoPoint");
const playerTwoScore = document.querySelector("#playerTwoScore");
let score2 = 0;
//reset button
const resetButton = document.querySelector('#reset');
//winning score
const winningScoreSelect = document.querySelector('#targetScore');
let winningScore = 3;
let isGameOver = false;

playerOneButton.addEventListener('click', function() {
    if (!isGameOver) {
        score1 ++;
        if (score1 === winningScore) {
            isGameOver = true;
            playerOneScore.classList.add('has-text-success');
            playerTwoScore.classList.add('has-text-danger');
        }
        playerOneScore.textContent = score1;
    }


});

playerTwoButton.addEventListener('click', function() {
    if (!isGameOver) {
        score2 ++;
        if (score2 === winningScore) {
            isGameOver = true;
            playerTwoScore.classList.add('has-text-success');
            playerOneScore.classList.add('has-text-danger');
        }
        playerTwoScore.textContent = score2;
    }

});


winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    score1 =0;
    score2 =0;
    playerOneScore.textContent = score1;
    playerTwoScore.textContent = score2;
    playerOneScore.classList.remove('has-text-success', 'has-text-danger');
    playerTwoScore.classList.remove('has-text-success', 'has-text-danger');
}