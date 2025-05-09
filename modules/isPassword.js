// Vérifie la validité d'un mot de passe
function isPasswordValid(password) {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
    return regex.test(password);
}

// Fonction de validation lors de la saisie
function isPassword(password) {
    if (!password) {
        return { valid: false, message: "Veuillez entrer votre mot de passe !" };
    }

    if (!isPasswordValid(password)) {
        return { valid: false, message: "Vous n'avez pas rentré un mot de passe valide !" };
    }

    return { valid: true };
}

export { isPassword };