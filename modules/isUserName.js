// Vérifie la validité d'un userName
function isUserNameValid(userName) {
    const regex = /([0-9_-]*[a-z][0-9_-]*){3}/;
    return regex.test(userName);
}
console.log(isUserNameValid());

// Fonction de validation lors de la saisie
function isUserName(userName) {
    if (!userName) {
        return { valid: false, message: "Vous n'avez pas rentré de nom d'utilisateur !" };
    }

    if (!isUserNameValid(userName)) {
        return { valid: false, message: "Veuillez saisir au moins 3 caractères !" };
    }

    return { valid: true };
}

export { isUserName };