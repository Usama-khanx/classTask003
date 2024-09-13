let questions = [
    {
        question : "What are the capital of Pakistan",
        options : [
            "Peshawar",
            "Islambad",
            "Karachi",
            "Lahore"
        ],
        answer : "Islambad"
    },

    // question 2

    {
        question : "which of the following is an Asian country",
        options : [
            "Australia",
            "London",
            "Japan",
            "Bangladesh"
        ],
        answer : "Bangladesh"
    },


    // question 3

    {
        question : "Extension of Cascading Style Sheet is",
        options : [
            ".css",
            ".js",
            ".HTML",
            ".cpp"
        ],
        answer : ".css"
    },

    // question 2

    {
        question : ".js is the extension of",
        options : [
            "Java",
            "JavaScript",
            "React js",
            "c++"
        ],
        answer : "JavaScript"
    },


];


let questionIndex = 0;
let questionArea = document.querySelector(".question h2");
let optionArea = document.querySelectorAll(".btn");

function initializeQuiz(){
    questionArea.textContent = questions[questionIndex].question;
    for(let i=0; i<optionArea.length; i++){
        optionArea[i].textContent = questions[questionIndex].options[i];
    }
}

initializeQuiz();

let marks = 0;
for (let i=0; i<optionArea.length; i++){
    optionArea[i].addEventListener('click', checkedoption);
}

var obj = this;
let correctSound = document.getElementById("correctSound");
let wrongSound = document.getElementById("wrongSound")
function checkedoption(){
    let correcAnswer = questions[questionIndex].answer;
    let selectedAnswer = this.textContent;

    if(correcAnswer === selectedAnswer){
        marks++;
        this.style.backgroundColor = 'green';
        this.style.color = 'white';
        //  this.textContent += ""
        // correctSound.play();
    }
    else{
        this.style.backgroundColor = 'red';
        this.style.color = 'white';
        this.textContent += ' x';

        for(let i=0; i<optionArea.length; i++){
            if (optionArea[i].textContent === questions[questionIndex].answer)
            {
                optionArea[i].style.backgroundColor = 'green';
                optionArea[i].style.color ='white';
                // optionArea[i].textContent +=' /'
                // wrongSound.play();
            }
        }
    }
    disableOption();
    questionIndex++;
}

//  quizGame wel
let quizGame = document.getElementById("quizGame");
function disableOption(){
    for(let i=0; i<optionArea.length; i++){
        optionArea[i].disabled = true;
    }
}

let resultSection = document.querySelector(".resultSection");
let resultSectionIndex = document.querySelector(".resultSection h1");
let nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener('click', moveNextQuestion);

function moveNextQuestion(){
    for(let i=0; i<optionArea.length; i++){
        optionArea[i].disabled = false;
        optionArea[i].style.backgroundColor='';
        optionArea[i].style.color = '';
    }
    if(questionIndex<optionArea.length){

        initializeQuiz();
    }
    else{
        alert("quiz completed")
        resultSection.style.display = 'block';
        quizGame.style.display = 'none';
        resultSectionIndex.textContent = `Your marks are ${marks} / ${questions.length}`;
       
    }
   
}

let restartBtn = document.getElementById("restart");
restartBtn.addEventListener('click', restartQuiz);

function restartQuiz(){
    marks = 0;
    questionIndex = 0;
    resultSection.style.display = 'none';
    quizGame.style.display = 'block'
    initializeQuiz();
}
