// Quiz game js

// array of objects containing the quiz questions

const quizData = [
{
question: "What is the capital of France?",
options: ["London", "Paris", "Rome", "Berlin"],
answer: "Paris"
},
{
question: "What is the world's largest ocean",
options: ["Atlantic Ocean','Indian Ocean','Pacific Ocean','Southern Ocean"],
answer: "Pacific Ocean"
},

{
 question: "What is the tallest mountain in the world?",
 options: [' Mount Kilimanjaro','K2','Denali','Mount Everest'],
 answer: 'Mount Everest'
 },

 {
 question: "What is the capital city of Canada",
 options: ["Vancouver", "Montreal", "Toronto", "Ottawa"],
 answer: "Ottawa"
 },

];

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');
const submitButton = document.getElementById('submit-btn');
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;



function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = ''; // Clear existing options

    for (let i = 0; i < currentQuestion.options.length; i++) {
        const option = currentQuestion.options[i];

        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');

        button.addEventListener('click', () => {
            checkAnswer(option);
        });

        optionsElement.appendChild(button);
    }
}

// Function to check the selected answer
function checkAnswer(answer) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to show quiz result
function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.textContent = score;
}

// Event listener for submit button
submitButton.addEventListener('click', () => {
    // Validate if an option is selected
    const selectedOption = document.querySelector('button.option.active');
    if (selectedOption) {
        const answer = selectedOption.textContent;
        checkAnswer(answer);
    } else {
        alert('Please select an option.');
    }
});

// Event listener for restart button
restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
});

// Initial load
loadQuestion();
