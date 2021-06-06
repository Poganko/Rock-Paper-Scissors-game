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

function playerPlay() {
  let playerSelection = prompt("Type rock, paper or scissors", "");
  if (
    playerSelection.toLowerCase() == "rock" ||
    playerSelection.toLowerCase() == "paper" ||
    playerSelection.toLowerCase() == "scissors"
  ) {
    console.log(playerSelection);
    return playerSelection;
  } else {
    alert("Wrong input! Enter again ");
    playerPlay();
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
        break;
      case "paper":
        result = "You win! Paper beats Rock";
        break;
      case "scissors":
        result = "You lose... Rock beats scissors";
        break;
      default:
        break;
    }
  } else if (currentCompSelection === "paper") {
    switch (currentPlayerSelection) {
      case "rock":
        result = "You lose... Paper beats rock";
        break;
      case "paper":
        result = "Paper vs paper. Tie!";
        break;
      case "scissors":
        result = "You win! Scissors beats paper";
        break;
      default:
        break;
    }
  } else {
    switch (currentPlayerSelection) {
      case "rock":
        result = "You win! Rock beats scissors";
        break;
      case "paper":
        result = "You lose... Scissors beats paper";
        break;
      case "scissors":
        result = "Scissors vs scissors. Tie!";
        break;
      default:
        break;
    }
  }
  return result;
}

function game() {
  let userScore = 0;
  let compScore = 0;
  let ties = 0;

  let win = "win";
  let lose = "lose";

  for (let i = 0; i < 5; i++) {
    let roundResult = playRound(playerPlay(), computerPlay()).toLowerCase();

    if (roundResult.includes(win)) {
      userScore += 1;
      console.log("You win!");
    } else if (roundResult.includes(lose)) {
      compScore += 1;
      console.log("You lose (");
    } else {
      ties += 1;
      console.log("It's a tie!");
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

// const computerSelection = computerPlay();
// const playerSelection = "rock";

game();
