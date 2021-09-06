const checkLoser = (user) => user.shipArray.every((ship) => ship.isSunk());

export default checkLoser;
