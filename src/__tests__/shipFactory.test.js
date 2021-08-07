import shipFactory from '../factories/shipFactory';

test('Zero ship length', () => {
  expect(shipFactory(0)).toBe('Length cannot be 0');
});

test('returns an object', () => {
  const ship = shipFactory(1);
  expect(typeof ship).toBe('object');
});

test('returns ship length', () => {
  const three = shipFactory(3);
  const five = shipFactory(5);
  expect(three.length).toBe(3);
  expect(five.length).toBe(5);
});

test('hit with no position', () => {
  const ship = shipFactory(5);
  expect(ship.hit()).toBe(undefined);
});

test('successful Ship hit', () => {
  const ship = shipFactory(5);
  ship.hit();
  expect(ship.shipHP).toEqual(['o', 'o', 'o', 'o']);
});
test('rotate Ship', () => {
  const ship = shipFactory(3);
  expect(ship.isRotated(false)).toBe(false);
  expect(ship.isRotated(true)).toBe(true);
});
test('check if Ship is not sunk', () => {
  const ship = shipFactory(5);
  expect(ship.isSunk()).toBe(false);
});

test('succesfull sunk Ship', () => {
  const ship = shipFactory(5);
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
