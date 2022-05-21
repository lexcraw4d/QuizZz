let time = 10;
let currentIndex = 0;
let startButtonEl = document.getElementById('start-btn');
let timerEl = document.getElementById('timer');
let questionEl = document.getElementById('questions');
var gameIntroEl = document.getElementById('game-intro');
var timerId;


function startQuiz(){
    //hide main game introduction
    gameIntroEl.setAttribute('class','hide');
    //start timer
    timerId = setInterval(counter, 1000);
}
function displayQuestions(){

}
function counter(){
    timerEl.textContent = time;
    if(time > 0) {
        time--
    }
};

startButtonEl.addEventListener('click', startQuiz);