// Variables
const secret = "ABACK"; // The word of the day.
const letters = "abcdefghijklmnopqrstuvwxyz"; // All the letters in the alphabet.
const alpha = new Set(letters.split("")); // Putting all the letters in the alphabet into a set.
const keyboard = [
    "QWERTYUIOP".split(""),
    "ASDFGHJKL".split(""),
    "ZXCVBNM".split("")
]; // Defining the letters of the keyboard in three elements, each element representing a row on the keyboard and each element being an array.
keyboard[2].unshift("ENTER");
keyboard[2].push("⌫");

let tries = [
    [],
    [],
    [],
    [],
    [],
    [],
];
let correctionMap = [
    [],
    [],
    [],
    [],
    [],
    [],
];

// Functions
function logKey(evt, attempt) {
    console.log(evt)
    if (evt.key.toLowerCase() == "enter") { // Triggers when the enter key is pressed
        console.log("Submit"); // Prints "Submit" in the console
        
        if (attempt < 6 && tries[attempt].length == 5) {
            evaluate(tries[attempt], attempt);
            attempt++;
            return attempt, won
        };

    } 
    
    else if (evt.key.toLowerCase() == "backspace") { // Triggers when the backspace key is pressed
        console.log("Deleting"); // Prints "Deleting" in the console.
        tries[attempt].pop();
    } 
    
    else if (alpha.has(evt.key.toLowerCase())) { // Triggers when a key is pressed which is in the "alpha" set.
        
        if (tries[attempt].length < 5) {
            tries[attempt].push(evt.key.toUpperCase());
        };

    } 
    
    else { // Triggers when a non-letter key is pressed.
        console.log("Key pressed is not a letter"); // Prints "Key pressed is not a letter" in the console.
    };
    

    render();
    return attempt
};


function evaluate(guess, attempt) {
    let matches = [];

    for (let i = 0; i < guess.length; i++) {
        let found = 0;

        if (guess[i] == secret[i]) {
            found = 2;
        }
        
        else if (secret.includes(guess[i])) {
            found = 1;
        }

        matches.push(found);
    };
    
    if (tries[attempt] == secret) {
        won = true
    }

    correctionMap[attempt] = matches
    return won
};


function render() {
    // Searches the HTML document for an HTML tag with the "root" id.
    const main = document.querySelector("#root");
    let board = `<div class="board">`;

    for (let i = 0; i < tries.length; i++) {

        for (let j = 0; j < 5; j++) {
            board += `<div class="match${correctionMap[i][j]}">${tries[i][j] ? tries[i][j] : ""}</div>`;
        };

    };

    board += `</div>`;

    let keyTemplate = `<div class="keyboard">`;
    
    for (let i = 0; i < keyboard.length; i++) {
        keyTemplate += `<div class = "row">`;

        for (let j = 0; j < keyboard[i].length; j++) {
            keyTemplate += `<div class="key">${keyboard[i][j]}</div>`;
        };

        keyTemplate += `</div>`;
    };

    keyTemplate += `</div>`;

    main.innerHTML = board + keyTemplate;
};


function main(evt) {
    let attempt = 0;
    let won = false


    if (!won) {
        attempt, won = logKey(evt, attempt);
    }
};

// Code

render();

// Events
window.addEventListener("keyup", main); // Calling the function "logKey" whenever a key is released.