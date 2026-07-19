/**
 * Main wrapper function triggered upon form submission.
 * Handles validation, rules execution, and innerHTML rendering.
 * Returns false to prevent the standard page refresh behavior of HTML forms.
 */
function runCasinoGame() {
    // Target the text input element and output div from the DOM
    var nameInput = document.getElementById("username");
    var outputDiv = document.getElementById("gameOutput");
    
    // Extract and trim user input value
    var playerName = nameInput.value.trim();

    // Verification check using innerHTML instead of standard alerts
    if (playerName === "") {
        outputDiv.innerHTML = "<span class='error'>Error: Please enter a valid name before playing!</span>";
        return false;
    }

    // Secondary function execution: Check if the user name happens to be a palindrome string
    var checkPalindrome = isPalindrome(playerName);
    var palindromeMessage = "";
    if (checkPalindrome) {
        palindromeMessage = "<p style='color: #00ffcc;'>✨ Awesome name! Your name is a palindrome! ✨</p>";
    }

    // Execute Random Number Generation for 2 distinct dice between 1 and 6
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    
    // Calculate total game points sum
    var sum = die1 + die2;

    // Base structural variables to store text evaluation outcomes
    var resultText = "";
    var finalOutcomeClass = "";

    // Conditional evaluation architecture adhering strictly to assignment's modified Craps rules
    if (sum === 7 || sum === 11) {
        // Condition A: Immediate loss check
        resultText = "CRAPS - you lose!";
        finalOutcomeClass = "lose";
    } 
    else if (die1 === die2 && die1 % 2 === 0) {
        // Condition B: Matches if die1 == die2 and die1 is divisible by 2 with no remainder (Even doubles: 2, 4, 6)
        resultText = "You won!";
        finalOutcomeClass = "win";
    } 
    else {
        // Condition C: Default fallback catch-all loop
        resultText = "You pushed!";
        finalOutcomeClass = "push";
    }

    // Compile dynamic markup content with nested conditional tracking variables
    var htmlContent = "<h3>" + playerName + "'s Roll Results:</h3>" +
                      "<p>🎲 Die 1: <strong>" + die1 + "</strong> | 🎲 Die 2: <strong>" + die2 + "</strong></p>" +
                      "<p>Total Sum Score: <strong>" + sum + "</strong></p>" +
                      "<p class='" + finalOutcomeClass + "'>" + resultText + "</p>" + 
                      palindromeMessage;

    // Modify target HTML block contents asynchronously
    outputDiv.innerHTML = htmlContent;

    // Intercept default browser page reload actions
    return false;
}

/**
 * Secondary operational utility function.
 * Evaluates a string input parameter to see if it reads identical backwards.
 */
function isPalindrome(str) {
    // Standardize text strings to completely lower-case formatting and strip out layout spaces
    var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // Invert the structural elements of the cleaned text values
    var reversedStr = cleanStr.split("").reverse().join("");
    
    // Return a functional boolean evaluation state comparison matching true or false
    return cleanStr === reversedStr;
}
