// Variables declaration
const rollDice = document.getElementById("roll-dice");
let dice = document.getElementById("image-dice");
let currentScore1 = Number(document.getElementById("current-score-1").textContent);
let score1 = Number(document.getElementById('score-1').textContent);
let currentScore2 = Number(document.getElementById('current-score-2').textContent);
let score2 = Number(document.getElementById('score-2').textContent);
const hold = document.getElementById('hold');
const newGame = document.getElementById('new-game');
const dot1 = document.getElementById('dot-1');
const dot2 = document.getElementById('dot-2');
const gradient = document.getElementById('gradient');
let firstPlayer = document.getElementById('player-1');
let secondPlayer = document.getElementById('player-2');
let activePlayer = true;
let randomDice

// Starting a new game
newGame.addEventListener("click", () => {
    //dot display
    dot1.style.display = "block"
    dot2.style.display = "none"

    //player 1
    currentScore1 = 0
    currentScore1 = document.getElementById("current-score-1").textContent = currentScore1
    score1 = 0
    score1 = document.getElementById("score-1").textContent = score1

    //player 2
    currentScore2 = 0
    currentScore2 = document.getElementById("current-score-2").textContent = currentScore2
    score2 = 0
    score2= document.getElementById("score-2").textContent = score2

    dice.style.display = "none"
});

// Hold score
hold.addEventListener("click", () => {
if(activePlayer) {
    score1 = currentScore1 + score1
    score1 = document.getElementById("score-1").textContent = score1
    currentScore1 = 0
    currentScore1 = document.getElementById("current-score-1").textContent = currentScore1
} else {
    score2 = currentScore2 + score2
    score2 = document.getElementById("score-2").textContent = score2
    currentScore2 = 0
    currentScore2 = document.getElementById("current-score-2").textContent = currentScore2
}
// Hide dice
dice.style.display = "none"
// Dice not counting
randomDice = 0
// Player change
activePlayer = !activePlayer
// Player 1 turn, else player 
if (activePlayer) {
    player1()
} else {
    player2()
}
// Winner
if (score1 >= 100){
    firstPlayer.innerHTML = "WINNER"
} else if (score2 >= 100) {
    secondPlayer.innerHTML = "WINNER"
}
});

// Roll dice
rollDice.addEventListener("click", () => {
    // dice display
    dice.style.display = "block"

    // Random number between 1 and 6
    randomDice = Math.floor(Math.random() *6) + 1
    // display result
    dice.src = "images/Dé " + randomDice + ".png"

    // Player 1 turn, else player 2
    if(activePlayer) {
        player1()
    } else {
        player2()
    }
});
// Player 1
function player1() {
    // Display or hide dot when player's turn
    dot1.style.display = "block"
    dot2.style.display = "none"
    gradient.style.background = "linear-gradient(to right,#FFE5E5 50%, rgb(255,255,255) 50%)"        
     // if dice = 1 change player's turn, else add to current
    if (randomDice !== 1) {
        currentScore1 = currentScore1 + randomDice
        currentScore1 = document.getElementById("current-score-1").textContent = currentScore1
    } else {
        currentScore1 = 0
        currentScore1 = document.getElementById("current-score-1").textContent = currentScore1
        activePlayer = false
    }
};
// Player 2
function player2() { 
    dot1.style.display = "none"
    dot2.style.display = "block"
    gradient.style.background = "linear-gradient(to left,#FFE5E5 50%, rgb(255,255,255) 50%)"
    if (randomDice !== 1) {
        currentScore2 = currentScore2 + randomDice
        currentScore2 = document.getElementById("current-score-2").textContent = currentScore2
    } else {
        currentScore2 = 0            
        currentScore2 = document.getElementById("current-score-2").textContent = currentScore2
        activePlayer = true
    }  
};



