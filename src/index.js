import playerFactory from './factories/playerFactory';
import gameboardFactory from './factories/gameboardFactory';
import render from './render';
import getAndSetShips from './getAndSetShips';
import './styles/style.css';

const player = playerFactory('you', gameboardFactory()).startGameboard();
const enemy = playerFactory('enemy', gameboardFactory()).startGameboard();

// initial render
getAndSetShips(player);
getAndSetShips(enemy);
render(player, enemy);
console.log(player.shipArray);

const getRandomNumber = () => Math.floor(Math.random() * 9);

// recursion if random (x,y) is not valid
const enemyTurn = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();
  if (player.getBoard()[x][y] === 'miss' || player.getBoard()[x][y] === 'hit') {
    enemyTurn();
  }
  player.fireMissile(x, y);
  // console.log(player.shipArray);
};

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
  // console.log(enemy.shipArray);
  enemyTurn();
  render(player, enemy);

  document.querySelectorAll('.enemy.column').forEach((col) => {
    col.addEventListener('click', playRound);
  });
};

// event starter
document.querySelectorAll('.enemy.column').forEach((col) => {
  col.addEventListener('click', playRound);
});
