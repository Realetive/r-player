// Core
import createStore from 'storeon';

import playerEvent from './playerEvent';
import player from './player';
import videoData from './videoData';

export const store = createStore(
  [
    playerEvent,
    player,
    videoData,
    process.env.NODE_ENV !== 'production' && require('storeon/devtools')
  ]
);
