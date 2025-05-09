import { isEmail } from "../modules/isEmail.js";
import { isPassword } from "../modules/isPassword.js";

const form = document.getElementById('connectionForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le rechargement

    const email = document.getElementById('userMail').value.trim();
    console.log(email);
    const password = document.getElementById('userPassword').value;
    console.log(password);

    const emailResult = isEmail(email);
    const passwordResult = isPassword(password);

    if (!emailResult.valid) return alert(emailResult.message);
    if (!passwordResult.valid) return alert(passwordResult.message);

    const userJSON = localStorage.getItem("user");
    const user = JSON.parse(userJSON);
    console.log(user);
    const registeredEmail=user.email;
    const registeredPassword=user.password;

    if (registeredEmail==email && registeredPassword==password) {
        alert(`L\'email ${email} est connecté`);
        setTimeout(() => {
            window.location.href = "profile.html";
        }, 1000);
        return true
    } else if (registeredEmail==email && registeredPassword!=password) {
        alert(`Mauvais mot de passe... \nVeuillez le saisir à nouveau!`);
        return false
    } else {
        alert('Erreur de connexion ! \n Veuillez saisir les informations correctes');
        return false
    }
});
console.log();


form.addEventListener('reset', (event) => {
    if (event.code == "Space") {
        window.location.reload();
    }
});

// if (form.addEventListener()==true) {
//     const userJSON = localStorage.getItem("user");
//     const user = JSON.parse(userJSON);
//     console.log(user);
//     const registeredEmail = user.email;
//     const registeredUserName = user.userName;
//     console.log(registeredPassword);
// }


// export { registeredEmail, registeredUserName }


