// console.log("hello");  
var humanScore = 0;
var computerScore = 0;

function playRock() {
  play("Rock");
}
function playPaper() {
  play("Paper");
}
function playScissors() {
  play("Scissors");
}

function play(humanPlay) {

  computerPlay = ComputerPlay();

  document.getElementById('status1').innerHTML = "<p>You played <strong>" + humanPlay + "</strong>.</p>";
  document.getElementById('status2').innerHTML = "<p>The bot played <strong>" + computerPlay + "</strong>.</p>";
  if (humanPlay == 'Rock') {
    if (computerPlay == 'Rock') {
      document.getElementById('status').innerHTML += "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>. You tied. :|</p>";
      computerScore++;
      humanScore++;
    } else if (computerPlay == 'Paper') {
      document.getElementById('status').innerHTML += "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>. You lose. :(</p>";
      computerScore++;
    } else if (computerPlay == 'Scissors') {
      document.getElementById('status').innerHTML += "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>. You win! :)</p>";
      humanScore++;
    }
  } else if (humanPlay == 'Paper') {
    if (computerPlay == 'Rock') {
      document.getElementById('status').innerHTML += "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>. You win! :)</p>";
      humanScore++;
    } else if (computerPlay == 'Paper') {
      document.getElementById('status').innerHTML += "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>. You tied. :|</p>";
      computerScore++;
      humanScore++;
    } else if (computerPlay == 'Scissors') {
      document.getElementById('status').innerHTML += "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>. You lose. :(</p>";
      computerScore++;
    }
  } else if (humanPlay == 'Scissors') {
    if (computerPlay == 'Rock') {
      document.getElementById('status').innerHTML += "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>. You lose. :(</p>";
      computerScore++;
    } else if (computerPlay == 'Paper') {
      document.getElementById('status').innerHTML += "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>. You win! :)</p>";
      humanScore++;
    } else if (computerPlay == 'Scissors') {
      document.getElementById('status').innerHTML += "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>. You tied. :|</p>";
      computerScore++;
      humanScore++;
    }
  }

  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;

}

function ComputerPlay() {
  var plays = ['Rock', 'Paper', 'Scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}
