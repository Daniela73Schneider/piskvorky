console.log('funguju');

let currentPlayer = 'circle';

const playerCross = `
  <svg class = 'cross' viewBox="0 0 20 20" width="18" height="20" style="display: inline; border-radius: 15%; fill: transparent ;">
    <line x1="0" y1="0" x2="20" y2="20" stroke="white" stroke-width="2"/>
    <line x1="0" y1="20" x2="20" y2="0" stroke="white" stroke-width="2"/>
  </svg>
`;

const buttonElm = document.querySelector('button');
const button2 = document.querySelector('button:nth-child(2)');
const button3 = document.querySelector('button:nth-child(3)');
const button4 = document.querySelector('button:nth-child(4)');
const button5 = document.querySelector('button:nth-child(5)');
const button6 = document.querySelector('button:nth-child(6)');
const button7 = document.querySelector('button:nth-child(7)');
const button8 = document.querySelector('button:nth-child(8)');
const button9 = document.querySelector('button:nth-child(9)');
const button10 = document.querySelector('button:nth-child(10)');

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
  const dotElm = document.querySelector('span.dot');
  dotElm.style.borderColor =
    currentPlayer === 'cross' ? 'transparent' : 'rgb(255, 255, 255)';
  console.log(dotElm, 'toto je dotelm');
};

buttonElm.addEventListener('click', addMark);
button2.addEventListener('click', addMark);
button3.addEventListener('click', addMark);
button4.addEventListener('click', addMark);
button5.addEventListener('click', addMark);
button6.addEventListener('click', addMark);
button7.addEventListener('click', addMark);
button8.addEventListener('click', addMark);
button9.addEventListener('click', addMark);
button10.addEventListener('click', addMark);
