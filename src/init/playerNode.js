export default (store) => {
  store.on('@init', () => ({ playerNode: null }));

  store.on('playerNode/init', (state, playerNode) => {
    
    return { playerNode };
  });

};
