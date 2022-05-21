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
    // questionEl.textContent = "Questions will go here!";
    // choicesEl.textContent = "Answers will go here BaZiNgA!";

    //Assigning the index of current question and choices to respective containers
    let currentQuestion = questions[currentIndex].question;
    let currentChoices = questions[currentIndex].choices;

    questionEl.textContent = currentQuestion;

    //later change to append btns
    choicesEl.textContent = currentChoices;

    //create a button for each choice using for each choice on displayed question
    currentChoices.forEach(choice => {
        let choiceBtns = document.createElement("button");
        console.log(choice)
        choiceBtns.textContent = currentChoices;
        choicesEl.append(choiceBtns)
    });

}
function counter(){
    timerEl.textContent = time;
    if(time > 0) {
        time--
    }
};

startButtonEl.addEventListener('click', startQuiz);