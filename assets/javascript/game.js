
 var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

 var wins = 0;
 var losses = 0;
 var guesses = 9;
 var wrongLetters = [];
	
document.getElementById("numberOfWins").innerHTML = wins;
document.getElementById("numberOfLosses").innerHTML = losses; 
document.getElementById("numberOfGuesses").innerHTML = guesses; 


var computerLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(computerLetter)


document.onkeyup = function(event){
		
		var userLetter = event.key.toLowerCase();



		 if(computerLetter === userLetter){
			wins++;
			guesses = 9;
			alert("You must be psychic! I was thinking of " + computerLetter + "!");
			console.log(wins);
			computerLetter = letters[Math.floor(Math.random() * letters.length)];
			console.log(computerLetter);
			wrongLetters = [];
		
		}else{


			if (userLetter !== computerLetter){
				guesses--;
				wrongLetters.push(userLetter);

				console.log(wrongLetters);
				console.log(guesses);
				document.getElementById("guessdisplay").innerHTML += " " + userLetter;
			}
	
			if (guesses === 0){
				alert("you lose, I was thinking of " + computerLetter + ".");
				losses++;
				wrongLetters = [];
				console.log("number of losses" + losses);
				document.getElementById("guessdisplay").innerHTML = " " 
				guesses = 9;
				computerLetter = letters[Math.floor(Math.random() * letters.length)];
			} 

			


		}
		document.getElementById("numberOfWins").innerHTML = wins;
		document.getElementById("numberOfLosses").innerHTML = losses; 
		document.getElementById("numberOfGuesses").innerHTML = guesses; 

	}

