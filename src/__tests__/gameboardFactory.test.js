import gameboardFactory from '../factories/gameboardFactory';
import shipFactory from '../factories/shipFactory';

const resetBoard = () => [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const shipTypes = {
  carrier: 6,
  battleship: 5,
  frigate: 4,
  submarine: 3,
  destroyer: 2,
  tanker: 1,
};

describe('Board Initialization', () => {
  const gameboard = gameboardFactory();
  test('make a 10 x 10 board', () => {
    const expected = resetBoard();
    expect(gameboard.getBoard()).toEqual(expected);
  });

  test('board column size must be 10', () => {
    expect(gameboard.getBoard().length).toBe(10);
  });

  test('board row size must be 10', () => {
    expect(gameboard.getBoard()[0].length).toBe(10);
  });
});

describe('Placing Ships / Set-Up Phase', () => {
  test('place ship to position (0,0)', () => {
    const gameboard = gameboardFactory();
    const expected = resetBoard();
    expected[0][0] = 'tanker';
    expect(gameboard.placeShip(shipFactory(1), 0, 0)).toEqual(expected);
  });

  test('place ship to any position', () => {
    const expected = resetBoard();
    const gameboard = gameboardFactory();
    const battleship = shipFactory(shipTypes.battleship);
    expected[1][3] = battleship.name;
    expected[1][4] = battleship.name;
    expected[1][5] = battleship.name;
    expected[1][6] = battleship.name;
    expected[1][7] = battleship.name;
    expect(gameboard.placeShip(battleship, 1, 3)).toEqual(expected);
  });

  test('place a rotated ship', () => {
    const expected = resetBoard();
    const gameboard = gameboardFactory();
    const carrier = shipFactory(shipTypes.carrier);
    carrier.axis = true;
    expected[2][4] = carrier.name;
    expected[3][4] = carrier.name;
    expected[4][4] = carrier.name;
    expected[5][4] = carrier.name;
    expected[6][4] = carrier.name;
    expected[7][4] = carrier.name;
    expect(gameboard.placeShip(carrier, 2, 4)).toEqual(expected);
  });

  test('ship out of bounds', () => {
    const expected = 'Out of Bounds';
    const gameboard = gameboardFactory();
    const carrier = shipFactory(shipTypes.carrier);
    carrier.axis = true;
    expect(gameboard.placeShip(carrier, 7, 5)).toEqual(expected);
  });

  test('ship overlaps another ship horizontally', () => {
    const expected = 'Overlaps another ship';
    const gameboard = gameboardFactory();
    const carrier = shipFactory(shipTypes.carrier);
    gameboard.placeShip(carrier, 0, 4);
    expect(gameboard.placeShip(carrier, 0, 4)).toBe(expected);
  });
  test('ship overlaps another ship vertically', () => {
    const expected = 'Overlaps another ship';
    const gameboard = gameboardFactory();
    const carrier = shipFactory(shipTypes.carrier);
    carrier.axis = true;
    gameboard.placeShip(carrier, 1, 4);
    expect(gameboard.placeShip(carrier, 0, 4)).toBe(expected);
  });

  test('ship overlaps another ship regardless of rotation', () => {
    const expected = 'Overlaps another ship';
    const gameboard = gameboardFactory();
    const carrier = shipFactory(shipTypes.carrier);
    const battleship = shipFactory(shipTypes.battleship);
    carrier.axis = true;
    battleship.axis = false;
    gameboard.placeShip(carrier, 1, 1);
    expect(gameboard.placeShip(battleship, 1, 0)).toBe(expected);
  });
});

describe('Firing Missiles / Attack Phase', () => {
  test('missile missed', () => {
    const expected = resetBoard();
    expected[1][2] = 'miss';
    const gameboard = gameboardFactory();
    expect(gameboard.fireMissile(1, 2)).toEqual(expected);
  });

  test('missile hit a ship', () => {
    const expected = resetBoard();
    expected[1][0] = 'submarine';
    expected[1][1] = 'submarine';
    expected[1][2] = 'hit';
    const gameboard = gameboardFactory();
    gameboard.placeShip(shipFactory(shipTypes.submarine), 1, 0);
    expect(gameboard.fireMissile(1, 2)).toEqual(expected);
  });

  test('missile sunk a ship', () => {
    const expected = resetBoard();
    const gameboard = gameboardFactory();
    const submarine = shipFactory(shipTypes.submarine);
    expected[1][0] = submarine.name;
    expected[1][1] = submarine.name;
    expected[1][2] = submarine.name;
    gameboard.placeShip(submarine, 1, 0);
    gameboard.fireMissile(1, 0);
    gameboard.fireMissile(1, 1);
    gameboard.fireMissile(1, 2);
    expect(submarine.isSunk()).toBeTruthy();
  });

  test('missile sunk the last ship', () => {
    const expected = resetBoard();
    const gameboard = gameboardFactory();
    const cruiser = shipFactory(shipTypes.cruiser);
    expected[1][0] = cruiser.name;
    expected[1][1] = cruiser.name;
    expected[1][2] = cruiser.name;
    gameboard.placeShip(cruiser, 1, 0);
    gameboard.fireMissile(1, 0);
    gameboard.fireMissile(1, 1);
    gameboard.fireMissile(1, 2);
    expect(gameboard.shipArray).toEqual([]);
  });
});
