const render = (player, enemy) => {
  const playerBoardEl = document.querySelector('.playerboard');
  const enemyBoardEl = document.querySelector('.enemyboard');

  player.getBoard().forEach((row) => {
    const rowBlock = document.createElement('div');
    rowBlock.classList.add('row');
    row.forEach((column) => {
      const columnBlock = document.createElement('div');
      columnBlock.classList.add('column');
      if (column !== '0') columnBlock.classList.add(column);
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
      if (column !== '0') columnBlock.classList.add(column);
      rowBlock.appendChild(columnBlock);
    });
    enemyBoardEl.appendChild(rowBlock);
  });
};
export default render;
