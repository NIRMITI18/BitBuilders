// JavaScript code goes here

// Define variables for game elements
const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const startButton = document.getElementById('start-button');
const submitButton = document.getElementById('submit-button');

let currentQuestionIndex = 0;
let playerInterval;
let gameStarted = false;

// Define an array of questions and answers about programming languages
const questions = [
    { question: 'Which language is known for its simplicity and readability?', answer: 'python' },
    { question: 'Which language is widely used for web development?', answer: 'javascript' },
    { question: 'Which language is primarily used for statistical computing and graphics?', answer: 'r' },
    { question: 'Which language is known for its speed and efficiency?', answer: 'c' },
    { question: 'Which language is used for developing mobile applications?', answer: 'java' }
    // Add more questions here
];

// Function to display a random question
function displayQuestion() {
    const { question } = questions[currentQuestionIndex];
    questionElement.textContent = question;
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length; // Loop through questions
}

// Function to check the answer
function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase().trim();
    const { answer } = questions[(currentQuestionIndex - 1 + questions.length) % questions.length]; // Get the answer for the current question

    if (userAnswer === answer) {
        clearInterval(playerInterval);
        alert('Correct answer! You stopped the blocks.');
        resetGame();
    } else {
        alert('Incorrect answer! Keep going.');
    }

    // Clear input field
    answerInput.value = '';
}

// Function to move the player towards the obstacle
function movePlayer() {
    const currentPosition = parseInt(window.getComputedStyle(player).getPropertyValue('left'), 10);
    const obstaclePosition = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'), 10);
    const distance = obstaclePosition - currentPosition;

    if (distance <= 50) { // Adjusted collision detection area
        clearInterval(playerInterval);
        alert('You reached the obstacle! Game over.');
        resetGame();
    } else {
        player.style.left = currentPosition + 1 + 'px'; // Adjust the speed of the player
    }
}

// Function to start the game
function startGame() {
    if (!gameStarted) {
        startButton.disabled = true;
        playerInterval = setInterval(movePlayer, 10); // Adjust the interval for player movement
        gameStarted = true;
    }
}

// Function to reset the game
function resetGame() {
    startButton.disabled = false;
    gameStarted = false;
    player.style.left = '0px';
    displayQuestion();
}

// Initialize the game
displayQuestion();
startButton.addEventListener('click', startGame);
submitButton.addEventListener('click', checkAnswer);
