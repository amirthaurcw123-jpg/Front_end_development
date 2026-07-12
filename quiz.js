let quiz = JSON.parse(localStorage.getItem("quiz")) || [];
console.log(quiz);
alert(quiz.length);

let currentQuestion = 0;
let score = 0;

function loadQuestion(){

    if(quiz.length==0){

        document.getElementById("question").innerHTML="No Questions Available";

        return;

    }

    let q = quiz[currentQuestion];

    document.getElementById("question").innerHTML=
    (currentQuestion+1)+". "+q.question;

    let options="";

    q.options.forEach(function(option,index){

        options += `
        <div class="option"
        onclick="checkAnswer(${index})">

        ${option}

        </div>
        `;

    });

    document.getElementById("options").innerHTML=options;

}

function checkAnswer(selected){

    if(selected==quiz[currentQuestion].answer){

        score++;

        alert("Correct Answer");

    }else{

        alert("Wrong Answer");

    }

    nextQuestion();

}

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion<quiz.length){

        loadQuestion();

    }else{

        submitQuiz();

    }

}

function submitQuiz(){

    localStorage.setItem("score",score);

    localStorage.setItem("total",quiz.length);

    window.location.href="result.html";

}
  
loadQuestion();