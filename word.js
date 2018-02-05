// require letter.js to bring into method for Word constructor
var Letter = require("./letter.js");

function Word(value){
	this.value = value;
	this.letters = [];
	this.lettersGuessed = "";
	for(var i = 0; i < this.value.length; i++) {
		this.letters.push(new Letter(this.value[i]));
	}
};

Word.prototype.wordComplete = function(){
	for(var i = 0; i < this.letters.length; i++){
		if(!this.letters[i].showLetter) return false;
	}
	return true;
}

Word.prototype.searchLetter = function(letter){
	var lowerLetter = letter.toLowerCase();
	if (this.lettersGuessed.indexOf(lowerLetter) != -1) {
		return "Duplicate";
	} 
	this.guessesMade += lowerLetter; //Record the guess
	for(var i=0; i<this.letters.length;i++){
		if(this.letters[i].value.toLowerCase() == lowerLetter){
		this.letters[i].showLetter = true;
		}
	}
};

Word.prototype.toDisplay = function(){
  var output = "";
  for(var i=0; i<this.letters.length; i++){
    output += this.letters[i].render();
  }
  return output;
}



module.exports = Word;

