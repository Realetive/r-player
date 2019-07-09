export default (store) => {
  store.on('@init', () => ({ playerNode: null }));

  store.on('playerNode/init', (state, playerNode) => {

    // console.log('playerNode', playerNode);
    // console.log('data', data);
    // playerNode = data;
    // console.log('playerNode2', playerNode);

    return { playerNode };

    // await store.dispatch('playerNode/test', playerNode);
  });
  // store.on('playerNode/test', (state, playerNode) => {
  //   // playerNode = data;

  //   return { playerNode };
  // });

};
