console.log('funguju');
//S každým kliknutím změň hodnotu proměnné currentPlayer na opačnou. Z circle na cross a naopak.

let currentPlayer = 'circle';
const currentPlayerSymbol = document.getElementById('currentPlayer');
function nextPlayer() {
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
  } else {
    currentPlayer = 'circle';
  }
  updateCurrentPlayerSymbol();
}
function updateCurrentPlayerSymbol() {
  if (currentPlayer === 'circle') {
    currentPlayerSymbol.innerHTML = '○';
  } else {
    currentPlayerSymbol.innerHTML = 'x';
  }
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.target.classList.add('circle');
  });
});
/* s child mi to nefunguje, dám jeden circle a konec! zjistit jak to jinak udělat.
const buttonElm = document.querySelectorAll('button:nth-child(2n)');
buttonElm.addEventListener('click', (event) =>
  event.target.classList.add('circle'),
);

// , else(
// event.target.classList.add('cross');)
//});*/
