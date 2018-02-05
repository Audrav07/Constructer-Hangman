function Letter(value) {
	this.value = value;
	this.showLetter = false;
	if (this.value == ' ') 
		this.showLetter = true;
}

Letter.prototype.render = function() {
	if (this.showLetter) {
		return this.value;
	}
	return "_ ";
}
module.exports = Letter;