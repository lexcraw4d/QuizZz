let time = 10;
let currentIndex = 0;
let startButtonEl = document.getElementById('start-btn');
let timerEl = document.getElementById('timer');
let questionEl = document.getElementById('questions');
let choicesEl = document.getElementById('choices');
let gameIntroEl = document.getElementById('game-intro');
let timerId;


function startQuiz(){
    //hide main game introduction
    gameIntroEl.setAttribute('class','hide');
    //start timer
    timerId = setInterval(counter, 1000);
    //Questions rendered
    displayQuestions();
}
function displayQuestions(){
    //set attributes to removeAttribut('class', 'hide') on questionsEl and 
    //iterate over questions at each index
    //display question and choices at each index given
    //
    //increase currentindex on button click to go to the next question --> current index i++
    questionEl.removeAttribute('class', 'hide');
    choicesEl.removeAttribute('class', 'hide');
    questionEl.textContent = "Questions will go here!";
    choicesEl.textContent = "Answers will go here BaZiNgA!";
}
function counter(){
    timerEl.textContent = time;
    if(time > 0) {
        time--
    }
};

startButtonEl.addEventListener('click', startQuiz);