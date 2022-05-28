let time = 40;
let currentIndex = 0;
let startButtonEl = document.getElementById('start-btn');
let timerEl = document.getElementById('timer');
let questionEl = document.getElementById('questions');
let choicesEl = document.getElementById('choices');
let gameIntroEl = document.getElementById('game-intro');
let containerEl = document.querySelector(".container");
let correctEl = document.getElementById("correct");
let wrongEl = document.getElementById("wrong");
let timerId;


//sound effects
let sfxRight = new Audio("Assets/sfx/smw_save_menu.wav");
let sfxIncorrect = new Audio ("Assets/sfx/smw_pipe.wav");


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
    //increase currentindex on button click to go to the next question --> current index i++
    questionEl.removeAttribute('class', 'hide');
    choicesEl.removeAttribute('class', 'hide');
    // questionEl.textContent = "Questions will go here!";
    // choicesEl.textContent = "Answers will go here BaZiNgA!";

    //Assigning the index of current question and choices to respective containers
    let currentQuestion = questions[currentIndex];

    questionEl.textContent = currentQuestion.question;
    //Clear choices each time a new question is called to empty and render new btns
    choicesEl.textContent = "";
    //later change to append btns
    //create a button for each choice using for each choice on displayed question
    currentQuestion.choices.forEach(function(choice) {
        console.log(choice)
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
//time penality 
//console.log(parseInt(questions[currentIndex].answer))
  if (event.target.value != questions[currentIndex].answer){
    sfxIncorrect.play();
    time = time -10;
    nextQuestion();
  }
  else {
    sfxRight.play();
    time = time + 5;
    nextQuestion();
  } 
}

function nextQuestion() {
    if(currentIndex === questions.length - 1){
    endGame();
    } 
    else{
    currentIndex++;
    displayQuestions();
    }
}

function endGame() {
    let octoCatImg = document.createElement('img');
    octoCatImg.src = "Assets/octocat.png";
    alert ("Game Over")
    //stop timer
    clearInterval(timerId);
    //show screen element game over
    questionEl.textContent = "Game over.";
    choicesEl.textContent = "";

   
    choicesEl.appendChild(octoCatImg);
    
}
function counter(){
    timerEl.textContent = time;
    if(time > 0) {
        time--
    }
};

startButtonEl.addEventListener('click', startQuiz);