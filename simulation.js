// Define a pool of related cybersecurity scenarios
const cybersecurityScenarios = [
    {
        scenario: "A new malware strain, dubbed 'DarkRansom,' is discovered targeting the company's network. It encrypts critical files and demands payment in cryptocurrency.",
        options: [
            "Isolate infected systems and restore from backups.",
            "Negotiate with attackers and pay the ransom."
        ],
        correctOption: 0
    },
    {
        scenario: "As the investigation unfolds, it is revealed that an employee inadvertently downloaded the malware from a phishing email that bypassed the email filters.",
        options: [
            "Enhance employee cybersecurity training and awareness programs.",
            "Implement stricter email filtering policies."
        ],
        correctOption: 0
    },
    {
        scenario: "Further analysis indicates that the attackers gained initial access to the network through an unpatched vulnerability in a widely used software application.",
        options: [
            "Implement regular patch management procedures.",
            "Ignore the vulnerability and focus on other security measures."
        ],
        correctOption: 0
    },
    {
        scenario: "The company's incident response team successfully mitigates the attack, but executives are concerned about potential data breaches and regulatory fines.",
        options: [
            "Conduct a thorough forensic investigation to assess the extent of data exposure.",
            "Assume that no sensitive data was compromised and move on."
        ],
        correctOption: 0
    },
    {
        scenario: "Customer trust and investor confidence are shaken, leading to a decline in the company's stock price and public reputation.",
        options: [
            "Implement a transparent communication strategy to address stakeholders' concerns.",
            "Downplay the incident and avoid public disclosure."
        ],
        correctOption: 0
    },
    {
        scenario: "Regulatory authorities launch an investigation into the incident, requiring the company to provide detailed reports and evidence of compliance.",
        options: [
            "Cooperate fully with regulatory authorities and provide all requested information.",
            "Withhold information to avoid legal repercussions."
        ],
        correctOption: 0
    },
    {
        scenario: "The company learns valuable lessons from the incident and implements robust cybersecurity measures to prevent future attacks and maintain trust with stakeholders.",
        options: [
            "Invest in ongoing security training, testing, and technology upgrades.",
            "Continue with existing security practices without changes."
        ],
        correctOption: 0
    }
];

// Shuffle the array of scenarios to randomize the order
cybersecurityScenarios.sort(() => Math.random() - 0.5);

// Initialize game variables
let currentQuestionIndex = 0;
let score = 0;

// Function to display the scenario brief and start simulation button
function displayScenarioBrief() {
    const scenarioBrief = document.getElementById("scenario-brief");
    scenarioBrief.innerHTML = "<p>In the wake of a cyberattack, your company faces a series of challenges that require decisive action and strategic decision-making. As a member of the incident response team, your task is to navigate through the crisis, mitigate the damage, and safeguard the company's assets and reputation.</p><p>Are you ready to start the simulation?</p>";

    const startButton = document.getElementById("start-simulation");
    startButton.addEventListener("click", startSimulation);
}

// Function to start the simulation
function startSimulation() {
    document.getElementById("scenario-brief").style.display = "none";
    document.getElementById("start-simulation").style.display = "none";
    document.getElementById("progress").innerText = ""; // Clear progress text
    displayQuestion();
}

// Function to display the current cybersecurity question and response options
function displayQuestion() {
    const currentScenario = cybersecurityScenarios[currentQuestionIndex];
    document.getElementById("question").innerText = currentScenario.scenario;
    const options = document.querySelectorAll(".response-option");
    options.forEach((option, index) => {
        option.innerText = currentScenario.options[index];
        option.addEventListener("click", () => checkResponse(index, currentScenario.correctOption));
    });
}

// Function to check the player's response
function checkResponse(selectedOption, correctOption) {
    if (selectedOption === correctOption) {
        score += 100 / 7; // Increase score by 100 divided by the number of questions
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < 7) {
        displayQuestion();
    } else {
        endSimulation();
    }
}

// Function to end the simulation
function endSimulation() {
    document.getElementById("question").innerText = "Simulation complete. Thank you for participating!";
    document.getElementById("options").style.display = "none";
    document.getElementById("progress").innerText = `Final Simulation Percentage: ${score.toFixed(2)}%`; // Fix the score to 2 decimal places
    
    const newSimulationButton = document.createElement("button");
    newSimulationButton.innerText = "Start New Simulation";
    newSimulationButton.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        displayQuestion();
        document.getElementById("progress").innerText = ""; // Clear progress text
        newSimulationButton.remove(); // Remove the button after starting a new simulation
    });

    document.getElementById("progress").appendChild(newSimulationButton);
}

// Start by displaying the scenario brief and start simulation button
displayScenarioBrief();
