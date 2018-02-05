//require
var inquirer = require('inquirer');
var Word = require('./word.js');
var Letter = require('./letter.js');
var totalGuesses = 10;
var wordBank = ['peonies', 'garden roses', 'buttercup', 'columbine', 'indian paintbrush', 'bluebell', 'lily', 'poppy', 'chrysanthemum', 'sunflower', 'lilac', 'carnations', 'hydrangea', 'gladiolus', 'iris', 'orchids', 'snapdragon', 'succulents', 'tulips', 'aster', 'birds of paradise', 'freesia', 'begonia', 'daffodil', 'marigold'];
var wordIndex = Math.floor(Math.random() * wordBank.length);
var newWord = new Word(wordBank[wordIndex]);

function hangmanGame() {
	console.log(newWord.toDisplay() + "\n");
	if (newWord.lettersGuessed.length >= totalGuesses) {
		console.log('You have no more guesses. Sorry.');
		inquirer.prompt([{
			name: "confirm",
			type: "confirm",
			message: "Do you want to end the game?"
		}]).then(function(response) {
			if (response.confirm) {
				console.log("Thanks for playing! Better luck next time...");
				return;
			} else {
				console.log("\nWant to try again, eh? Alright, here you go!");
				newWord.incorrectLetters = 0;
				hangmanGame();
			}
		})
		return;
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(str) {
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
		}
	}]).then(function(letterInput) {
		var letter = letterInput.letter;
		newWord.searchLetter(letter);
		if (newWord.wordComplete()) {
			console.log('\n\x1b[31m%s\x1b[0m', 'Yes! It was ' + newWord.toDisplay() + '!');
			return;
		}
		console.log('-------------------\n');
		//Next guess if the user did not get it.
		console.log('\n\x1b[31m%s\x1b[0m', 'You have ' + (totalGuesses - newWord.lettersGuessed.length) + ' guesses left.');
		hangmanGame(); //Recursive call
	});
}
hangmanGame(); //Start Game