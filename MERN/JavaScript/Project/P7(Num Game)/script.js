let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrong = document.querySelector('.wrong');
let guesses = document.querySelector('.guesses');

let answer = Math.floor(Math.random() * 100) + 1;
console.log("🚀 ~ answer:", answer)

let numGuesses = 0;

btn.addEventListener('click', () => {
    guessesNumber();
});

function guessesNumber() {
    if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
        wrong.innerHTML = "Enter Only Number Between 0 to 100";
    } else {
        numGuesses++;
        guesses.innerHTML = "No. of Guess : " + numGuesses;
        if (input.value > answer) {
            wrong.innerHTML = "You guessed Too High!"
            input.value = "";
        } else if (input.value < answer) {
            wrong.innerHTML = "You guessed Too Low!"
            input.value = "";
        } else {
            wrong.innerHTML = "Congratulation You guessed the correct answer";
            setTimeout(() => {
                resetGame();
            }, 5000)
        }
    }
}

function resetGame() {
    numGuesses = 0
    answer = Math.floor(Math.random() * 100) + 1;
    wrong.innerHTML = "";
    input.value = "";
    guesses.innerHTML = "No. of Guess: 0"
}
