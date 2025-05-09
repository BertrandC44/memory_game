import { isUserName } from "../modules/isUserName.js";
import { isEmail } from "../modules/isEmail.js";
import { isPassword } from "../modules/isPassword.js";

const form = document.getElementById('registrationForm');

form.addEventListener('submit', (event) =>{
    event.preventDefault(); // Empêche le rechargement

    const userName = document.getElementById('userName').value;
    console.log(userName); 
    const email = document.getElementById('userMail').value.trim();
    console.log(email);
    const password = document.getElementById('userPassword').value;
    console.log(password);
    const passwordConfirm = document.getElementById('userPasswordConfirm').value;
    console.log(passwordConfirm);

    const userNameResult = isUserName(userName);
    const emailResult = isEmail(email);
    const passwordResult = isPassword(password);

    if (!userNameResult.valid) return alert(userNameResult.message);
    if (!emailResult.valid) return alert(emailResult.message);
    if (!passwordResult.valid) return alert(passwordResult.message);
    if (password!=passwordConfirm){
        alert('Erreur : Vous n\'avez pas saisi le même mot de passe !!');
    }else{
        const user = {
            userName: userName,
            email: email,
            password: password,
        };
        // console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
        alert("Formulaire valide et enregistré !")
        setTimeout(() => {
        window.location.href = "connection.html";
        }, 1000);
    }
});

form.addEventListener('reset', (event) => {
    if (event.code == "Space") {
        window.location.reload();
    }
});

const userJSON = localStorage.getItem("user");
const user = JSON.parse(userJSON);
console.log(user);

