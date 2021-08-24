import shipFactory from '../factories/shipFactory';

const getAndSetShips = (user) => {
  const placedShips = [];
  const rotation = [true, false];
  let i = 1;
  while (placedShips.length < 6) {
    const currentShip = shipFactory(i);
    currentShip.axis = rotation[Math.round(Math.random())];
    const testShip = user.placeShip(
      currentShip,
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100)
    );
    if (testShip !== 'Out of Bounds' && testShip !== 'Overlaps another ship') {
      placedShips.push(currentShip);
      i++;
    }
  }
};
export default getAndSetShips;
