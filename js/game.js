const userJSON = localStorage.getItem("user");
const user = JSON.parse(userJSON);
console.log(user);
const registeredUserName=user.userName;
console.log(registeredUserName);

document.getElementById('profileUserNameGame').textContent=`À vous de jouer, ${registeredUserName} !`;


// Constantes & Variables
const images = ["1", "2", "3", "4", "5", "6"]; // Tableau des images
let flippedCards = []; // Tableau des cartes retournées
let lockBoard = false; // Blocage du plateau
let oddFound = 0; // Tableau contrôler la fin de la partie
let cptTry=0; // Compteur du nombre d'essai
let nbEssai = new Set();
let Today = Date();

// // Nombre de cartes
// addEventListener("click", () => {
//     let choiceNbCards = document.querySelector(".idSelect").value;
//     return
// });
// console.log(choiceNbCards);    //CONSOLE.LOG
// if (choiceNbCards != 12){
//      switch (choiceNbCards) {
//         case 14 :
//             images.push("7");
//             break;
//         case 16 :
//             images.push("7", "8");
//             break;
//         case 18 :
//             images.push("7", "8", "9");
//             break;
//         case 20 :
//             images.push("7", "8", "9", "10");
//             break;
//     } 
// }
// console.log(images);

//dupliquer les cartes et le mélanger
//... : opérateur qui décompose un tableau pour dupliquer, en gros ca transforme en deux imagesJeu
//sort trie les elements, de maniere perso avec math random
let doubleImages = [...images, ...images]

function shuffleImg (doubleImages) { // Fonction pour mélanger le tableau d'images
    for (let i = doubleImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = doubleImages[i];
        doubleImages[i] = doubleImages[j];
        doubleImages[j] = temp;
    }
    return doubleImages
}

let shuffleImages = shuffleImg(doubleImages)

let deckGame = document.querySelector('.deckGame');
// console.log(plateauJeu);    //CONSOLE.LOG   

// Créer les cartes dans le HTML
shuffleImages.forEach((image) => {
    let card = document.createElement("div");
    deckGame.appendChild(card); // Ajoute les cartes comme enfant du plateau
    card.classList.add("card");  // 

    // console.log(card.classList); //CONSOLE.LOG

    card.dataset.image = image; // Assigne le nom de l'image à la carte
    // console.log(card.dataset);  //CONSOLE.LOG
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <img src="medias/question.png" alt="imagequestion">
            </div>
            <div class="card-back">
                <img src="medias/img${image}.png" alt="image">
            </div>
        </div>
    `;
    // console.log(`Carte créée pour image ${image}`); //CONSOLE.LOG

    // A pour effet de rendre invisible dès le départ
    let imgElement = card.querySelector('img');// Création d'un objet avec image comme sélecteur
    // console.log(imgElement); //CONSOLE.LOG


    // Détection de la touche espace
    addEventListener("keydown", (event) => {
        if (event.code=="Space") {
            window.location.reload();
            }
    })

    // Action sur un clic
    card.addEventListener("click", () => {
        if (lockBoard === true || card.classList.contains("flipped") === true) {
            return;
        } //Vérifie si le plateau est bloqué ou si la carte est déjà retournée et bloque le click si vrai 
        // Cela évite les clicks après deux sélection pendant le temps de latence de 3 secondes

        card.classList.add("flipped"); // Retourne la carte
        let img = card.querySelector('img'); // Indique l'image cliqué...
        flippedCards.push(card); // Intègre la carte dans le tableau de comparaison des cartes retournées 


        if (flippedCards.length === 2) {
            lockBoard = true; // Permet de passer au blocage du plateau
            let card1 = flippedCards[0]; // Récupération des infos de la première carte sélectionnée
            let card2 = flippedCards[1]; // Récupération des infos de la seconde carte sélectionnée
            if (card1.dataset.image === card2.dataset.image){ // Comparaison des attributs data des images
                card1.classList.add("matched"); // Retourne les...
                card2.classList.add("matched");
                flippedCards = []; // Réinitialise le tableau de comparaison (Pas d'action sur les cartes)
                lockBoard = false; // Réinitialise le blocage du tableau
                oddFound++;
                cptTry++;

                if (oddFound==images.length){

                    document.getElementById('nbEssai').textContent=`Bravo!!!! Vous avez réalisé ${cptTry} essais pour finir le jeu!`;
                    setTimeout(() => {
                    const gameRegister = {
                        userName: registeredUserName,
                        score: cptTry,
                        date: Today
                    };
                    localStorage.setItem("gameRegister", JSON.stringify(gameRegister));
                    alert("Partie enregistrée !")
                    }, 1500);
                }
            }else{
                setTimeout(() => {
                    card1.classList.remove("flipped"); // Retourne les...
                    card2.classList.remove("flipped"); // .....les cartes
                    flippedCards = []; // Réinitialise le tableau de comparaison (Pas d'action sur les cartes)
                    lockBoard = false;
                    cptTry++;

                }, 1500);
            };
        };
    });
})

