// The Plan to build this game
// Chapter 1 is Initialize Variables: alphabetOptions, text, wins, loses, guessesLeft, key guesses

// 1.1 Created an Array for the computer's options
var alphabetOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k" , "l", "n", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// 1.2 Grab the text pieces to manipulate
var winText = document.querySelector("#win-Text");
var loseText = document.querySelector("#lose-Text");
var guessesLeftText = document.querySelector("#guesses-leftText");
var userGuessesText = document.querySelector("#user-GuessesText");

// 1.3 Initialize Win, Loss, User Guesses Variables
var winCount = 0;
var loseCount = 0;
var guessesRemaining = 10;
var userGuessCount = 0;
var userGuess = [];
var computerGuess = alphabetOptions[0];

// Chapter 2 is create functions: computer needs to pick a letter
//Functions to change the text
function updateWinText() {
    winText.innerHTML = "Win: " + winCount;
}
function updateLoseText() {
    loseText.innerHTML = "Lose: " + loseCount;
}
function updateGuessesRemaining() {
    guessesLeftText.innerHTML = "Guesses remaining: " + guessesRemaining;
}
function updateUserGuess() {
    userGuessesText.innerHTML = "User Guesses: " + userGuess;
}
// Set function to create a random number and assign to variable computerGuess
function letterSelector() {
    computerGuess = alphabetOptions[Math.floor(Math.random() * alphabetOptions.length)]
}

// Update Function
function updateAll() {
    updateWinText();
    updateLoseText();
    updateGuessesRemaining();
    updateUserGuess();
    letterSelector();
}

// Reset Function
function resetValues() {
    guessesRemaining = 10;
    userGuessCount = 0;
    userGuess = [];
    letterSelector();
}

// Set initial score
updateAll();



console.log(computerGuess);
console.log(guessesRemaining);


// Chapter 3 Record the key that the user selects
document.onkeyup = function(event){
    //Determine which key was pressed, make it lowercase and set it equal to a variable called user input
    var userInput = event.key;
    console.log(guessesRemaining);
    if (userInput === computerGuess){
            alert("Great job, correct");
            winCount++;
            resetValues();
            updateAll();
        }
        else {
            alert("Wrong");
            userGuess.push(userInput);
            guessesRemaining--;
        }
    updateAll();

    if (guessesRemaining <= 0) {
        alert("You lose");
        loseCount++;
        resetValues();
        updateAll();
        // guessesRemaining = 10;
        // userGuess = [];
    
    } 
    
}
// Chapter 4 Compare the computers number with the users selection
// Chapter 5 Trigger the changes to guesses and eventually score