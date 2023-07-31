const btnSub = document.querySelector("#subscribe");
var emailInput = document.querySelector("#email");
const error = document.querySelector(".message-error");
const janela = document.querySelector(".contect");
const janela2 = document.querySelector(".pop-content");
const close = document.querySelector("#close");


btnSub.addEventListener("click", function (){
    const valueEmail = document.querySelector("#email").value;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (valueEmail == ""){
        showErrorMessage("Valid email required");
    } 

    else if (regexEmail.test(valueEmail)){
        error.textContent = "";
        emailInput.style.border = "1px solid hsl(231, 7%, 60%)";
        emailInput.style.color = "hsl(4, 100%, 67%)";
        janela.style.display = "none";
        janela2.style.display = "block";
    }

    else {
        showErrorMessage("Valid email required");
    }
    
});

function showErrorMessage(message) {
    error.textContent = message;
    emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
    emailInput.style.background = "hsla(4, 100%, 67%, 0.11)";
    emailInput.classList.toggle("alterar");
  }