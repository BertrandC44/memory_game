// Constantes
const images = ["1", "2", "3", "4", "5", "6"]; // Tableau des images
let flippedCards = []; // Tableau des cartes retournées
let lockBoard = false; // Blocage du plateau
let oddFound = 0; // Tableau contrôler la fin de la partie
let cptTry=0; // Compteur du nombre d'essai

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

let plateauJeu = document.querySelector('.plateauJeu');
// console.log(plateauJeu);    //CONSOLE.LOG   

// Créer les cartes dans le HTML
shuffleImages.forEach((image) => {
    let card = document.createElement("div");
    plateauJeu.appendChild(card); // Ajoute les cartes comme enfant du plateau
    card.classList.add("carte");  // 

    // console.log(card.classList); //CONSOLE.LOG

    card.dataset.image = image; // Assigne le nom de l'image à la carte
    // console.log(card.dataset);  //CONSOLE.LOG
    card.innerHTML = `
        <div class="">
            <div class="card">
                <img src="medias/img${image}.png" alt="image" class="">
            </div>
        </div>   
    `;
    // console.log(`Carte créée pour image ${image}`); //CONSOLE.LOG

    // A pour effet de rendre invisible dès le départ
    let imgElement = card.querySelector('img');// Création d'un objet avec image comme sélecteur
    // console.log(imgElement); //CONSOLE.LOG
    imgElement.style.visibility = 'hidden'; // Rend l'image invisible

    // Détection de la touche espace
    addEventListener("keydown", (event) => {
        if (event.code=="Space") {
            window.location.reload();
            }
    })

    // Action sur un clic
    card.addEventListener("click", () => {
        cptTry++;
        if (lockBoard === true || card.classList.contains("flipped") === true) {
            return;
        } //Vérifie si le plateau est bloqué ou si la carte est déjà retournée et bloque le click si vrai 
        // Cela évite les clicks après deux sélection pendant le temps de latence de 3 secondes

        card.classList.add("flipped"); // Retourne la carte
        let img = card.querySelector('img'); // Indique l'image cliqué...
        img.style.visibility = 'visible';//...et la rend visible
        flippedCards.push(card); // Intègre la carte dans le tableau de comparaison des cartes retournées 


        if (flippedCards.length === 2) {
            lockBoard = true; // Permet de passer au blocage du plateau
            let card1 = flippedCards[0]; // Récupération des infos de la première carte sélectionnée
            let card2 = flippedCards[1]; // Récupération des infos de la seconde carte sélectionnée
            if (card1.dataset.image === card2.dataset.image){ // Comparaison des attributs data des images
                flippedCards = []; // Réinitialise le tableau de comparaison (Pas d'action sur les cartes)
                lockBoard = false; // Réinitialise le blocage du tableau
                oddFound++;
                if (oddFound==images.length){
                    setTimeout(() =>{
                        window.alert(`BRAVO!!! \n Vous avez fait ${cptTry} essais pour gagner la partie...`);
                    },1000);
                }
                // console.log(oddFound); //CONSOLE.LOG
            }else{
                setTimeout(() => {
                    card1.classList.remove("flipped"); // Retourne les...
                    card2.classList.remove("flipped"); // .....les cartes
                    card1.querySelector('img').style.visibility = 'hidden'; // Remet la visibilité ...
                    card2.querySelector('img').style.visibility = 'hidden'; //      ... de la carte à 'hidden'
                    flippedCards = []; // Réinitialise le tableau de comparaison (Pas d'action sur les cartes)
                    lockBoard = false;
                }, 1500);
            };
        };

    });
})