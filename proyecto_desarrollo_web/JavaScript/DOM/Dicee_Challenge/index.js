var randomNumber1 = Math.floor(Math.random() * 6) + 1;// Player 1

var randomImgDice = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImgSource = "images/" + randomImgDice; // images/dice1.png - 6

document.querySelector(".img1").setAttribute("src", randomImgSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Player 2

var randomImgDice = "dice" + randomNumber2 + ".png";

var randomImgSource = "images/" + randomImgDice;

document.querySelector(".img2").setAttribute("src", randomImgSource);

if (randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}

if (randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}

if (randomNumber1 === randomNumber2)
{
  document.querySelector("h1").innerHTML = "Draw";
}
