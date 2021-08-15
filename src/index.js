import playerFactory from './factories/playerFactory';
import gameboardFactory from './factories/gameboardFactory';
import render from './render';
import getAndSetShips from './getAndSetShips';
import './styles/style.css';

const player = playerFactory('you', gameboardFactory()).startGameboard();
const enemy = playerFactory('enemy', gameboardFactory()).startGameboard();
const messageEl = document.querySelector('.messagelog');

// initial render
getAndSetShips(player);
getAndSetShips(enemy);
render(player, enemy);

const getRandomNumber = () => Math.floor(Math.random() * 9);

const checkWinner = (user) => user.shipArray.every((ship) => ship.isSunk());

//  const updateMessage = (state) => (state ? 'Your Turn' : 'Enemy Turn');

// recursion if random (x,y) is not valid
const enemyTurn = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();
  if (player.getBoard()[x][y] === 'miss' || player.getBoard()[x][y] === 'hit') {
    enemyTurn();
  }
  return player.fireMissile(x, y);
};

const playerTurn = (e) => {
  if (
    enemy.getBoard()[Number(e.target.parentNode.classList[2])][
      Number(e.target.classList[2])
    ] === 'miss' ||
    enemy.getBoard()[Number(e.target.parentNode.classList[2])][
      Number(e.target.classList[2])
    ] === 'hit'
  )
    return 'invalid';
  return enemy.fireMissile(
    Number(e.target.parentNode.classList[2]),
    Number(e.target.classList[2])
  );
};

// play 1 round. fire missile to enemy, enemy fires to player
const playRound = (e) => {
  if (playerTurn(e) === 'invalid') {
    document.querySelectorAll('.enemy.column').forEach((col) => {
      col.removeEventListener('click', playRound);
      col.addEventListener('click', playRound);
    });
  } else {
    enemyTurn();
    render(player, enemy);
    if (checkWinner(enemy)) messageEl.textContent = 'Player Wins!';
    if (checkWinner(player)) messageEl.textContent = 'Enemy Wins!';
    document.querySelectorAll('.enemy.column').forEach((col) => {
      col.removeEventListener('click', playRound);
      col.addEventListener('click', playRound);
    });
  }
};

// event starter
document.querySelectorAll('.enemy.column').forEach((col) => {
  col.addEventListener('click', playRound);
});
