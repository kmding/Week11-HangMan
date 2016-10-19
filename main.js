// require prompt to use to make the game 
var inquirer = require('inquirer');
var isLetter = require('is-letter');
//require the objects/exports you will use
var game = require('./game.js');
// var letter = require('./letter.js');
var Word = require('./word.js');

var game = {
	wordBank : game.game.wordList,// create or import a list of words
	//wordsWon : 0,// count of words Found
	guessesRemaining : 10, //per word
	currentWrd : null, //the word object
	startGame : function (){
    //make sure the user has 10 guesses
    if(this.guessesRemaining === 10){
		//get a random word from the array
    var randoNumber = Math.floor(Math.random() * this.wordBank.length);
		//populate currentWrd (made from Word constructor function) object with letters
    this.currentWrd = new Word(this.wordBank[randoNumber]);
    this.currentWrd.getLets();
    //displays empty word puzzle
    console.log(this.currentWrd.wordRender());
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
		var that = this;

		inquirer.prompt([{
      type: "input",
      name: "lttrChosen",
      message: "Pick a letter: ",
      validate: function(value){
        if(isLetter(value)){
          return true;
        } else{
          return false;
        }
      }
      }]).then(function(ans){
        //takes in the answer the user input
        var picked = ans.lttrChosen;
        console.log('You picked: ' + picked);
        //checks if the letter chosen was found in the currentWrd
        var found = that.currentWrd.checkIfLetterFound(picked);
        //if found returns 0, user didn't guess the right letter
        if(found === 0){
          console.log("You didn't guess the right letter.");
          that.guessesRemaining--;
          console.log('Guesses remaining: ' + that.guessesRemaining);
          console.log(that.currentWrd.wordRender());
        } else{
          console.log("Yay you found the letter!");
            if(that.currentWrd.didWeFindTheWord() === true){
              //solved puzzle
              console.log(that.currentWrd.wordRender());
              console.log("You won.");
            } else{
                console.log('Guesses remaining: ' + that.guessesRemaining);
                console.log(that.currentWrd.wordRender());
            }
        }
        //if the guesses are more than 0 and the word hasn't been found yet, keep prompting user for letters.
        if(that.guessesRemaining > 0 && that.currentWrd.found === false){
          that.keepPromptingUser();
        }//else if their guesses are 0, they lost the game
        else if(that.guessesRemaining === 0){
          console.log('You lose, champ!');
          console.log('The word you were trying to get was: ' + that.currentWrd.wrd);
        }

		});
	}
}

game.startGame();
