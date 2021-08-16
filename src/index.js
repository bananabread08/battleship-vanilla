import playerFactory from './factories/playerFactory';
import gameboardFactory from './factories/gameboardFactory';
import render from './render';
import getAndSetShips from './getAndSetShips';
import './styles/style.css';

let player;
let enemy;
const messageEl = document.querySelector('.message-log');
const randomizeButton = document.querySelector('.randomize');
const startButton = document.querySelector('.start');

// initial render
const randomizePlacement = () => {
  player = playerFactory('you', gameboardFactory()).startGameboard();
  enemy = playerFactory('enemy', gameboardFactory()).startGameboard();
  getAndSetShips(player);
  getAndSetShips(enemy);
  render(player, enemy);
  messageEl.textContent =
    'Click: Randomize to re-place ships. Start Game to begin!';
};

randomizePlacement();

const getRandomNumber = () => Math.floor(Math.random() * 10);

const checkWinner = (user) => user.shipArray.every((ship) => ship.isSunk());

const updateMessage = (state) => {
  if (state === 'miss') {
    messageEl.textContent = 'You missed! Try again.';
  }
  if (state === 'hit') messageEl.textContent = 'You hit a Ship, nice!';
};

// recursion if random (x,y) is not valid
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
    updateMessage(enemy.getBoard()[a][b]);
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
    if (checkWinner(enemy)) messageEl.textContent = 'Player Wins!';
    if (checkWinner(player)) messageEl.textContent = 'Enemy Wins!';
    document.querySelectorAll('.enemy.column').forEach((col) => {
      col.removeEventListener('click', playRound);
      col.addEventListener('click', playRound);
    });
  }
};

const startGame = () => {
  randomizeButton.style.display = 'none';
  startButton.style.display = 'none';
  messageEl.textContent = 'Game Start! Click an Enemy Grid!';
  document.querySelectorAll('.enemy.column').forEach((col) => {
    col.addEventListener('click', playRound);
  });
};

randomizeButton.addEventListener('click', randomizePlacement);
startButton.addEventListener('click', startGame);
