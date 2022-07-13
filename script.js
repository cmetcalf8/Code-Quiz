var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start');
var timeLeft = 75;
var container = document.querySelector('.container');
var questionContainer = document.querySelector('.question-container');
var timerinterval;

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

var finalScore = document.getElementById('final-score');
var quizLength = document.getElementById('quiz-length');
var initials = document.getElementById('initials');
var submit = document.getElementById('submit');
var endQuiz = document.querySelector('.end-quiz');


// Timer starts at 75 and countsdown by seconds
startBtn.addEventListener('click', function () {
    loadQuiz();
    container.style.display = 'none';
    questionContainer.style.display = 'block';
    timerinterval = setInterval(function () {
        timeLeft -= 1;
        timerEl.textContent = timeLeft;
    }, 1000);

})

// Set of questions
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
        } else {
            timeLeft -= 15;
            if(timeLeft < 0) {
                timeLeft = 0;
            }
            timerEl.textContent = timeLeft;
        }

    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        gameOver()
    }
})

function gameOver(){
    // quiz.innerHTML = `
    // <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    // `

    //Hide the quiz view
    questionContainer.style.display = 'none';
    //Show the end Quiz view
    endQuiz.style.display = 'block';
    //Populate the final score and quiz length variables
    finalScore.textContent = score;
    quizLength.textContent = quizData.length;

    // Stop timer
    clearInterval(timerinterval)
}

submit.addEventListener('click', saveScores)

function saveScores (){

    var allScores = JSON.parse(localStorage.getItem('scores')) || [];

    var newScore = {
        initials: initials.value,
        score: score
    }

    allScores.push(newScore)

    localStorage.setItem('scores', JSON.stringify(allScores))
    
}