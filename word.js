// require letter.js 
var Letter = require("./letter.js");

function Word(value) {
	this.value = value;
	this.letters = [];
	this.lettersGuessed = "";
	for (var i = 0; i < this.value.length; i++) {
		this.letters.push(new Letter(this.value[i]));
	}
};
Word.prototype.wordComplete = function() {
	for (var i = 0; i < this.letters.length; i++) {
		if (!this.letters[i].showLetter) return false;
	}
	return true;
}
Word.prototype.searchLetter = function(letter) {
	var lowerLetter = letter.toLowerCase();
	if (this.lettersGuessed.indexOf(lowerLetter) != -1) {
		console.log("\n\x1b[31m%s\x1b[0m", "You've already guessed '" + letter + "'!");
		return;
	}
	this.lettersGuessed += lowerLetter; //Record the guess
	for (var i = 0; i < this.letters.length; i++) {
		if (this.letters[i].value.toLowerCase() == lowerLetter) {
			this.letters[i].showLetter = true;
		}
	}
	if (this.value.indexOf(letter) > -1) {
		var letterIndex = this.value.indexOf(letter);
		if (!this.letters[letterIndex].showLetter) {
			return;
		}
		console.log("\n\x1b[32m%s\x1b[0m", "CORRECT!");
	} else {
		this.incorrectLetters++;
		console.log("\n\x1b[31m%s\x1b[0m", "INCORRECT!");
		return;
	}
}
Word.prototype.toDisplay = function() {
	var output = "";
	for (var i = 0; i < this.letters.length; i++) {
		output += this.letters[i].render();
	}
	return output;
}
module.exports = Word;