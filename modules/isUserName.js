// Vérifie la validité d'un userName
function isUserNameValid(userName) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Fonction exportée qui retourne vrai ou faux
function isUserName(email) {
    if (!email) {
        return { valid: false, message: "Veuillez entrer un mail !" };
    }

    if (!isUserName(email)) {
        return { valid: false, message: "Vous n'avez pas rentré une adresse mail valide !" };
    }

    return { valid: true };
}

export { isUserName };