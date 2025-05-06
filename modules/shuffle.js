// const selectNbCards = document.getElementById('idSelect');

// selectNbCards.addEventListener('idSelect', (event) => {
// event.preventDefault(); // Empêche le rechargement
// let gameSelect = document.getElementById('idSelect').value;
// return gameSelect;
// });


// const nbCards= 12;
// console.log(nbCards);
// const arrayBase = [];
// const setShuffle = new Set();


// for (let i = 1; i < nbCards+1; i++) {
//   arrayBase.push(i);

// }
// console.log(arrayBase);


function shuffle(array) {
  let i = array.length;

  while (i != 0) {
    let randomI = Math.floor(Math.random() * i);
    i--;
    [array[i], array[randomI]] = [array[randomI], array[i]];
  }
  return array;
}
// const arrayGame=shuffle(array)
// console.log(arrayGame);

export {shuffle};



// Fonction shuffle v1
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }