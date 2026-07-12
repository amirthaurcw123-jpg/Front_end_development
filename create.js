// Default questions (run only once)
if (!localStorage.getItem("quiz")) {

    alert("Default Questions Loaded");

    const quiz = [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"
            ],
            answer: 0
        },

        {
            question: "Which language is used for styling web pages?",
            options: [
                "HTML",
                "CSS",
                "Python",
                "Java"
            ],
            answer: 1
        },

         {
            question: "Which symbol is used for ID selector in CSS?",
            options: [
                ".",
                "#",
                "*",
                "@"
            ],
            answer: 1
        },
        

      {
    question:"Which HTML tag is used to insert an image?",
    options:[
        "&lt;img&gt;",
        "&lt;image&gt;",
        "&lt;picture&gt;",
        "&lt;src&gt;"
    ],
    answer:0
},
        {
            question:"Which language is used to style web pages?",
            options:[
                "Python",
                "HTML",
                "CSS",
                "JavaScript"],
answer:2
},

{
            question:"Which JavaScript keyword is used to declare a variable?",
            options:[
                "int",
                "let",
                "char",
                "define"],
answer:1
},

{
            question:"What does CSS stand for?",
            options:[
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
],
answer:0
},

{
    question:"Which HTML tag is used to create a hyperlink?",
    options:[
        "&lt;a&gt;",
        "&lt;link&gt;",
        "&lt;href&gt;",
        "&lt;url&gt;"
    ],
    answer:0
},

{
            question:"Which company developed JavaScript?",
            options:[
                "Microsoft",
                "Google",
                "Netscape",
                "Apple"],
answer:2
},

{
            question:"Which method is used to display a message box in JavaScript?",
            options:[
                "print()",
                "alert()",
                "display()",
                "message()"],
answer:1
},

{
            question:"Which property changes the text color in CSS?",
            options:[
                "font-color",
                "text-color",
                "color",
                "background-color"],
answer:2
},

{
    question:"Which HTML tag is used to create a table row?",
    options:[
        "&lt;td&gt;",
        "&lt;table&gt;",
        "&lt;tr&gt;",
        "&lt;th&gt;"
    ],
    answer:2
},


    ];



    localStorage.setItem("quiz", JSON.stringify(quiz));
}

function saveQuestion() {

    let question = document.getElementById("question").value;
    let option1 = document.getElementById("option1").value;
    let option2 = document.getElementById("option2").value;
    let option3 = document.getElementById("option3").value;
    let option4 = document.getElementById("option4").value;
    let answer = document.getElementById("answer").value;

    if (
        question == "" ||
        option1 == "" ||
        option2 == "" ||
        option3 == "" ||
        option4 == "" ||
        answer == ""
    ) {
        alert("Please fill all fields");
        return;
    }

    let quiz = JSON.parse(localStorage.getItem("quiz")) || [];

    quiz.push({
        question: question,
        options: [option1, option2, option3, option4],
        answer: Number(answer)
    });

    localStorage.setItem("quiz", JSON.stringify(quiz));

    alert("Question Saved Successfully");
}