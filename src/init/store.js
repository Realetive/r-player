// Core
import createStore from 'storeon';

import playerEvent from './playerEvent';
import playerNode from './playerNode';
import playerState from './playerState';
import videoData from './videoData';

export const store = createStore(
  [
    playerEvent,
    playerState,
    playerNode,
    videoData,
    process.env.NODE_ENV !== 'production' && require('storeon/devtools')
  ]
);
