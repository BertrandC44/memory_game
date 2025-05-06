// Vérifie la validité d'un mot de passe
function estPasswordValide(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regex.test(password);
}

// Fonction exportée qui retourne vrai ou faux
function passwordValidator(password) {
    if (!password) {
        return { valid: false, message: "Veuillez entrer votre mot de passe !" };
    }

    if (!estPasswordValide(password)) {
        return { valid: false, message: "Vous n'avez pas rentré un mot de passe valide !" };
    }

    return { valid: true };
}

export { passwordValidator };