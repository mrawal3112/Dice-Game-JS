let currentScore0 = document.querySelector("#current--0").textContent;
let currentScore1 = document.querySelector("#current--1").textContent;
let totalScore0 = document.querySelector("#score--0").textContent;
let totalScore1 = document.querySelector("#score--1").textContent;
let diceImg = document.querySelector(".dice");
let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");
const rollDice = document.querySelector(".btn--roll");
const holdDice = document.querySelector(".btn--hold");
const name0 = document.querySelector("#name--0");
const name1 = document.querySelector("#name--1");
let n = 0;
//initializing the values

const initialFunction = function () {
  currentScore0 = 0;
  currentScore1 = 0;
  totalScore0 = 0;
  totalScore1 = 0;

  document.querySelector("#current--0").textContent = currentScore0;
  document.querySelector("#current--1").textContent = currentScore1;
  document.querySelector("#score--0").textContent = totalScore0;
  document.querySelector("#score--1").textContent = totalScore1;
};

document.querySelector(".btn--roll").addEventListener("click", function () {
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  diceImg.classList.remove("hidden");
  diceImg.src = `dice-${diceNumber}.png`;
  if (diceNumber !== 1) {
    if (n % 2 === 0) {
      currentScore0 += diceNumber;
      document.querySelector("#current--0").textContent = currentScore0;
    } else {
      currentScore1 += diceNumber;
      document.querySelector("#current--1").textContent = currentScore1;
    }
  } else {
    if (n % 2 == 0) {
      currentScore0 = 0;
      document.querySelector("#current--0").textContent = currentScore0;
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
    } else {
      currentScore1 = 0;
      document.querySelector("#current--1").textContent = currentScore1;
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
    }
    n++;
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (n % 2 === 0) {
    totalScore0 += currentScore0;
    document.querySelector("#score--0").textContent = totalScore0;
    currentScore0 = 0;
    document.querySelector("#current--0").textContent = currentScore0;
    diceImg.classList.add("hidden");
    if (totalScore0 >= 50) {
      player0.classList.add("player--winner");
      rollDice.disabled = true;
      holdDice.disabled = true;
    } else {
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
    }
  } else {
    totalScore1 += currentScore1;
    document.querySelector("#score--1").textContent = totalScore1;
    currentScore1 = 0;
    document.querySelector("#current--1").textContent = currentScore1;
    diceImg.classList.add("hidden");
    if (totalScore1 >= 50) {
      player1.classList.add("player--winner");
      rollDice.disabled = true;
      holdDice.disabled = true;
    } else {
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
    }
  }
  n++;
});

document.querySelector(".btn--new").addEventListener("click", function () {
  initialFunction();
  diceImg.classList.add("hidden");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player1.classList.remove("player--active");
  player0.classList.add("player--active");
  rollDice.disabled = false;
  holdDice.disabled = false;
});
