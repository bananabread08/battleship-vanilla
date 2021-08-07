const shipFactory = (length) => {
  // carrier [5], battleship[4], cruiser[3], submarine[2], destroyer[1]
  let name = '';

  switch (length) {
    case 6:
      name = 'carrier';
      break;
    case 5:
      name = 'battleship';
      break;
    case 4:
      name = 'frigate';
      break;
    case 3:
      name = 'submarine';
      break;
    case 2:
      name = 'destroyer';
      break;
    case 1:
      name = 'tanker';
      break;
    default:
      name = '';
  }

  if (length === undefined || length === 0) return 'Length cannot be 0';
  const axis = false; // false is horizontal axis

  const shipHP = new Array(length).fill('o'); // Ship life depending on length

  const isRotated = (rotation) => {
    if (rotation) return !axis;
    return axis;
  }; // change rotation

  const hit = () => {
    shipHP.pop();
  };

  const isSunk = () => shipHP.length === 0;

  return { length, isRotated, hit, isSunk, shipHP, axis, name };
};
export default shipFactory;
