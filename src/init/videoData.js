
export default (store) => {
  store.on('@init', () => ({ videoData: null }));

  store.on('videoData/init', (state, videoData) => {

    return { videoData };
  });
};
