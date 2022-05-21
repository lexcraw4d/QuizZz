let time = 10;
let startButtonEl = document.getElementById('start-btn');
let timerEl = document.getElementById('timer');
var timerId;
startButtonEl.addEventListener('click', startQuiz);



function startQuiz(){
    //start timer
    timerId = setInterval(counter, 1000)

    
}


function counter(){
    timerEl.textContent = time;
    if(time > 0) {
        time--
    }
};
