var buttons = document.getElementsByClassName('button');
var winner = 0;

/*
computer guess meaning
rock = 0
paper = 1
scissor = 2
*/
// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

async function update(event) {
  document.getElementById('winner').innerText = 'Thinking...';
  // await delay(2000); // Add a delay of 2 seconds

  let clickedButtonID = event.target.id;
  let computerGuess = Math.floor(Math.random() * 3);
  
  if(clickedButtonID == 'rock'){
    if(computerGuess == 1){
      winner = 2
    }else if(computerGuess == 2){
      winner = 1;
    }else{
      winner = 0;
    }
  }
  else if(clickedButtonID == 'paper'){
    if(computerGuess == 0){
      winner = 1
    }else if(computerGuess == 2){
      winner = 2;
    }else{
      winner = 0;
    }
  }
  else{
    if(computerGuess == 1){
      winner = 1
    }else if(computerGuess == 2){
      winner = 0;
    }else{
      winner = 2;
    }
  }
  
  if (winner == 1)
    document.getElementById('winner').innerText = 'You Win';
  else if (winner == 2) {
    document.getElementById('winner').innerText = 'Computer Wins';
  } else {
    document.getElementById('winner').innerText = 'Tie';
  }
}

for (let i = 0; i < buttons.length; ++i) {
  buttons[i].addEventListener('click', update);
}
