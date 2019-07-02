const playerEvent = {
  play:     false,
  progress: 0,
};

export default (store) => {
  store.on('@init', () => ({ playerEvent }));

  store.on('event/play', (state, event) => {
    playerEvent.play = event;

    return { playerEvent };
  });

  store.on('event/progress', (state, number) => {
    playerEvent.progress = number;

    return { playerEvent };
  });

};
