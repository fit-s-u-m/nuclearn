'use client'
const questions = [
    {
        question: "Q1",
        answers: ["C1", "C2", "C3", "C4"],
        correctAnswer: "C2"
    },
    {
        question: "Q1",
        answers: ["C1", "C2", "C3", "C4"],
        correctAnswer: "C2"
    },
    {
        question: "Q1",
        answers: ["C1", "C2", "C3", "C4"],
        correctAnswer: "C2"
    },
    {
        question: "Q1",
        answers: ["C1", "C2", "C3", "C4"],
        correctAnswer: "C2"
    },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionText = document.getElementById('question');
    const answerList = document.getElementById('answer-list');
    questionText.innerText = questions[currentQuestionIndex].question;
    answerList.innerHTML = '';

    questions[currentQuestionIndex].answers.forEach(answer => {
        const li = document.createElement('li');
        li.innerText = answer;
        li.onclick = function() { selectAnswer(answer); };
        answerList.appendChild(li);
    });
}

function selectAnswer(answer) {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
        score++;
    }
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const result = document.getElementById('result');
    let level;
    switch (true) {
        case (score === questions.length):
            level = "Expert";
            break;
        case (score >= questions.length * 0.75):
            level = "Intermediate";
            break;
        case (score >= questions.length * 0.5):
            level = "Enthusiast";
            break;
        default:
            level = "Biginner";
    }
    result.innerHTML = `<h2>You answered ${score} out of ${questions.length} correctly - ${level}</h2>`;
    result.innerHTML += `<button onclick="goToHome()">Restart</button>`; // Add "Home" button
    document.getElementById('question').innerText = ''; // Clear question
    document.getElementById('answer-list').innerHTML = ''; // Clear answer list
    document.querySelector('button').style.display = 'none'; // Hide next button
}


function nextQuestion() {
    displayQuestion();
}

function goToHome() {
    window.location.href = "index.html";
}


