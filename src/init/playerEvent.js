const playerEvent = {
  play:     false,
  volume:   0.8,
  progress: 0,
  node:     null,
  seeking:  false,
  muted:    false,
  duration: 0,
};

export default (store) => {
  store.on('@init', () => ({ playerEvent }));

  store.on('event/play', (state, event) => {
    playerEvent.play = event;

    return { playerEvent };
  });
  store.on('event/volume', (state, volume) => {
    playerEvent.volume = volume;

    return { playerEvent };
  });
  store.on('event/muted', (state, event) => {
    playerEvent.muted = event;

    return { playerEvent };
  });
  store.on('event/duration', (state, duration) => {
    playerEvent.duration = duration;

    return { playerEvent };
  });
  store.on('event/seeking', (state, event) => {
    playerEvent.seeking = event;

    return { playerEvent };
  });
};
