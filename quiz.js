// Array of programming languages, their descriptions, and questions
const programmingLanguages = [
    { name: "JavaScript", description: "A high-level programming language primarily used for web development.", question: "Which programming language is commonly used for web development?" },
    { name: "Python", description: "An interpreted, high-level, general-purpose programming language known for its simplicity and readability.", question: "Which programming language is known for its simplicity and readability?" },
    { name: "Java", description: "A class-based, object-oriented programming language designed to have as few implementation dependencies as possible.", question: "Which programming language is known for its platform independence?" },
    { name: "C++", description: "A general-purpose programming language created as an extension of the C programming language, with added object-oriented features.", question: "Which programming language is an extension of the C programming language?" },
    { name: "Ruby", description: "A dynamic, reflective, object-oriented, general-purpose programming language known for its simplicity and productivity.", question: "Which programming language is known for its productivity?" },
    { name: "Swift", description: "A general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, iPadOS, macOS, watchOS, and tvOS app development.", question: "Which programming language is developed by Apple Inc. for iOS app development?" }
];

// Select a random programming language
let randomLanguage;
let attempts = 0;

// Function to display a new question and description
function displayNewQuestion() {
    randomLanguage = programmingLanguages[Math.floor(Math.random() * programmingLanguages.length)];
    document.getElementById("question").innerText = randomLanguage.question;
    document.getElementById("description").innerText = randomLanguage.description;
    document.getElementById("feedback").innerText = "";
    document.getElementById("submitBtn").disabled = false;
    document.getElementById("guessInput").value = "";
    document.getElementById("nextBtn").style.display = "none"; // Hide the next button
}

// Function to check the user's guess
function checkGuess() {
    const userGuess = document.getElementById("guessInput").value.toLowerCase();

    if (userGuess === randomLanguage.name.toLowerCase()) {
        document.getElementById("feedback").innerText = "Congrats from BitBuilders!";
        document.getElementById("submitBtn").disabled = true;
        document.getElementById("nextBtn").style.display = "block"; // Show the next button
    } else {
        document.getElementById("feedback").innerText = "Try again!";
    }

    attempts++;
}

// Function to display the next question
function nextQuestion() {
    displayNewQuestion();
    document.getElementById("nextBtn").style.display = "none"; // Hide the next button again
}

// Event listeners
document.getElementById("submitBtn").addEventListener("click", checkGuess);
document.getElementById("nextBtn").addEventListener("click", nextQuestion);

// Initial display of a random question and description
displayNewQuestion();
