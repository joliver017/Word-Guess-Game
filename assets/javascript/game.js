var wordBank = ["squirtle","bulbasaur", "charmander","pikachu","gengar","alakazam","pidgeot","mewtwo","snorlax","arcanine"];
var lettersGuessed = [];
var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var wordBlanks = [];

var numberOfGuesses = 10;
var wins = 1;
var letter = "";


document.getElementById("guessesRemaining").innerHTML = "Number of guesses Remaining:" + " " + numberOfGuesses;

// *****I don't think I need this code anymore

// document.getElementById("chosenword").innerHTML = "";
// for (var i = 0; i < wordBlanks.length; i++) {
   // document.getElementById("chosenword").innerHTML += wordBlanks[i];
// }

function startGame() {
    numberOfGuesses = 10;
    lettersGuessed = [];
    wordBlanks = [];
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    for(var i = 0; i < randWord.length; i++) {
    wordBlanks.push('_');
    document.getElementById("chosenword").innerHTML = wordBlanks.join(' ');
}
};

startGame();

console.log(wordBlanks);
console.log(randWord); // Check which word was chosen from the wordBank array

document.onkeydown = function(event) {
    if(event.keyCode >= 65 && event.keyCode <= 90) {
        letter = event.key;
        event.key.toLowerCase();
        makeGuess(letter); 
        document.getElementById("lettersGuessed").innerHTML = "Letters already guessed: " + lettersGuessed;
        youWon();
        console.log(event);
        console.log(lettersGuessed);   
    }
};

function makeGuess(letter) {
    letter = event.key;
    if (lettersGuessed.indexOf(letter) === -1) {
        lettersGuessed.push(letter);
        checkGuess(letter);
        
    }
};

function checkGuess(letter) {
    for(var i = 0; i < wordBlanks.length; i++) {
        if(letter === randWord[i]) {
            wordBlanks[i] = letter;
            document.getElementById("chosenword").innerHTML = wordBlanks.join(' ');
        }   
    };

    if(wordBlanks.indexOf(letter) === -1) {
        document.getElementById("guessesRemaining").innerHTML = "Number of guesses Remaining:" + " " + numberOfGuesses--;
        if(numberOfGuesses === -1) {
            alert("you lose");
            startGame();
            console.log(wordBlanks);
            console.log(randWord);
    };    
    };
    
};



function youWon() {
    if(wordBlanks.indexOf("_") === -1) {
        document.getElementById("totalWins").innerHTML = "Wins: " + wins++;
        alert("you win");
        startGame();
        console.log(wordBlanks);
        console.log(randWord);
    };
};



    



    // console.log(wordBlanks);

 //   if (wordBlanks.length <= 0) {
   //     numberOfGuesses--;
     //   document.getElementById("guessesRemaining").innerHTML = "Number of guesses Remaining:" + " " + numberOfGuesses;
    //}
// };

  //  else {
    //    for(var i = 0; i < wordBlanks.length; i++) {
      //      wordBlanks[wordBlanks[i]] = letter;
        //}
    //}
//};





// function checkLetter(x) {
   // if (x === randWord.charAt(i)) {
   // document.getElementById("chosenword").innerHTML = randWord.charAt(x);
   // wordBlanks.push(x);
   // }
   // else {
   // document.getElementById("chosenword").innerHTML = '_'
   // }
// }


// var wordAnswer = [];
 // for (var i = 0; i < randWord.length; i++) {
 // wordAnswer[i] = "_";
 // document.getElementById("wordblanks").innerHTML = wordAnswer[i] = "_";
 // }
 
 // var remainingLetters = randWord.length;

// for (i = 0; i < wordBank.length; i++) {
    // console.log(randWord);
// }