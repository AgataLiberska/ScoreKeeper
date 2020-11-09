//player one
const playerOnePoint = document.querySelector("#playerOnePoint");
const playerOneScore = document.querySelector("#playerOneScore");
let score1 = 0;
//player two
const playerTwoPoint = document.querySelector("#playerTwoPoint");
const playerTwoScore = document.querySelector("#playerTwoScore");
let score2 = 0;
//reset button
const reset = document.querySelector('#reset');

playerOnePoint.addEventListener('click', function() {
    score1 ++;
    playerOneScore.innerHTML = score1;
})

playerTwoPoint.addEventListener('click', function() {
    score2 ++;
    playerTwoScore.innerHTML = score2;
})

reset.addEventListener('click', function() {
    score1 =0;
    playerOneScore.innerHTML = score1;
    score2 =0;
    playerTwoScore.innerHTML = score2;
})