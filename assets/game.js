var getRandomValue = function(minimum, maximum){
    var randomNumber = Math.floor(Math.random() * (maximum - minimum));
    return randomNumber;
}

var bluesValue = 0;
var greensValue = 0;
var redsValue = 0;
var yellowsValue = 0;

var yourScore = 0;
var targetScore = 0;

var winScore = 0;
var loseScore = 0;

var startGame = function(){
    yourScore = 0; //reset "your score" section's value that player can begin from zero

    targetScore = getRandomValue(20, 130);
    
    bluesValue = getRandomValue(1, 16);
    greensValue = getRandomValue(1, 16);
    redsValue = getRandomValue(1, 16);
    yellowsValue = getRandomValue(1, 16);

    document.querySelector("#yourScore").innerText = yourScore;
    document.querySelector("#targetScore").innerText = targetScore;
}

var compareValues = function(){
    if(yourScore == targetScore){
        alert("Congrats, you won!");
        winScore++;
        document.querySelector(".win-score").innerText = winScore;
        startGame()
    }else if(yourScore > targetScore){
        alert("Sorry, you lost!");
        loseScore++;
        document.querySelector(".lose-score").innerText = loseScore;
        startGame()
    }
}


var getValues = function(clickedCrystal){
    yourScore += clickedCrystal;
    document.querySelector("#yourScore").innerText = yourScore;

    compareValues();
}

startGame();
document.querySelector("#blue").onclick = function(){
    getValues(bluesValue);
}

document.querySelector("#green").onclick = function(){
    getValues(greensValue);
}

document.querySelector("#red").onclick = function(){
    getValues(redsValue);
}

document.querySelector("#yellow").onclick = function(){
    getValues(yellowsValue);
}