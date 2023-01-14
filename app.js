let colors = [];
let targetColor;
let colorButtons = document.querySelectorAll("#colorButtons button");
let colorDisplay = document.getElementById("colorDisplay");
let message = document.getElementById("message");

// Random RGB color generator
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Initialize game
function init() {
    colors = [];
    for (let i = 0; i < colorButtons.length; i++) {
        colors.push(randomColor());
    }
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = targetColor;
    for (let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].style.backgroundColor = colors[i];
    }
}

// Handle button clicks
colorButtons.forEach((button) => {
    button.addEventListener("click", function () {
        if (this.style.backgroundColor === targetColor) {
            message.textContent = "Correct!";
            colorButtons.forEach((button) => {
                button.style.backgroundColor = targetColor;
            });
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    });
});

init();
// reset button 
document.getElementById("resetBtn").addEventListener("click", init);
document.getElementById("resetBtn").addEventListener("click", function () {
    message.textContent = "";
    init();
});