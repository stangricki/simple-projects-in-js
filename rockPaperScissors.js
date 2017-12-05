const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if ( 'rock' || 'paper' || 'scissors' === userInput) {
    return userInput;
  } else { 
  	console.log ('Error! It is not possible to choose this.')
  }
};

function getComputerChoice() {
  var randomNumberChoices = Math.floor(Math.random() * 3);
var possibleChoices = ['rock', 'paper', 'scissors'];
return possibleChoices[randomNumberChoices];
}

function determineWinner(userChoice, computerChoice) { 
	if (userChoice === computerChoice) {
		return 'It\'s a tie!';	  
	};
  
  if ((userChoice === 'rock') && (computerChoice === 'scissors')) {
    return 'You win!'
  } else if ((userChoice === 'paper') && (computerChoice === 'rock')) {
    return 'You win!'
  } else if ((userChoice === 'scissors') && (computerChoice === 'paper')) {
    return 'You win!'
  } else if (userChoice === 'bomb') {
    return 'Computer exploded!!!!!!!!!';
  } else { 
    return'Computer wins!'
  };
};

function playGame(userChoice) {
  var userChoice = getUserChoice(userChoice); 
  var computerChoice = getComputerChoice();
  console.log('You chose ' + userChoice + "\nComputer chose " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame('rock'); // Enter 'rock', 'paper' or 'scissors' and run the code! ... or 'bomb' :D
