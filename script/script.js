
// question 1 start
var button_1 = document.getElementById("q_1_b_1");
var button_2 = document.getElementById("q_1_b_2");
var button_3 = document.getElementById("q_1_b_3");
var button_4 = document.getElementById("q_1_b_4");
var scoring = 0;
var questions = ["What is the capital of pakistan", "islamabad", "peshawar", "Multan", "karachi"]
var question_1 = document.getElementById("question-no-1").innerHTML = questions[0];
var ans;
for (var i = 0; i < questions.length; i++) {
    if (questions[i] === "islamabad") {
        button_1.addEventListener('click', () => {
            document.querySelector('.score').innerHTML = scoring = scoring + 10;
        })
    }
    else {
        button_2.addEventListener('click', () => {
            document.querySelector('.score').innerHTML = scoring;
        })

        button_3.addEventListener('click', () => {
            document.querySelector('.score').innerHTML = scoring;
        })

        button_4.addEventListener('click', () => {
            document.querySelector('.score').innerHTML = scoring;
        })
    }
}

// question-2
var button_1 = document.getElementById("q_2_b_1");
var button_2 = document.getElementById("q_2_b_2");
var button_3 = document.getElementById("q_2_b_3");
var button_4 = document.getElementById("q_2_b_4");
var scoring = 0;
var questions = ["What is the capital of india", "Delhi", "mumbai", "kolkatta", "kerala"]
var question_1 = document.getElementById("question-no-2").innerHTML = questions[0];
var ans;
for (var i = 0; i < questions.length; i++) {
    if (questions[i] === "Delhi") {
        button_1.addEventListener('click', () => {
            document.querySelector('.score').innerHTML = scoring = scoring + 10;
        })
    }
    else {
        button_2.addEventListener('click', () => {
            document.querySelector('.score').innerHTML = scoring;
        })

        button_3.addEventListener('click', () => {
            document.querySelector('.score').innerHTML = scoring;
        })

        button_4.addEventListener('click', () => {
            document.querySelector('.score').innerHTML = scoring;
        })
    }
}

// question-3
var button_1 = document.getElementById("q_3_b_1");
var button_2 = document.getElementById("q_3_b_2");
var button_3 = document.getElementById("q_3_b_3");
var button_4 = document.getElementById("q_3_b_4");
var scoring = 0;
var questions = ["What is the capital of KpK", "Peshawar", "bannu", "karak", "kohat"]
var question_1 = document.getElementById("question-no-3").innerHTML = questions[0];
var ans;
for (var i = 0; i < questions.length; i++) {
    if (questions[i] === "Peshawar") {
        button_1.addEventListener('click', () => {
            document.querySelector('.score').innerHTML = scoring = scoring + 10;
        })
    }
    else {
        button_2.addEventListener('click', () => {
            document.querySelector('.score').innerHTML = scoring;
        })

        button_3.addEventListener('click', () => {
            document.querySelector('.score').innerHTML = scoring;
        })

        button_4.addEventListener('click', () => {
            document.querySelector('.score').innerHTML = scoring;
        })
    }
}


function incorrect(usama){
    usama.style.backgroundColor = 'red';
}
function correct(usama){
    usama.style.backgroundColor = 'green';
    
}

