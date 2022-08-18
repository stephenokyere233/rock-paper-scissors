let rock = document.querySelector(".Rock");
let paper = document.querySelector(".Paper");
let scissors = document.querySelector(".Scissors");
let playerSelection = document.querySelector("#player-selection");
let btnBox = document.querySelector(".btn");
let pcSelection = document.querySelector("#pc-selection");
let selectText = document.querySelector("#selection-text");
let player = 0;
let computer = 0;
let vs = document.querySelector("#vs");
let pScore = document.querySelector("#player-score");
let cScore = document.querySelector("#pc-score");
let playerName = document.querySelector(".player-name");
let pcName = document.querySelector(".pc-name");
let startRound = document.querySelector(".round");
// let playerScreen = document.querySelector(".player");
let pcScreen = document.querySelector(".pc");
let reset = document.querySelector(".reset");
let roundBoolean;
let computerScore = 0;
let playerScore = 0;
let counter = 0;
let pcChoice;
let btnpc = document.querySelector("#btnpc");
// let checkMe;
// if(playerScore){

// }

playerScore === 10 || computerScore === 10
  ? (roundBoolean = true)
  : (roundBoolean = false);

//this function shows what you the player chose
const whatIsClicked = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("Rock")) {
    player = 1;
  } else if (e.target.classList.contains("Paper")) {
    player = 2;
  } else if (e.target.classList.contains("Scissors")) {
    player = 3;
  }
  // returns the classname of whatever u clicked if only it's in the btn div
  playerSelection.innerHTML = `Your choice:${e.target.className}`;
};
// click events
rock.addEventListener("click", whatIsClicked);
paper.addEventListener("click", whatIsClicked);
scissors.addEventListener("click", whatIsClicked);

// if user clicks outside a button this should fire off
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn") && roundBoolean === false) {
    playerSelection.innerHTML = `Click a button!`;
    pcSelection.innerHTML = `Go on and select!`;
    selectText.innerHTML = `Scared?`;
    vs.classList.add("vsStyle");
    vs.classList.remove("textStyle");
    vs.textContent = "Vs";
  }
});
const startOver = () => {
  console.log("reset pressed");
  playerName.innerHTML = "Player One";
  pcName.innerHTML = "Computer";

  if (playerScore < 10 && computerScore < 10) {
    playerScore = 0;
    computerScore = 0;
    pcSelection.innerHTML = `A reset?🤣`;
    selectText.innerHTML = "";
    playerSelection.innerHTML = `Let's start over...`;
    console.log("first condition");
  } else if (
    (playerScore === 10 && computerScore < 10) ||
    (playerScore < 10 && computerScore === 10)
  ) {
    // rock.addEventListener("click", whatIsClicked);
    // paper.addEventListener("click", whatIsClicked);
    // scissors.addEventListener("click", whatIsClicked);
    // document.addEventListener("click", WinOrLoose);
    // rock.addEventListener("click", computerCard);
    // paper.addEventListener("click", computerCard);
    // scissors.addEventListener("click", computerCard);
    // rock.addEventListener("click", showfunc);
    // paper.addEventListener("click", showfunc);
    // scissors.addEventListener("click", showfunc);
    // btnBox.addEventListener("click", rpsLogic);

    btnBox.textContent = "";

    playerSelection.innerHTML = "One more time!";
    pcSelection.innerHTML = `Okay I can beat you once more`;

    let arr = ["Rock", "Paper", "Scissors"];
    let src = ["rock.png", "paper.png", "sci.png"];
    let img;
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < arr.length; i++) {
      img = document.createElement("img");
      img.classList.add(arr[i]);
      img.setAttribute("src", src[i]);

      console.log(img);
      btnBox.appendChild(img);
      //  btnBox.innerHTML=img;
    }
    // btnBox = "";
  }
  // let rock1=document.querySelector('.rock1');
  //  let paper1=document.querySelector('.paper1');
  //   let sci1=document.querySelector('.scissors1');
  //   rock1.addEventListener('click',whatIsClicked);
  //  paper1.addEventListener("click", whatIsClicked);
  //   sci1.addEventListener('click',whatIsClicked);
  // rock1.addEventListener("click", computerCard);
  // paper1.addEventListener("click", computerCard);
  // sci1.addEventListener("click", computerCard);
  btnBox.addEventListener("click", whatIsClicked);
  // rock.addEventListener("click", computerCard);
  // paper.addEventListener("click", computerCard);
  // scissors.addEventListener("click", computerCard);
   pcSelection.innerHTML = 'You wanna go again?';
  btnBox.addEventListener("click", computerCard);
  btnBox.addEventListener('click',showfunc);
  // pcSelection.innerHTML = `Okay I can beat you once more`;
  // selectText.innerHTML='abs';
  

  // rock1.addEventListener('click',()=>{
  //   console.log('rock 1 clicked');
  // });

  console.log("second condition");
};

reset.addEventListener("click", startOver);
// reset.addEventListener('click',computerCard);

// this should check who wins
const WinOrLoose = () => {
  pScore.innerHTML = playerScore;
  cScore.innerHTML = computerScore;
  if (playerScore === 10) {
    playerName.textContent = "*Winner!";
    pcName.textContent = "*Loser!";
    btnBox.innerHTML = "Someone brought their winning shoes";
    pcSelection.innerHTML = "Where's your luck?";
    playerSelection.innerHTML = "";
    selectText.innerHTML = "";
    vs.innerHTML = "<h2>Game Over!</h2>";
  } else if (computerScore === 10) {
    pcName.textContent = "*Winner!";
    playerName.textContent = "*Loser!";
    pcSelection.innerHTML = "Someone brought their winning shoes";
    btnBox.innerHTML = "Where's your luck?";
    playerSelection.innerHTML = "";
    selectText.innerHTML = "";
  }
};

document.addEventListener("click", WinOrLoose);

// this should assign a random choice for the computer when user selects a choice
const computerCard = () => {
  computer = Math.floor(Math.random() * 3) + 1;
  let compArray = [
    `<img src="rock.png" alt="" />`,
    `<img src="paper.png" alt="" />`,
    `<img src="sci.png" alt="" />`,
  ];

  if (computer === 1) {
    pcChoice = compArray[0];
    selectText.innerHTML = `Computer Choice:Rock`;
  } else if (computer === 2) {
    pcChoice = compArray[1];
    selectText.innerHTML = `Computer Choice:Paper`;
  } else if (computer === 3) {
    pcChoice = compArray[2];
    selectText.innerHTML = `Computer Choice:Scissors`;
  }
  pcSelection.innerHTML = pcChoice;
};
rock.addEventListener("click", computerCard);
paper.addEventListener("click", computerCard);
scissors.addEventListener("click", computerCard);
// btnBox.addEventListener("click", computerCard);
// let tieCount=0;

const rpsLogic = (e) => {
  let playerName = ["Player One", "Computer"];

  if (playerScore !== 10 || computerScore !== 10) {
    if (
      (player === 1 && computer === 1) ||
      (player === 2 && computer === 2) ||
      (player === 3 && computer === 3)
    ) {
      vs.innerHTML = `it's a tie`;
      counter++;

      // tieCount++;
    } else if (e.target.classList.contains("btn")) {
      playerScore = playerScore;
      computerScore = computerScore;
    } else if (player === 2 && computer === 1 && roundBoolean === false) {
      vs.innerHTML = `${playerName[0]} wins!`;
      playerScore++;
      counter++;
    } else if (player === 1 && computer === 2 && roundBoolean === false) {
      vs.innerHTML = `${playerName[1]} wins!`;
      computerScore++;
      counter++;
    } else if (player === 3 && computer === 1 && roundBoolean === false) {
      vs.innerHTML = ` ${playerName[1]} wins!`;
      computerScore++;
      counter++;
    } else if (player === 1 && computer === 3 && roundBoolean === false) {
      vs.innerHTML = ` ${playerName[0]} wins!`;
      playerScore++;
      counter++;
    } else if (player === 2 && computer === 3 && roundBoolean === false) {
      vs.innerHTML = ` ${playerName[1]} wins!`;
      computerScore++;
      counter++;
    } else if (player === 3 && computer === 2 && roundBoolean === false) {
      vs.innerHTML = ` ${playerName[0]} wins!`;
      playerScore++;
      counter++;
    }

    vs.classList.add("textStyle");
    vs.classList.remove("vsStyle");

    console.log(`counter ${counter}`);
    // console.log(`tie counter ${tieCount}`);
  }
};

// rock.addEventListener("click", rpsLogic);
// paper.addEventListener("click", rpsLogic);
// scissors.addEventListener("click", rpsLogic);
btnBox.addEventListener("click", rpsLogic);

const showfunc = (e) => {
  if (player === 1) {
    paper.classList.add("hide");
    scissors.classList.add("hide");
  } else if (player === 2) {
    rock.classList.add("hide");
    scissors.classList.add("hide");
  } else if (player === 3) {
    paper.classList.add("hide");
    rock.classList.add("hide");
  } else if (e.target.classList.contains("btn")) {
    paper.classList.remove("hide");
    scissors.classList.remove("hide");
    rock.classList.remove("hide");
  } else {
    paper.classList.remove("hide");
    scissors.classList.remove("hide");
    rock.classList.remove("hide");
  }

  setTimeout(() => {
    paper.classList.remove("hide");
    scissors.classList.remove("hide");
    rock.classList.remove("hide");
  }, 1500);
};

rock.addEventListener("click", showfunc);
paper.addEventListener("click", showfunc);
scissors.addEventListener("click", showfunc);
// btnBox.addEventListener("click", showfunc);

// const calcScore=()=>{
//   if(roundBoolean===false && rpsLogic){

//   }
// }
const roundCounter = (e) => {
  let round = 1;
  if (roundBoolean === true && e.target.classList.contains("reset")) {
    round++;
    console.log(`round ${round}`);
  }

  startRound.innerHTML = `Round ${round}`;
};
btnBox.addEventListener("click", roundCounter);
reset.addEventListener("click", roundCounter);

// btnBox.addEventListener('click',startOver)
// reset.addEventListener('click',whatIsClicked);
// reset.addEventListener("click", computerCard);

// reset.addEventListener('click',showfunc);
// reset.addEventListener("click", startOver);
