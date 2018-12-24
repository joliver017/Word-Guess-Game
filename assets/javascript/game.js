var wordBank = [
  "squirtle",
  "bulbasaur",
  "charmander",
  "pikachu",
  "gengar",
  "alakazam",
  "pidgeot",
  "mewtwo",
  "snorlax",
  "arcanine"
];
var lettersGuessed = [];
var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var wordBlanks = [];

var numberOfGuesses = 10;
var wins = 0;
var letter = "";

// This function sets everything to up to start the game
// Resets guesses to 10, clears the letters guessed, chooses another word
function startGame() {
  document.getElementById("totalWins").innerHTML =
    "Wins:" + " " + wins;
  numberOfGuesses = 10;
  document.getElementById("guessesRemaining").innerHTML =
    "Number of guesses Remaining:" + " " + numberOfGuesses;
  lettersGuessed = [];
  document.getElementById("lettersGuessed").innerHTML =
    "Letters already guessed: " + lettersGuessed;
  wordBlanks = [];
  randWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  for (var i = 0; i < randWord.length; i++) {
    wordBlanks.push("_");
    document.getElementById("chosenword").innerHTML = wordBlanks.join(" ");
  }
}

startGame();

console.log(wordBlanks); // Check the blanks match number of letters
console.log(randWord); // Check which word was chosen from the wordBank array

// This is the event, makes sure only A-Z can be clicked, converts to lowercase
// Also includes function inside makeGuess
document.onkeydown = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    letter = event.key;
    event.key.toLowerCase();
    makeGuess(letter);
    document.getElementById("lettersGuessed").innerHTML =
      "Letters already guessed: " + lettersGuessed;
    youWon();
    console.log(event);
    console.log(lettersGuessed);
  }
};

// This function pushes the guessed letter to the array, then calls checkGuess function
function makeGuess(letter) {
  letter = event.key;
  if (lettersGuessed.indexOf(letter) === -1) {
    lettersGuessed.push(letter);
    checkGuess(letter);
  }
}

// This function verifies if the letter was correct or incorrect
// If it matches a letter, it replaces the blank with that letter
function checkGuess(letter) {
  for (var i = 0; i < wordBlanks.length; i++) {
    if (letter === randWord[i]) {
      wordBlanks[i] = letter;
      document.getElementById("chosenword").innerHTML = wordBlanks.join(" ");
    }
  }

  // If it does not match a letter, it subtracts 1 from numberOfGuesses
  // If numberOfGuesses reaches 0, alert you lose and start game again
  if (wordBlanks.indexOf(letter) === -1) {
    numberOfGuesses--;
    document.getElementById("guessesRemaining").innerHTML =
      "Number of guesses Remaining:" + " " + numberOfGuesses;
    if (numberOfGuesses === 0) {
      alert("you lose");
      startGame();
      console.log(wordBlanks);
      console.log(randWord);
    }
  }
}

// If no more blanks are left, alert you win and start game again
function youWon() {
  if (wordBlanks.indexOf("_") === -1) {
    wins++;
    document.getElementById("totalWins").innerHTML = "Wins: " + wins;
    alert("you win");
    startGame();
    console.log(wordBlanks);
    console.log(randWord);
  }
}
