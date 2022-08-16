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
let pcchoice;
let btnpc = document.querySelector("#btnpc");

playerScore === 10 || computerScore === 10
  ? (roundbool = true)
  : (roundbool = false);

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
  // returns the classname of whaterver u clicked if only ins in the btn div
  playerSelection.innerHTML = `Your choice:${e.target.className}`;
};
// click events
rock.addEventListener("click", whatIsClicked);
paper.addEventListener("click", whatIsClicked);
scissors.addEventListener("click", whatIsClicked);


// if user clicks outside of a button this should fire off
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn") && roundbool === false) {
    playerSelection.innerHTML = `Click a button!`;
    pcSelection.innerHTML = `Go on and select!`;
    selectText.innerHTML = `Scared?`;
    vs.classList.add("vsStyle");
    vs.classList.remove("textStyle");
    vs.textContent = "Vs";
  }
});

// this should check who wins
const WinOrLoose = () => {
  pscore.innerHTML = playerScore;
  cscore.innerHTML = computerScore;
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
  }
};

document.addEventListener("click", WinOrLoose);



const computerCard = () => {
  computer = Math.floor(Math.random() * 3) + 1;
  let compArray = [
    `<img src="rock.png" alt="" />`,
    `<img src="paper.png" alt="" />`,
    `<img src="sci.png" alt="" />`,
  ];

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
rock.addEventListener("click", computerCard);
paper.addEventListener("click", computerCard);
scissors.addEventListener("click", computerCard);
// btnBox.addEventListener("click", computerCard);

const rpsLogic = (e) => {
  playerScore === 10 || computerScore === 10
    ? (roundbool = true)
    : (roundbool = false);
  console.log(roundbool);
  let playerName = ["Player One", "Computer"];
  
  
if (playerScore!==10 ||computerScore!==10) {
  if (
    (player === 1 && computer === 1) ||
    (player === 2 && computer === 2) ||
    (player === 3 && computer === 3)
  ) {
    vs.innerHTML = `it's a tie`;
  } else if (e.target.classList.contains("btn")) {
    playerScore = playerScore;
    computerScore = computerScore;
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
    vs.classList.remove("vsStyle");
  counter++;
  console.log(counter);

}
  }
  console.log(`counter ${counter}`);

// rock.addEventListener("click", rpsLogic);
// paper.addEventListener("click", rpsLogic);
// scissors.addEventListener("click", rpsLogic);
btnBox.addEventListener('click',rpsLogic);
 
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
  }else if(e.target.classList.contains('btn')){
       paper.classList.remove("hide");
       scissors.classList.remove("hide");
       rock.classList.remove("hide");
  }else {
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
//   if(roundbool===false && rpsLogic){


//   }
// }
// const roundCounter = () => {
//   let round = 1;
//   if (roundbool === true) {
//     round++;
//     console.log(`round ${round}`);
//   }
//   startRound.innerHTML = `Round ${round}`;
// };
// btnBox.addEventListener("click", roundCounter);



// const startOver = () => {
//   if(roundbool===true){
//     btnBox.textContent='';
//     // btnpc.textContent='';
//     let arr = ["Rock", "Paper", "Scissors"];
//     let src = ["rock.png", "paper.png", "sci.png"];
//     for (let i = 0; i < arr.length; i++) {
//       let img = document.createElement("img");
//       img.classList.add(arr[i]);
//       img.setAttribute("src", src[i]);
//       btnBox.append(img);
//       console.log(img);
//     }
//       playerName.innerHTML='Player One';
//       pcName.innerHTML='Computer';
//        playerSelection.innerHTML = `let's go again`;

//   }
//   else{
//     pcSelection.innerHTML=`A reset?🤣`

//   }
//   playerScore = 0;
//   computerScore = 0;
//    pcSelection.innerHTML = `You really wanna do this again?`;

//   selectText.innerHTML = ``;
//   vs.innerHTML = `VS`;
//   console.log(`reset is pressed`);

// };

// reset.addEventListener("click", startOver);
// // reset.addEventListener('click',whatIsClicked);
// // reset.addEventListener("click", computerCard);

// // reset.addEventListener('click',showfunc);
// // reset.addEventListener("click", startOver);
