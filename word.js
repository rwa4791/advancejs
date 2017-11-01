// import the Letter constructor function 
var Letter = require('./letter.js');

// export Word Constructor function
module.exports= function Word(word){

	// array of letter objects
	var letters = [];
	var wordArray = word.split('');

	// pushing Letter Objects into Word Object's letter array.
	wordArray.forEach(function(l){
			letters.push(new Letter(l));
	});
	// maximum allowed guesses
	this.guessesRemaining = 10;
	// default value is false. it should be set to true when the whole word is guessed.
	this.guessed = false;
	
	// does all the processing if the letter is in the word 
	this.letterInWord = function(userGuess){
		this.guessesRemaining --;
	
		// word.guessed will be set to true when all the letters have been guessed.
		this.guessed = letters.every(function(letter){

				// checks if the letter is in the word. If it is in the word, then sets guessed property to true.
				if(userGuess === letter.name){
					letter.guessed = true;
				}
				return letter.guessed;
			});


	}

	// for displaying the word on console
	this.display = function(){
		var str = '';
		letters.forEach(function(letter){
			str += letter.display();
		});
		console.log('                                 '+str+'       Guesses remaining:'+ this.guessesRemaining);
	}
}