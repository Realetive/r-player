export default (store) => {
  store.on('@init', () => ({ playerState: {
    loaded:        0,
    loadedSeconds: 0,
    played:        0,
    playedSeconds: 0,
  } }));

  store.on('playerState/update', (state, playerState) => {

    return { playerState };
  });
  store.on('playerState/played', (state, played) => {
    const { playerState } = store.get();

    playerState.played = played;
    console.log('playerState',playerState);

    return { playerState };
  });

};
