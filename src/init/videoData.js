
export default (store) => {
  store.on('@init', () => ({ videoData: {} }));

  store.on('videoData/init', (state, videoData) => {

    return { videoData };
  });

 

};
