const player1 = {
  play: false,
};

export default (store) => {
  store.on('@init', () => ({ player1 }));

  store.on('player/play', ({ player1 }) => {
    player1.play = true;

    return { player1 };
  });
  store.on('player/stop', ({ player1 }) => {
    player1.play = false;

    return { player1 };
  });

};
