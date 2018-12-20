var wordBank = ["squirtle","bulbasaur", "charmander","pikachu","gengar","alakazam","pidgeot","mewtwo","snorlax","arcanine"]

var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];

var wordBlanks = []
for(var i = 0; i < randWord.length; i++) {
    wordBlanks.push('_');
    // console.log(randWord); // Check which word was chosen from the wordBank array
    console.log(wordBlanks);
    document.getElementById("chosenword").innerHTML = wordBlanks.join(' ');
}

function checkLetter(x) {
    if (x === randWord.charAt(i)) {
    document.getElementById("chosenword").innerHTML = randWord.charAt(x);
    }
    else {
    document.getElementById("chosenword").innerHTML = '_'
    }
}









// var wordAnswer = [];
 // for (var i = 0; i < randWord.length; i++) {
 // wordAnswer[i] = "_";
 // document.getElementById("wordblanks").innerHTML = wordAnswer[i] = "_";
 // }
 
 // var remainingLetters = randWord.length;

// for (i = 0; i < wordBank.length; i++) {
    // console.log(randWord);
// }