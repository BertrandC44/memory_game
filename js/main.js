

// Tableau des images
const images = [
    "1", "2", "3", "4",
    "5", "6"
];
 
//dupliquer les cartes et le mélanger
//... : opérateur qui décompose un tableau pour dupliquer, en gros ca transforme en deux imagesJeu
//sort trie les elements, de maniere perso avec math random
let shuffleImg = [...images, ...images].sort(() => 0.5 - Math.random());

const plateauJeu = document.querySelector('.plateauJeu');

// Créer les cartes dans le HTML
shuffleImg.forEach((image) => {
    const cards = document.createElement("div");
    plateauJeu.appendChild(cards);
    cards.classList.add("carte");
    cards.dataset.image = image;
    cards.innerHTML = `
        <div >
            <div class="">
                <img src="medias/img${image}.png" alt="image" classe="mystery">
            </div>
        </div>
    `;
    // A pour effet de rendre invisible dès le départ
    const imgElement = cards.querySelector('img');
    imgElement.style.visibility = 'hidden'; // Rend l'image invisible

    // Action sur un clic
    cards.addEventListener("click", () => {
    cards.classList.add("flipped");
    
    // Lors du flip, rendre l'image visible
    if (cards.classList.contains("flipped")) {

        imgElement.style.visibility = 'visible'; // Rendre l'image visible lors du flip
    } else {
        imgElement.style.visibility = 'hidden'; // Remettre l'image invisible lors du retour
    }
    });

});


// const cptOdd = 0;
// const cptMax = images.length;
// do {

// } while (cpt <=cptMax);
    



//     let i = 0 // compteur
//     while (i<2) {
//         i++;
//     }
        //  const tabControl = []
        // tabControl.push = cards.src;
// shuffleImg.forEach((image) => {
// const cards = document.createElement("div");
// cards.addEventListener("click", () => {
//     // Contrôle des valeurs
// const tabControl = []
//     tabControl.push = cards.nodeName;
//     console.log(tabControl);
// // for (let i = 0; i < 2; i++) {

    
// // }
// // if (tabControl[0]==tabControl[1]) {

// // }
// })
// })






// Créer les cartes mystères de remplacement des images



 














// // Détection de la touche espace
// document.addEventListener("keydown", function (event) {
//     if (event.code === "Space") {
//         event.preventDefault(); // empêche le scroll vers le bas
//         updateGridImages();     // relance le mélange
//     }
// });
