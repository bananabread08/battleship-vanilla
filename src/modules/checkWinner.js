const checkWinner = (user) => user.shipArray.every((ship) => ship.isSunk());

export default checkWinner;
