// var question_array = ["what is the capital of pakistan, what is the capital of pakistan "]
// prompt(question_array);
// // if(question_array === "peshawar"){

// // }


function incorrect(usama){
    alert("Sorry incorred try Next time")
    usama.style.backgroundColor = 'red';
}
function Correct(usama){
    alert("Correct Answer")
    usama.style.backgroundColor = 'green';
}



function scoring(){
   

    var totalScore = document.getElementsByClassName('total')

    var que_1 = document.getElementById('q-1')
    var correctAnswer = document.getElementById('isl');
    if(que_1 === correctAnswer){
        total_score = total_score + 10;
        document.write(totalScore)
    }else{
        
    }
}
