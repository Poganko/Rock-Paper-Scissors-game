function computerPlay() {
  let result = "";
  let randomOfThree = Math.floor(Math.random() * 3);
  switch (randomOfThree) {
    case 0:
      result = "rock";
      break;
    case 1:
      result = "paper";
      break;
    case 2:
      result = "scissors";
      break;
    default:
      break;
  }
  return result;
}

function cancelGame() {
  console.log("Game canceled");
  throw new Error("Game Over");
}

function playerPlay() {
  while (true) {
    let playerSelection = prompt("Type rock, paper or scissors.");
    if (!playerSelection) {
      cancelGame();
    } else if (
      playerSelection.toLowerCase() == "rock" ||
      playerSelection.toLowerCase() == "paper" ||
      playerSelection.toLowerCase() == "scissors"
    ) {
      return playerSelection;
    } else {
      alert("You typed wrong word, try again.");
    }
  }
}

function playRound(playerSelection, computerSelection) {
  let currentPlayerSelection = playerSelection;
  let currentCompSelection = computerSelection;
  let result = "";
  if (currentCompSelection === "rock") {
    switch (currentPlayerSelection) {
      case "rock":
        result = "Rock vs rock. Tie!";
        console.log(result);
        break;
      case "paper":
        result = "You win! Paper beats Rock";
        console.log(result);
        break;
      case "scissors":
        result = "You lose... Rock beats scissors";
        console.log(result);
        break;
      default:
        break;
    }
  } else if (currentCompSelection === "paper") {
    switch (currentPlayerSelection) {
      case "rock":
        result = "You lose... Paper beats rock";
        console.log(result);
        break;
      case "paper":
        result = "Paper vs paper. Tie!";
        console.log(result);
        break;
      case "scissors":
        result = "You win! Scissors beats paper";
        console.log(result);
        break;
      default:
        break;
    }
  } else {
    switch (currentPlayerSelection) {
      case "rock":
        result = "You win! Rock beats scissors";
        console.log(result);
        break;
      case "paper":
        result = "You lose... Scissors beats paper";
        console.log(result);
        break;
      case "scissors":
        result = "Scissors vs scissors. Tie!";
        console.log(result);
        break;
      default:
        break;
    }
  }
  return result;
}

function game() {
  for (let i = 0; i < 5; i++) {
    let roundResult = playRound(playerPlay(), computerPlay()).toLowerCase();

    if (roundResult.includes("win")) {
      userScore += 1;
    } else if (roundResult.includes("lose")) {
      compScore += 1;
    } else {
      ties += 1;
    }
  }

  if (userScore > compScore) {
    console.log(
      `You win! Your score: ${userScore}, comp score: ${compScore}, ties: ${ties}`
    );
  } else if (userScore < compScore) {
    console.log(
      `You lose... Your score: ${userScore}, comp score: ${compScore}, ties: ${ties}`
    );
  } else {
    console.log(
      `Tie! Your score: ${userScore}, comp score: ${compScore}, ties: ${ties}`
    );
  }
}

let userScore = 0;
let compScore = 0;
let ties = 0;

game();
