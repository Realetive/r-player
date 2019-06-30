// Core
import createStore from 'storeon';

import player1 from './player1';
import videoData from './videoData';

export const store = createStore(
  [
    player1,
    videoData,
    process.env.NODE_ENV !== 'production' && require('storeon/devtools')
  ]
);
