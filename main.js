//require
var inquirer = require('inquirer');
var Word = require('./word.js');
var Letter = require('./letter.js');

var totalGuesses = 10;


var wordBank = ['peonies', 'garden roses', 'buttercup', 'columbine', 'indian paintbrush', 'bluebell', 'lily', 'poppy', 'chrysanthemum', 'sunflower', 'lilac', 'carnations', 'hydrangea', 'gladiolus', 'iris', 'orchids', 'snapdragon', 'succulents', 'tulips', 'aster', 'birds of paradise', 'freesia', 'begonia', 'daffodil', 'marigold'];

var wordIndex = Math.floor(Math.random() * wordBank.length);

var newWord = new Word(wordBank[wordIndex]);



function hangmanGame(){
	console.log(newWord.toDisplay());
	if (newWord.lettersGuessed.length >= totalGuesses){
		console.log('You have no more guesses. Sorry.');
	return; //Game over
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(str){
//			if (str.length != 1) return false;
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
				}
		}]).then(function(letterInput){ //Game control
				var letter = letterInput.letter; 
				newWord.searchLetter(letter); //Check
					if(newWord.wordComplete()){ 
					console.log('\n\x1b[31m%s\x1b[0m', 'Yes! It was ' + newWord.toDisplay() + '!');
					return; //Winner
					}
				console.log('-------------------\n'); //If we are here the game did not end. Next guess.
				console.log('\n\x1b[31m%s\x1b[0m', 'You have ' + (totalGuesses - newWord.lettersGuessed) + ' guesses left.')
				hangmanGame(); //Recursive call
				}
  );
}

hangmanGame(); //Start Game






