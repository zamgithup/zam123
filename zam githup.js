let refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", function() {
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage = "dice" + randomNumber1 + ".png"; 

let randomImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let image2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", image2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Win...!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Win...!";
}
else {
  document.querySelector("h1").innerHTML = "Draw...!";
}
});
 
