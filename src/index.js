import playerFactory from './factories/playerFactory';
import gameboardFactory from './factories/gameboardFactory';
import render from './render';
import getAndSetShips from './getAndSetShips';
import './styles/style.css';

const player = playerFactory('you', gameboardFactory()).startGameboard();
const enemy = playerFactory('enemy', gameboardFactory()).startGameboard();

getAndSetShips(player);
getAndSetShips(enemy);
render(player, enemy);

let count = 0;
const message = document.querySelector('.messagelog');
document.querySelector('.button').addEventListener('click', (e) => {
  e.preventDefault();
  message.value = `${count}`;
  count++;
});
