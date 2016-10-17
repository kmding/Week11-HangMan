// require prompt to use to make the game 
var inquirer = require('inquirer');
//require the objects/exports you will use
var game = require('./game.js');
// var letter = require('./letter.js');
var word = require('./word.js');

game = {
	wordBank : game.game.wordList,// create or import a list of words
	wordsWon : 0,// count of words Found
	guessesRemaining : 10, //per word
	currentWrd : null, //the word object
	startGame : function (wrd){
    //make sure the user has 10 guesses
    if(this.guessesRemaining === 10){
		//get a random word from the array
    var randoNumber = Math.floor(Math.random() * this.wordBank.length);
		//populate currentWrd (made from Word constructor function) object with letters
    this.currentWrd = this.wordBank[randoNumber];
		this.keepPromptingUser();
  }else{
    this.resetGuessesRemaining();
    this.startGame();
  }
	}, 
	resetGuessesRemaining : function(){
    // reset guess count for new game
    this.guessesRemaining = 10;	
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
		    //console.log(result);
		    
			  // console log the letetr you chose

		    //this checks if the letter was found and if it is then it sets that specific letter in the word to be found

		    //if the user guessed incorrectly minus the number of guesses they have left
				// and console.log if they were incorrect or correct
		    	
				//check if you win only when you are right
        //end game
			 
		    
		    // display the user how many guesses remaining
			
				// render the word 
				
				// display letters the user has guessed

			  // if user has remaining guesses and Word isn't found
			
				// if user has no guesses left, show them the word and tell them they lost
			
				// else show the user word and rendered
		    
		});
	}


};

game.startGame();
