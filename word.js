// require your letter objects
var Letter = require('./letter.js');

var Word = function(wrd){
var that = this;
// property to store the string wrd
this.wrd = wrd;
// a collection of letter objects
this.letter = [];
// property is the word found?
this.found = false;

this.getLets = function() {
// populate the collection above with new Letter objects
for(var i = 0; i<that.wrd.length; i++){
	var newLetter = new Letter(that.wrd[i]);
	this.letter.push(newLetter);
}
	};
	// This determines if we have solved the word puzzle
//found the current word
this.didWeFindTheWord = function() {
	//sets this.found in the word object to true or false if all letter objects have a true value in their appear property
	if(this.letter.every(function(lttr){
		return lttr.appear === true;
	})){
		this.found = true;
		return true;
	}

};

this.checkIfLetterFound = function(guessLetter) {
var whatToReturn = 0;
// iterate through the collection of letter Objects
this.letter.forEach(function(lttr){
	if(lttr.let === guessLetter){
		lttr.appear = true;
		whatToReturn++;
	}
})
// if guessLetter matches Letter property, the letter object should be shown
	return whatToReturn;
};

this.wordRender = function() {
// render the word based on if letters are found or ot found
	var str = '';
	that.letter.forEach(function(lttr){
		var currentLtr = lttr.letterRender();
		str+=currentLtr;
	})
	return str;
};
}

// export to use in main.js
module.exports = Word;
