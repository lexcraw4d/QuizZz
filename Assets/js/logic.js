let currentIndex = 0;
var time = 60;
let startButtonEl = document.getElementById('start-btn');
let timerEl = document.getElementById('timer');
let questionEl = document.getElementById('questions');
let choicesEl = document.getElementById('choices');
let gameIntroEl = document.getElementById('game-intro');
let containerEl = document.getElementById('container');
// let correctEl = document.getElementById("correct");
let resultEl = document.getElementById("result");
let endGameEl = document.getElementById("endGame");
let timerFx;
//sound effects
let sfxRight = new Audio("Assets/sfx/smw_save_menu.wav");
let sfxIncorrect = new Audio ("Assets/sfx/smw_pipe.wav");


function startQuiz(){
    //hide main game introduction
    gameIntroEl.setAttribute('class','hide');
    //start timer
    timerFx = setInterval(counter, 1000);
    //Questions rendered
    displayQuestions();
}
function counter(){
    timerEl.textContent = time;
    if(time > 0) {
        time--
    }
};
function displayQuestions(){
    
    //increase currentindex on button click to go to the next question --> current index i++
    questionEl.removeAttribute('class', 'hide');
    choicesEl.removeAttribute('class', 'hide');

    //Assigning the index of current question and choices to respective containers
    let currentQuestion = questions[currentIndex];

    questionEl.textContent = currentQuestion.question;
    //Clear choices each time a new question is called to empty and render new btns
    choicesEl.textContent = "";
    
    //create a button for each choice using for each choice on displayed question
    currentQuestion.choices.forEach(function(choice) {
        // console.log(choice)
        let choiceBtns = document.createElement("button");

        choiceBtns.setAttribute("value",choice)
        
        choiceBtns.textContent = choice;
        
        //display on page
        choiceBtns.onclick = questionClick;
        choicesEl.appendChild(choiceBtns)
       
    }
)
    
}
function questionClick (event) {

  //console.log(parseInt(questions[currentIndex].answer))
  if (event.target.value != questions[currentIndex].answer){
    resultEl.textContent = 'Oops!';
    time -= 15;
    if (time <= 0) {
        timerEl.textContent = 0
        endGame();
      }
    //sound effects if wrong answer
    sfxIncorrect.play();
    nextQuestion();
  }
  else {
    resultEl.textContent = 'Correct!'
    // sound effect if correct
    sfxRight.play();
    time += 5;

    nextQuestion();
  } 
    // flash right/wrong based on response
     resultEl.setAttribute("class", "result")
     setTimeout(function() {
     resultEl.setAttribute("class", "result hide");
     }, 1000);
}

function nextQuestion() {
    
    if(currentIndex === questions.length - 1 ){
    endGame();
    }
    else{
    currentIndex++;
    displayQuestions();
    }
}

function endGame() {
    containerEl.setAttribute('class', 'hide')
    let octoCatImg = document.createElement('img');
    octoCatImg.src = "Assets/octocat.png";
    //stop timer
    clearInterval(timerFx);
    endGameEl.textContent = "Game Over!"
    endGameEl.appendChild(octoCatImg);
    
}


startButtonEl.addEventListener('click', startQuiz);