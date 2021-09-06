const domHandler = (() => {
  const messageEl = document.querySelector('.message-log');
  const randomizeButton = document.querySelector('.randomize');
  const startButton = document.querySelector('.start');
  const modal = document.getElementById('game-over');
  const modalText = document.querySelector('.last-message');
  const restartButton = document.querySelector('.restart');

  const updateMessage = (state) => {
    if (state === 'miss') {
      messageEl.textContent = 'You missed! Try again.';
    }
    if (state === 'hit') messageEl.textContent = 'You hit a Ship, nice!';
  };

  return {
    messageEl,
    randomizeButton,
    startButton,
    modal,
    modalText,
    restartButton,
    updateMessage,
  };
})();

export default domHandler;
