// Vérifie la validité d'un email
function isEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Fonction de validation lors de la saisie
function isEmail(email) {
    if (!email) {
        return { valid: false, message: "Veuillez entrer un mail !" };
    }

    if (!isEmailValid(email)) {
        return { valid: false, message: "Vous n'avez pas rentré une adresse mail valide !" };
    }

    return { valid: true };
}

export { isEmail };