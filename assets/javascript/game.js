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
var wins = 1;
var letter = "";

document.getElementById("guessesRemaining").innerHTML =
  "Number of guesses Remaining:" + " " + numberOfGuesses;

function startGame() {
  numberOfGuesses = 10;
  document.getElementById("guessesRemaining").innerHTML =
    "Number of guesses Remaining:" + " " + numberOfGuesses;
  lettersGuessed = [];
  wordBlanks = [];
  randWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  for (var i = 0; i < randWord.length; i++) {
    wordBlanks.push("_");
    document.getElementById("chosenword").innerHTML = wordBlanks.join(" ");
  }
}

startGame();

console.log(wordBlanks);
console.log(randWord); // Check which word was chosen from the wordBank array

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

function makeGuess(letter) {
  letter = event.key;
  if (lettersGuessed.indexOf(letter) === -1) {
    lettersGuessed.push(letter);
    checkGuess(letter);
  }
}

function checkGuess(letter) {
  for (var i = 0; i < wordBlanks.length; i++) {
    if (letter === randWord[i]) {
      wordBlanks[i] = letter;
      document.getElementById("chosenword").innerHTML = wordBlanks.join(" ");
    }
  }

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

function youWon() {
  if (wordBlanks.indexOf("_") === -1) {
    numberOfGuesses = 10;
    document.getElementById("totalWins").innerHTML = "Wins: " + wins++;
    alert("you win");
    startGame();
    console.log(wordBlanks);
    console.log(randWord);
  }
}
