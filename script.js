var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start');
var timeLeft = 75;

startBtn.addEventListener('click', function () {
    setInterval(function () {
        timeLeft -= 1;
        timerEl.textContent = timeLeft;
    }, 1000);
})


var quizData = [
    {
        question: "Who won the Superbowl in 2022?",
        a: "49ers",
        b: "Bengals",
        c: "Broncos",
        d: "Rams",
        correct: "d",
    },
    {
        question: "Which NBA team is in Utah?",
        a: "Nets",
        b: "Bulls",
        c: "Jazz",
        d: "Nuggets",
        correct: "c",
    },
    {
        question: "Will Donovan Mitchell be traded?",
        a: "Yes",
        b: "No",
        c: "Maybe",
        d: "I don't know",
        correct: "a",
    },
];

var quiz = document.getElementById('quiz');
var answerEls = document.querySelectorAll('.answer');
var questionEl = document.getElementById('question');
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var nextBtn = document.getElementById('next'); 

let currentQuiz = 0
let score = 0

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    var currenQuizData = quizData[currentQuiz];
    questionEl.innerText = currenQuizData.question;
    a_text.innerText = currenQuizData.a;
    b_text.innerText = currenQuizData.b;
    c_text.innerText = currenQuizData.c;
    d_text.innerText = currenQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false);
}

function getSelected() {
    let answerEl;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer;
}

nextBtn.addEventListener('click', () => {
    var answer = getSelected() 
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        `
    }
}
})








// var timerEl = document.getElementById("timer");
// var startButton = document.getElementById('start');
// var questionContainerEl = document.getElementById('question-container');
// var questionEl = document.getElementById('question');
// var answerButtonsEl = document.getElementById('answer-buttons');
// var shuffledQuestions;

// startButton.addEventListener('click', startQuiz);


// function startQuiz() {
//     console.log('Started');
//     startButton.classList.add('hide');
//     currentQuestionIndex = 0;
//     questionContainerEl.classList.remove('hide');
//     setNextQuestion();
// };

// function setNextQuestion() {
//     showQuestion(shuffledQuestions[currentQuestionIndex])
// };

// function showQuestion(question) {
//     questionEl.innerText = question.question;
// };

// function selectAnswer() {

// };

// var questions = {
//         question: '',
//         answers: [],
//         correctAnswer: 
//     };


// function countdown() {
// }
