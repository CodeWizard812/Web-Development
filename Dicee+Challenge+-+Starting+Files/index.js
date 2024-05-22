var randomNumber1 = Math.floor((Math.random()*6) + 1);
var left = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", left);

var randomNumber2 = Math.floor((Math.random()*6) + 1);
var right = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", right);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}


