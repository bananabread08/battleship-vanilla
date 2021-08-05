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

const getRandomNumber = () => Math.floor(Math.random() * 9);

// play 1 round. fire missile to enemy, enemy fires to player
const playRound = (e) => {
  if (
    enemy.fireMissile(
      Number(e.target.parentNode.classList[2]),
      Number(e.target.classList[2])
    ) === 'invalid'
  )
    return;
  enemy.fireMissile(
    Number(e.target.parentNode.classList[2]),
    Number(e.target.classList[2])
  );
  while (
    player.fireMissile(getRandomNumber(), getRandomNumber()) === 'invalid'
  ) {
    player.fireMissile(getRandomNumber(), getRandomNumber());
  }
  render(player, enemy);

  document.querySelectorAll('.enemy.column').forEach((col) => {
    col.addEventListener('click', playRound);
  });
};

// event starter
document.querySelectorAll('.enemy.column').forEach((col) => {
  col.addEventListener('click', playRound);
});
