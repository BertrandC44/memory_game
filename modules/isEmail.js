// Vérifie la validité d'un email
function estEmailValide(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Fonction exportée qui retourne vrai ou faux
function emailValidator(email) {
    if (!email) {
        return { valid: false, message: "Veuillez entrer un mail !" };
    }

    if (!estEmailValide(email)) {
        return { valid: false, message: "Vous n'avez pas rentré une adresse mail valide !" };
    }

    return { valid: true };
}

export { emailValidator };