
//IMAGE LEFT
var randomNumber1 =  Math.floor(Math.random()*6) +1; //gives a random number which we can use to select a random dice image

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //gives a random dice image dice1.png - dice6.png

var randomDiceSource1 = "images/" + randomDiceImage1; //create a new source for the img because the dice images are inside a folder calles images

var image1 = document.querySelectorAll("img")[0]; //changes the source of the image
image1.setAttribute("src", randomDiceSource1);


//IMAGE RIGHT
var randomNumber2 =  Math.floor(Math.random()*6) +1;

var randomDiceSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceSource2);



if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";

} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";

} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
