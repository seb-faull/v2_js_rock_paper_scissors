playGame();
var playAgain = true;
while (playAgain) {
	playGame();
	var userInput = prompt('Would you like to play again? (y/n)');

	if (userInput !== 'y') {
		playAgain = false;
	}
}

//In charge of other functions
function playGame () {
	showMenu();

	var player1Choice = getUserInput('Player 1');
	var player2Choice = getUserInput('Player 2');

	var winner = getWinner(player1Choice, player2Choice);

	outputToScreen(winner);
}

function showMenu () {
	var outputText = 'Welcome to Rock Paper Scissors! \n';
		outputText += 'This is a two player game, both players must choose either rock, paper or scissors. \n';
		outputText += 'May the odds be ever in your favour!';

	outputToScreen(outputText);
}

function getUserInput (playerName) {
	// var input = prompt('Please enter (r)ock (p)aper or (s)cissors');
	// return input;
	return prompt(playerName + '\nPlease enter (r)ock (p)aper or (s)cissors');
}

function getWinner (player1, player2) {
	if (player1 === player2) {
		return 'It is a tie!';
	} //if this if statement is true it ends the function. RETURN STATEMENTS ALWAYS stops a function in it's tracks!

	if (player1 === 'r' && player2 === 's' ||
		player1 === 'p' && player2 === 'r' ||
		player1 === 's' && player2 === 'p') {

		return 'Player 1 Wins!';
	}

		return 'Player 2 Wins!';	
}

function outputToScreen (text) {
	alert(text);
}