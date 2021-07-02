const playerFactory = (name, board) => {
  const playerTurn = true;

  const getName = () => name;

  const startGameboard = () => board;

  return { playerTurn, getName, startGameboard };
};

export default playerFactory;
