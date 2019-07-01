const playerEvent = {
  play: false,
};

export default (store) => {
  store.on('@init', () => ({ playerEvent }));

  store.on('event/play', (state, event) => {
    playerEvent.play = event;

    return { playerEvent };
  });

};
