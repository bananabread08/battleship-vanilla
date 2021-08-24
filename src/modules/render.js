const render = (player, enemy) => {
  const playerBoardEl = document.querySelector('.playerboard');
  const enemyBoardEl = document.querySelector('.enemyboard');

  const clearElement = (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };

  clearElement(playerBoardEl);
  clearElement(enemyBoardEl);

  player.getBoard().forEach((row, xIndex) => {
    const rowBlock = document.createElement('div');
    rowBlock.classList.add('row', `${xIndex}`);
    row.forEach((column, yIndex) => {
      const columnBlock = document.createElement('div');
      columnBlock.classList.add('column', `${yIndex}`);
      if (column !== '0') columnBlock.classList.add(column);
      rowBlock.appendChild(columnBlock);
    });
    playerBoardEl.appendChild(rowBlock);
  });

  enemy.getBoard().forEach((row, xIndex) => {
    const rowBlock = document.createElement('div');
    rowBlock.classList.add('enemy', 'row', `${xIndex}`);
    row.forEach((column, yIndex) => {
      const columnBlock = document.createElement('div');
      columnBlock.classList.add('enemy', 'column', `${yIndex}`);
      if (column !== '0') columnBlock.classList.add(column);
      rowBlock.appendChild(columnBlock);
    });
    enemyBoardEl.appendChild(rowBlock);
  });
};
export default render;
