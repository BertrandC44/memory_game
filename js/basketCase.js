'use strict';

var cardsArray = [{
  'name': 'shell',
  'img': 'img/blueshell.png'
}, {
  'name': 'star',
  'img': 'img/star.png'
}, {
  'name': 'bobomb',
  'img': 'img/bobomb.png'
}, {
  'name': 'mario',
  'img': 'img/mario.png'
}, {
  'name': 'luigi',
  'img': 'img/luigi.png'
}, {
  'name': 'peach',
  'img': 'img/peach.png'
}, {
  'name': '1up',
  'img': 'img/1up.png'
}, {
  'name': 'mushroom',
  'img': 'img/mushroom.png'
}, {
  'name': 'thwomp',
  'img': 'img/thwomp.png'
}, {
  'name': 'bulletbill',
  'img': 'img/bulletbill.png'
}, {
  'name': 'coin',
  'img': 'img/coin.png'
}, {
  'name': 'goomba',
  'img': 'img/goomba.png'
}];

var gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;

var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function (item) {
  var name = item.name,
      img = item.img;


  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  var front = document.createElement('div');
  front.classList.add('front');

  var back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

var match = function match() {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
  });
};

var resetGuesses = function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', function (event) {

  var clicked = event.target;

  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});



























































// // Sélectionne le conteneur et les .box
// const grid = document.getElementById("grid");
// const boxes = Array.from(grid); // convertit en tableau

// // Mélange les box
// shuffle(boxes);
// console.log(boxes);


// // Vide le conteneur
// grid.innerHTML = "";

// // Réinsère les box dans le nouvel ordre
// boxes.forEach(box => {
//     grid.appendChild(box); // les ajoute dans le nouvel ordre
// });


// // Tableau des images
// const images = [
//     "img1.png", "img2.png", "img3.png", "img4.png",
//     "img5.png", "img6.png"
// ];

// // Mélange
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }


 
// //dupliquer les cartes et le mélanger
// //... : opérateur qui décompose un tableau pour dupliquer, en gros ca transforme en deux imagesJeu
// //sort trie les elements, de maniere perso avec math random
// let shuffleImg = [...images, ...images].sort(() => 0.5 - Math.random());


// const plateauJeu = document.querySelector('.plateauJeu');

// // Créer les cartes dans le HTML
// shuffleImg.forEach((image, index) => {
//     const carte = document.createElement("div");
//     plateauJeu.appendChild(carte);
//     carte.classList.add("carte");
//     carte.dataset.image = image;
//     carte.innerHTML = `
//         <div class="flip-box-inner">
//             <div class="flip-box-front"></div>
//             <div class="flip-box-back">
//                 <img src="medias/${image}" alt="image">
//             </div>
//         </div>
//     `;
//     carte.addEventListener("click", () => {
//     carte.classList.toggle("flipped");
//     });
// });


// Créer les cartes mystères de remplacement des images


let carteRetournee = [];

shuffleImg.forEach((image, index) => {
    const cards = document.createElement("div");
    cards.classList.add("carte");
    cards.dataset.image = image;

    cards.innerHTML = `
        <div class="flip-box-inner">
            <div class="flip-box-front"></div>
            <div class="flip-box-back">
                <img src="medias/${image}" alt="image">
            </div>
        </div>
    `;

    cards.addEventListener("click", () => {
        if (carteRetournee.length < 2) {
            cards.classList.toggle("flipped");
            carteRetournee.push(cards);

            if (carteRetournee.length === 2) {
                if (carteRetournee[0].dataset.image === carteRetournee[1].dataset.image) {
                    // Si les cartes sont identiques, laisser les cartes retournées
                    carteRetournee = [];
                } else {
                    // Si les cartes sont différentes, retourner les cartes après un délai
                    setTimeout(() => {
                        carteRetournee[0].classList.remove("flipped");
                        carteRetournee[1].classList.remove("flipped");
                        carteRetournee = [];
                    }, 1000); // Retourne les cartes après 1 seconde
                }
            }
        }
    });

    fragment.appendChild(cards);
});

plateauJeu.appendChild(fragment);

 

shuffleImg.forEach((image, index) => {
    const cards = document.createElement("div");
    cards.classList.add("carte");
    cards.dataset.image = image;

    cards.innerHTML = `
        <div class="flip-box-inner">
            <div class="flip-box-front"></div>
            <div class="flip-box-back">
                <img src="medias/${image}" alt="image">
            </div>
        </div>
    `;

    // Rendre l'image invisible dès le départ
    const imgElement = cards.querySelector('img');
    imgElement.style.visibility = 'hidden'; // Rend l'image invisible

    cards.addEventListener("click", () => {
        cards.classList.toggle("flipped");
        // Lors du flip, rendre l'image visible
        if (cards.classList.contains("flipped")) {
            imgElement.style.visibility = 'visible'; // Rendre l'image visible lors du flip
        } else {
            imgElement.style.visibility = 'hidden'; // Remettre l'image invisible lors du retour
        }
    });

    fragment.appendChild(cards);
});

plateauJeu.appendChild(fragment);






// import {shuffle} from "../modules/shuffle.js";



// // Sélectionne le conteneur et les .box
// const grid = document.getElementById("grid");
// const boxes = Array.from(grid); // convertit en tableau

// // Mélange les box
// shuffle(boxes);
// console.log(boxes);


// // Vide le conteneur
// grid.innerHTML = "";

// // Réinsère les box dans le nouvel ordre
// boxes.forEach(box => {
//     grid.appendChild(box); // les ajoute dans le nouvel ordre
// });







// // Détection de la touche espace
// document.addEventListener("keydown", function (event) {
//     if (event.code === "Space") {
//         event.preventDefault(); // empêche le scroll vers le bas
//         updateGridImages();     // relance le mélange
//     }
// });
