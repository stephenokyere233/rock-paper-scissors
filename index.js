// let rock = document.querySelector(".Rock");
// let paper = document.querySelector(".Paper");
// let scissors = document.querySelector(".Scissors");
let playerSelection = document.querySelector("#player-selection");
let btnBox = document.querySelector(".btn");
let pcSelection = document.querySelector("#pc-selection");
let selectText = document.querySelector("#selection-text");
let player = 0;
let computer = 0;
let vs = document.querySelector("#vs");
let pscore = document.querySelector("#player-score");
let cscore = document.querySelector("#pc-score");
let playerName = document.querySelector(".player-name");
let pcName = document.querySelector(".pc-name");
let startRound = document.querySelector(".round");
let playerScreen = document.querySelector(".player");
let pcScreen = document.querySelector(".pc");
let reset = document.querySelector(".reset");
let roundbool;
let computerScore = 0;
let playerScore = 0;
let counter = 0;

 playerScore === 10 || computerScore === 10
   ? (roundbool = true)
   : (roundbool = false);

const whatIsClicked = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("Rock")) {
    player = 1;
  } else if (e.target.classList.contains("Paper")) {
    player = 2;
  } else if (e.target.classList.contains("Scissors")) {
    player = 3;
  }
  playerSelection.innerHTML = `Your choice:${e.target.className}`;
};
btnBox.addEventListener("click", whatIsClicked);

document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("btn") &&
    (playerScore !== 10 || computerScore !== 10)
  ) {
    playerSelection.innerHTML = `Close buh that's not a button`;
    pcSelection.innerHTML = `Go on and select!`;
    selectText.innerHTML = `Scared?`;
    vs.classList.add("vsStyle");
    vs.classList.remove("textStyle");
    vs.textContent = "Vs";
  }
});


const count = () => {
  pscore.innerHTML = playerScore;
  cscore.innerHTML = computerScore;
  console.log(`player ${playerScore} computer ${computerScore}`);
  if (playerScore === 10 && computerScore !== 10) {
    playerName.textContent = "*Winner!";
    pcName.textContent = "*Loser!";
    playerScreen.innerHTML = "Someone brought their winning shoes";
    pcScreen.innerHTML = "Where's your luck?";
    playerSelection.innerHTML = "";
    selectText.innerHTML = "";
    vs.innerHTML = "<h2>Game Over!</h2>";
  } else if (computerScore === 10 && playerScore !== 10) {
    pcName.textContent = "*Winner!";
    playerName.textContent = "*Loser!";
    pcScreen.innerHTML = "Someone brought their winning shoes";
    playerScreen.innerHTML = "Where's your luck?";
    playerSelection.innerHTML = "";
    selectText.innerHTML = "";
    vs.innerHTML = "<h2>Game Over!</h2>";
  }
};

document.addEventListener("click", count);

const roundCounter = () => {
  let round = 1;
  if (roundbool===true) {
    round++;
    console.log(`round ${round}`);
  }
  startRound.innerHTML = `Round ${round}`;
};
btnBox.addEventListener("click", roundCounter);

const computerCard = () => {
  computer = Math.floor(Math.random() * 3) + 1;
  let compArray = [
    `<img src="rock.png" alt="" />`,
    `<img src="paper.png" alt="" />`,
    `<img src="sci.png" alt="" />`,
  ];

  let pcchoice;
  if (computer === 1) {
    pcchoice = compArray[0];
    selectText.innerHTML = `Computer Choice:Rock`;
  } else if (computer === 2) {
    pcchoice = compArray[1];
    selectText.innerHTML = `Computer Choice:Paper`;
  } else if (computer === 3) {
    pcchoice = compArray[2];
    selectText.innerHTML = `Computer Choice:Scissors`;
  }
  pcSelection.innerHTML = pcchoice;
};
btnBox.addEventListener("click", computerCard);

const rpsLogic = () => {
  playerScore === 10 || computerScore === 10
    ? (roundbool = true)
    : (roundbool = false);
  console.log(roundbool);
  let playerName = ["Player One", "Computer"];
  if (playerScore !== 10 || computerScore !== 10) {
    if (
      (player === 1 && computer === 1) ||
      (player === 2 && computer === 2) ||
      (player === 3 && computer === 3)
    ) {
      vs.innerHTML = `it's a tie`;
    } else if (player === 2 && computer === 1 && roundbool === false) {
      vs.innerHTML = `${playerName[0]} wins!`;
      playerScore++;
    } else if (player === 1 && computer === 2 && roundbool === false) {
      vs.innerHTML = `${playerName[1]} wins!`;
      computerScore++;
    } else if (player === 3 && computer === 1 && roundbool === false) {
      vs.innerHTML = ` ${playerName[1]} wins!`;
      computerScore++;
    } else if (player === 1 && computer === 3 && roundbool === false) {
      vs.innerHTML = ` ${playerName[0]} wins!`;
      playerScore++;
    } else if (player === 2 && computer === 3 && roundbool === false) {
      vs.innerHTML = ` ${playerName[1]} wins!`;
      computerScore++;
    } else if (player === 3 && computer === 2 && roundbool === false) {
      vs.innerHTML = ` ${playerName[0]} wins!`;
      playerScore++;
    }
    vs.classList.add("textStyle");
    counter++;
    console.log(counter);
    vs.classList.remove("vsStyle");
  }
  console.log(`counter ${counter}`);
};
btnBox.addEventListener("click", rpsLogic);

const startOver = () => {
  btnBox.innerHTML = `<img class="Rock" src="rock.png" alt="" /><img class="Paper" src="paper.png" alt="" /> <img class="Scissors" src="sci.png" alt="" />`;
  playerSelection.innerHTML=`let's go again`;
  playerScore=0;
  computerScore=0;
  pcSelection.innerHTML=`You really wanna do this again?`;
  selectText.innerHTML=``;
  vs.innerHTML=`VS`
  console.log(`reset is pressed`);
};
reset.addEventListener("click", startOver);


