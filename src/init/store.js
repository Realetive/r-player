// Core
import createStore from 'storeon';

import player1 from './player1';

export const store = createStore(
  [
    player1,
    process.env.NODE_ENV !== 'production' && require('storeon/devtools')
  ]
);
