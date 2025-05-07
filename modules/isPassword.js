// Vérifie la validité d'un mot de passe
function isPasswordValid(password) {
    const regex = /([0-9_-]*[a-z][0-9_-]*){3}/;
    return regex.test(password);
}

// Fonction exportée qui retourne vrai ou faux
function isPassword(password) {
    if (!password) {
        return { valid: false, message: "Veuillez entrer votre mot de passe !" };
    }

    if (!isPassword(password)) {
        return { valid: false, message: "Vous n'avez pas rentré un mot de passe valide !" };
    }

    return { valid: true };
}

export { isPassword };