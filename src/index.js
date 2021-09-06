import playerFactory from './factories/playerFactory';
import gameboardFactory from './factories/gameboardFactory';
import render from './modules/render';
import getAndSetShips from './modules/getAndSetShips';
import './styles/style.css';
import getRandomNumber from './modules/getRandomNumber';
import checkLoser from './modules/checkLoser';
import domHandler from './modules/domHandler';

let player;
let enemy;

const randomizePlacement = () => {
  player = playerFactory('you', gameboardFactory()).startGameboard();
  enemy = playerFactory('enemy', gameboardFactory()).startGameboard();
  getAndSetShips(player);
  getAndSetShips(enemy);
  render(player, enemy);
  domHandler.messageEl.textContent =
    'Click: Randomize to re-place ships. Start Game to begin!';
};

// # initial render #
randomizePlacement();

// # recursion if random (x,y) is not valid #
const enemyTurn = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();
  if (player.getBoard()[x][y] === 'miss' || player.getBoard()[x][y] === 'hit') {
    enemyTurn();
  }
  return player.fireMissile(x, y);
};

// eslint-disable-next-line consistent-return
const playerTurn = (e) => {
  const a = Number(e.target.parentNode.classList[2]);
  const b = Number(e.target.classList[2]);
  if (enemy.getBoard()[a][b] !== 'miss' && enemy.getBoard()[a][b] !== 'hit') {
    enemy.fireMissile(a, b);
    domHandler.updateMessage(enemy.getBoard()[a][b]);
  } else return 'invalid';
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
    if (checkLoser(enemy)) {
      domHandler.messageEl.textContent = 'You win!';
      domHandler.modalText.textContent =
        'Game Over! You destroyed all enemy ships. You Win!';
      domHandler.modal.style.display = 'block';
    }
    if (checkLoser(player)) {
      domHandler.messageEl.textContent = 'Enemy Wins!';
      domHandler.modalText.textContent =
        'Game Over! Enemy destroyed all your ships! Enemy Wins!';
      domHandler.modal.style.display = 'block';
    }
    document.querySelectorAll('.enemy.column').forEach((col) => {
      col.removeEventListener('click', playRound);
      col.addEventListener('click', playRound);
    });
  }
};

const startGame = () => {
  domHandler.randomizeButton.disabled = true;
  domHandler.startButton.disabled = true;
  domHandler.messageEl.textContent =
    'Game Start! Click a Square in the Enemy Board!';
  document.querySelectorAll('.enemy.column').forEach((col) => {
    col.addEventListener('click', playRound);
  });
};

domHandler.randomizeButton.addEventListener('click', randomizePlacement);
domHandler.startButton.addEventListener('click', startGame);
domHandler.restartButton.addEventListener('click', () => {
  domHandler.modal.style.display = 'none';
  domHandler.randomizeButton.disabled = false;
  domHandler.startButton.disabled = false;
  randomizePlacement();
});
