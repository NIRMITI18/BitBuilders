const blocks = document.getElementById('blocks');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const scoreValue = document.getElementById('score-value');

let score = 0;
let currentQuestionIndex = 0;
let stackHeight = 0;

// List of AI-related questions and answers
const questions = [
    { question: 'What does AI stand for?', answer: 'artificial intelligence' },
    { question: 'Who coined the term "artificial intelligence"?', answer: 'john mccarthy' },
    { question: 'What is machine learning?', answer: 'a subset of AI that allows machines to learn from data' },
    { question: 'What is the Turing Test?', answer: 'a test of a machine\'s ability to exhibit intelligent behavior' },
    { question: 'What is neural network?', answer: 'a set of algorithms, modeled loosely after the human brain' }
];

// Function to display the current question
function displayQuestion() {
    questionElement.textContent = questions[currentQuestionIndex].question;
}

// Function to check the answer
function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase().trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        score++;
        scoreValue.textContent = score;
        stackBlock();
        // Move to the next question
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        displayQuestion();
    } else {
        // Incorrect answer, restart the game
        alert('Incorrect answer. Restarting game...');
        resetGame();
    }

    // Clear the input field
    answerInput.value = '';
}

// Function to stack a block
function stackBlock() {
    if (stackHeight < 5) {
        const newBlock = document.createElement('div');
        newBlock.classList.add('block');
        newBlock.style.bottom = `${stackHeight * 20}px`; // Adjust the position of the block
        blocks.appendChild(newBlock);
        stackHeight++;
    }
}

// Function to reset the game
function resetGame() {
    score = 0;
    scoreValue.textContent = score;
    currentQuestionIndex = 0;
    stackHeight = 0;
    blocks.innerHTML = '';
    displayQuestion();
}

// Initial setup
displayQuestion();
