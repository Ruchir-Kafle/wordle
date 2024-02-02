// Variables
const secret = "aback";
const letters = "abcdefghijklmnopqrstuvwxyz";

const alpha = new Set(letters.split(''));

// Functions
function logKey(evt) {
    if (alpha.has(evt.key.toLowerCase())) {
        console.log(evt.key.toUpperCase())
    } else {
        console.log("Key pressed is not a letter")
    }
}

// Code

// Events
window.addEventListener("keyup", logKey);