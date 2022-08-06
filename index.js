const colors = ["blue", "green", "pink", "#DD33FF", "rgb(153, 0, 153)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //GET RANDOM NUMBER BTW 0-3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors(randomNumber);
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}