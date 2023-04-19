import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

console.log('funguju');

let currentPlayer = 'circle';

const playerCross = `
  <svg class='cross' viewBox="0 0 20 20" width="18" height="20" style="display: inline; border-radius: 15%; fill: transparent;">
    <line x1="0" y1="0" x2="20" y2="20" stroke="white" stroke-width="2"/>
    <line x1="0" y1="20" x2="20" y2="0" stroke="white" stroke-width="2"/>
  </svg>
`;

const addMark = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('fieldCircle');
    event.target.disabled = true;
    const playerElm = document.querySelector('span.dot');
    playerElm.innerHTML = playerCross;
    currentPlayer = 'cross';
    console.log(currentPlayer);
  } else {
    event.target.classList.add('fieldCross');
    event.target.disabled = true;
    const crossElm = document.querySelector('.cross');
    console.log(crossElm);
    crossElm.remove();
    console.log(currentPlayer);
    currentPlayer = 'circle';
  }
  //The addMark function is called when a button is clicked. It adds the symbol of the current player (circle or cross) to the button and disables it. It also updates the player's symbol in the dot element.

  const dotElm = document.querySelector('span.dot');
  dotElm.style.borderColor =
    currentPlayer === 'cross' ? 'transparent' : 'rgb(255, 255, 255)';

  const playGame = Array.from(document.querySelectorAll('button')).map(
    (button) => {
      if (button.classList.contains('fieldCircle')) {
        return 'o';
      } else if (button.classList.contains('fieldCross')) {
        return 'x';
      }
      return '_';
    },
  );

  const winner = findWinner(playGame);
  if (winner === 'o' || winner === 'x') {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${winner}.`);
      location.reload();
    }, 300);
  } else if (winner === 'tie') {
    /*Pokud hra skončila remízou, zobraz o tom uživateli zprávu.*/
    setTimeout(() => {
      alert('Hra skončila remízou!');
      location.reload();
    }, 250);
  }
};

const buttonElm = document.querySelectorAll('button');
buttonElm.forEach((buttonElm) => {
  buttonElm.addEventListener('click', addMark);
});
//buttonElm variable selects all the buttons on the game board, and adds a click event listener to each one that calls the addMark function.

document.querySelector('.replay').addEventListener('click', (event) => {
  const userAnswer = confirm('Opravdu chceš začít znovu?');
  if (!userAnswer) {
    event.preventDefault();
  }
});
/*this code add click-event-listener to element with class "replay". If element is clicked, display with confirm dialog pop up. It asking user, if they want start over. For disabling the function (reloading page) is there event.preventDefault.*/
