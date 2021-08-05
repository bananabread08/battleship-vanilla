import playerFactory from './factories/playerFactory';
import gameboardFactory from './factories/gameboardFactory';
import render from './render';
import getAndSetShips from './getAndSetShips';
import './styles/style.css';

const player = playerFactory('you', gameboardFactory()).startGameboard();
const enemy = playerFactory('enemy', gameboardFactory()).startGameboard();
// const playerTurn = true;

getAndSetShips(player);
getAndSetShips(enemy);
render(player, enemy);

const playRound = (e) => {
  enemy.fireMissile(
    Number(e.target.parentNode.classList[2]),
    Number(e.target.classList[2])
  );

  render(player, enemy);

  document.querySelectorAll('.enemy.column').forEach((col) => {
    col.addEventListener('click', playRound);
  });
};

document.querySelectorAll('.enemy.column').forEach((col) => {
  col.addEventListener('click', playRound);
});
