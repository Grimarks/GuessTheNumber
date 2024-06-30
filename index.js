let submitButton = document.getElementById("submitButton");
let inputBox = document.getElementById("inputBox");
let kondisiElement = document.getElementById("kondisi");
let userScoreElement = document.getElementById("userScore");
let botScoreElement = document.getElementById("botScore");
let jawabanBot = document.getElementById("JawabanBot");
let userScore = 0;
let botScore = 0;

submitButton.onclick = function() {
    let userInput = inputBox.value.trim();
    if (userInput === "") {
        alert("Please enter a number!");
        return;
    }
    userInput = parseInt(userInput);
    if (isNaN(userInput)) {
        alert("Invalid input! Please enter a number between 1 and 10.");
        return;
    }
    if (userInput < 1 || userInput > 10) {
        alert("Please enter a number between 1 and 10.");
        return;
    }
    let random = Math.floor(Math.random() * 10) + 1;
    if (userInput === random) {
        jawabanBot.textContent = `BOT CHOOSE ${random}`;
        kondisiElement.textContent = "YOU WIN";
        userScore++;
        userScoreElement.textContent = userScore;
    } else {
        jawabanBot.textContent = `BOT CHOOSE ${random}`;
        kondisiElement.textContent = "YOU LOSE";
        botScore++;
        botScoreElement.textContent = botScore;
    }
    inputBox.value = "";
};