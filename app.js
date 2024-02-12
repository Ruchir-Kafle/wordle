// Variables
const secret = "aback"; // The word of the day.
const letters = "abcdefghijklmnopqrstuvwxyz"; // All the letters in the alphabet.
const alpha = new Set(letters.split("")); // Putting all the letters in the alphabet into a set.
const keyboard = [
    "QWERTYUIOP".split(""),
    "ASDFGHJKL".split(""),
    "ZXCVBNM".split("")
]; // Defining the letters of the keyboard in three elements, each element representing a row on the keyboard and each element being an array.

// Functions
function logKey(evt) {
    if (evt.key.toLowerCase() == "enter") { // Triggers when the enter key is pressed
        console.log("Submit"); // Prints "Submit" in the console
    } else if (evt.key.toLowerCase() == "backspace") { // Triggers when the backspace key is pressed
        console.log("Deleting"); // Prints "Deleting" in the console.
    } else if (alpha.has(evt.key.toLowerCase())) { // Triggers when a key is pressed which is in the "alpha" set.
        console.log(evt.key.toUpperCase()); // Prints the key pressed in the console.
    } else { // Triggers when a non-letter key is pressed.
        console.log("Key pressed is not a letter"); // Prints "Key pressed is not a letter" in the console.
    };
};

function render() {
    // Searches the HTML document for an HTML tag with the "root" id.
    const main = document.querySelector("#root"); 
    let template = ``;
    
    for (let i = 0; i < keyboard.length; i++) {
        console.log(i, keyboard[i])
    }

    main.innerHTML = template;

    console.log(main)
}
// Code

// Events
window.addEventListener("keyup", logKey); // Calling the function "logKey" whenever a key is released.