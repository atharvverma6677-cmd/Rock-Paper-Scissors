let userScore = 0;
let computerScore = 0;

function play(userChoice) {

  document.getElementById("clickSound").play();

  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").innerText = "Your Choice: " + userChoice;
  document.getElementById("computer-choice").innerText = "Computer: " + computerChoice;

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a Draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win! 🎉";
    userScore++;
    document.getElementById("winSound").play();
  } else {
    result = "Computer Wins! 🤖";
    computerScore++;
    document.getElementById("loseSound").play();
  }

  document.getElementById("result").innerText = result;
  document.getElementById("user-score").innerText = userScore;
  document.getElementById("computer-score").innerText = computerScore;
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById("user-score").innerText = 0;
  document.getElementById("computer-score").innerText = 0;
  document.getElementById("result").innerText = "Make your move!";
  document.getElementById("user-choice").innerText = "Your Choice: -";
  document.getElementById("computer-choice").innerText = "Computer: -";
}
