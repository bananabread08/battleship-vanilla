import playerFactory from './factories/playerFactory';
import gameboardFactory from './factories/gameboardFactory';
import './styles/style.css';

const playerBoardEl = document.querySelector('.playerboard');
const enemyBoardEl = document.querySelector('.enemyboard');
const player = playerFactory('you', gameboardFactory()).startGameboard();
const enemy = playerFactory('enemy', gameboardFactory()).startGameboard();

player.getBoard().forEach((row) => {
  const rowBlock = document.createElement('div');
  rowBlock.classList.add('row');
  row.forEach((column) => {
    const columnBlock = document.createElement('div');
    columnBlock.classList.add('column');
    rowBlock.appendChild(columnBlock);
  });
  playerBoardEl.appendChild(rowBlock);
});

enemy.getBoard().forEach((row) => {
  const rowBlock = document.createElement('div');
  rowBlock.classList.add('row');
  row.forEach((column) => {
    const columnBlock = document.createElement('div');
    columnBlock.classList.add('column');
    rowBlock.appendChild(columnBlock);
  });
  enemyBoardEl.appendChild(rowBlock);
});
