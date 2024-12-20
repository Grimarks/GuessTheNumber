const submitButton = document.getElementById("submitButton");
const inputBox = document.getElementById("inputBox");
const kondisiElement = document.getElementById("kondisi");
const userScoreElement = document.getElementById("userScore");
const botScoreElement = document.getElementById("botScore");
const jawabanBot = document.getElementById("JawabanBot");

let userScore = 0;
let botScore = 0;

submitButton.addEventListener("click", () => {
    const userInput = inputBox.value.trim();

    if (userInput === "") {
        alert("Please enter a number!");
        return;
    }

    const userNumber = parseInt(userInput);
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
        alert("Invalid input! Please enter a number between 1 and 10.");
        return;
    }

    const botNumber = Math.floor(Math.random() * 10) + 1;

    jawabanBot.textContent = `BOT CHOOSE ${botNumber}`;
    if (userNumber === botNumber) {
        kondisiElement.textContent = "YOU WIN";
        userScore++;
        userScoreElement.textContent = userScore;
    } else {
        kondisiElement.textContent = "YOU LOSE";
        botScore++;
        botScoreElement.textContent = botScore;
    }

    inputBox.value = "";
    inputBox.focus();
});
