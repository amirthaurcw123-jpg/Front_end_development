let score = Number(localStorage.getItem("score"));
let total = Number(localStorage.getItem("total"));

document.getElementById("score").innerHTML =
"Your Score : " + score + " / " + total;

let percentage = (score / total) * 100;

document.getElementById("percentage").innerHTML =
"Percentage : " + percentage.toFixed(2) + "%";

function restartQuiz(){

    window.location.href = "quiz.html";

}