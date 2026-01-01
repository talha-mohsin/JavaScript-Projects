let diceImg = document.querySelector("img");
let player1CurrentScoreUI = document.querySelector(".player1CurrentScoreUI");
let player2CurrentScoreUI = document.querySelector(".player2CurrentScoreUI");
let player1TotalScoreUI = document.querySelector(".player1TotalScoreUI");
let player2TotalScoreUI = document.querySelector(".player2TotalScoreUI");
let playerOne = (document.querySelector(".player1UI").innerText = prompt(
  `What is your player 1 name?`
));
let playerTwo = (document.querySelector(".player2UI").innerText = prompt(
  `What is your player 2 name?`
));

let player1CurrentScore = 0;
let player2CurrentScore = 0;
let player1TotalScore = 0;
let player2TotalScore = 0;
let player1 = true;

function newGameHandler() {
  player1CurrentScore = 0;
  player2CurrentScore = 0;
  player1TotalScore = 0;
  player2TotalScore = 0;
  player1CurrentScoreUI.innerText = 0;
  player2CurrentScoreUI.innerText = 0;
  player1TotalScoreUI.innerText = 0;
  player2TotalScoreUI.innerText = 0;
}

function toggleHandler() {
  document.querySelector("#player1").classList.toggle("active");
  document.querySelector("#player2").classList.toggle("active");
}

function rollDiceHandler() {
  let dice = Math.ceil(Math.random() * 6);
  diceImg.src = `./assets/${dice}.webp`;

  if (dice == 1 && player1) {
    player1CurrentScore = 0;
    player1CurrentScoreUI.innerText = 0;
    player1 = false;
    toggleHandler();
    return;
  }

  if (player1) {
    player1CurrentScore += dice;
    player1CurrentScoreUI.innerText = player1CurrentScore;
  } else {
    if (dice == 1) {
      player2CurrentScore = 0;
      player2CurrentScoreUI.innerText = 0;
      player1 = true;
      toggleHandler();
      return;
    }
    player2CurrentScore += dice;
    player2CurrentScoreUI.innerText = player2CurrentScore;
  }
}

function holdDiceHandler() {
  if (player1) {
    player1TotalScore += player1CurrentScore;
    player1TotalScoreUI.innerText = player1TotalScore;
    player1CurrentScore = 0;
    player1CurrentScoreUI.innerText = 0;
    player1 = false;
    toggleHandler();
    if (player1TotalScoreUI.innerText >= 20) {
      alert(`Congratulations🎉, ${playerOne} is winner!`);
      newGameHandler();
    }
  } else {
    player2TotalScore += player2CurrentScore;
    player2TotalScoreUI.innerText = player2TotalScore;
    player2CurrentScore = 0;
    player2CurrentScoreUI.innerText = 0;
    player1 = true;
    toggleHandler();
    if (player2TotalScoreUI.innerText >= 20) {
      alert(`Congratulations🎉, ${playerTwo} is winner!`);
      newGameHandler();
    }
  }
}
