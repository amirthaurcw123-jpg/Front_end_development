function registerUser(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(name=="" || email=="" || password==""){
        alert("Please fill all fields");
        return;
    }

    let user={
        name:name,
        email:email,
        password:password
    };

    localStorage.setItem("quizUser",JSON.stringify(user));

    alert("Registration Successful");
}

function loginUser(){

    let email=document.getElementById("loginEmail").value;
    let password=document.getElementById("loginPassword").value;

    let user=JSON.parse(localStorage.getItem("quizUser"));

    if(user==null){
        alert("Please Register First");
        return;
    }

    if(email==user.email && password==user.password){

        alert("Login Successful");

        window.location.href = "index.html";

    }else{

        alert("Invalid Email or Password");

    }

}