// Get Elements
    // Inputs
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var passwordConfirmation = document.getElementById("passwordConfirmation");

    // Continue Button
    var continueButton = document.getElementById("continue");
    
function registeredWindow() {
        if (username.value.length < 4) {
            username.style.border = "1.5px solid red";
            username.style.boxShadow = "0 0 5px red"

            console.log("username")

            alert("Nome de usuário inválido!")
        } else if (email.value.length < 8) {
            email.style.border = "1.5px solid red";
            email.style.boxShadow = "0 0 5px red"

            console.log("email");

            alert("E-mail inválido!")
        } else if (!email.value.includes("@")) {
            email.style.border = "1.5px solid red";
            email.style.boxShadow = "0 0 5px red"

            console.log("email sem arroba");

            alert("E-mail inválido!");
        } else if (password.value.length < 4) {
            password.style.border = "1.5px solid red";
            password.style.boxShadow = "0 0 5px red"


            alert("Senha inválida!");
        } else if (passwordConfirmation.value != password.value) {
            alert("As senhas não são iguais.")

        } else {
        console.log("window");
        var registered = document.getElementById("registered");
        var greetings = document.getElementById("greetings");
        var success = document.getElementById("success");

        registered.style.display = "block";

        greetings.innerHTML = "Olá, <b>" + username.value + "<b>";
        success.innerHTML = 'Sua conta foi criada com <span style="color= #53ae74">sucesso</span>.'


        continueButton.addEventListener("click", function() {
            registered.style.display = "none";
        }) 
    }
}