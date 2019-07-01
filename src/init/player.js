// const player = {
//   play: false,
// };

export default (store) => {
  store.on('@init', () => ({ player: {} }));

  store.on('player/init', (state, player) => {
    // player.play = true;
    console.log('player', player);

    return { player };
  });
  store.on('player/stop', ({ player }) => {
    player.play = false;

    return { player };
  });

};
