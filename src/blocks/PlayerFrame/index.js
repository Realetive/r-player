// Core
import React, { Component, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
// import connect from 'storeon/react/connect';
import useStoreon from 'storeon/react';

import {
  faVolumeUp,
  faClosedCaptioning,
  faDesktop

} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PlayerFrame = () => {

  const { dispatch, videoData, playerEvent } = useStoreon('videoData', 'playerEvent', 'playerState', 'playerNode');
  const { play } = playerEvent;

  const [player, _setPlayer] = useState(null);

  const ref = (data) => {
    _setPlayer(data);
  };

  useEffect(() => {
    dispatch('playerNode/init', player);
  }, [player]);

  const _onProgress = (updateState) => {
    if (!playerEvent.seeking) {

      dispatch('playerState/update', updateState);
    }
  };

  const _test = () => {
    console.log('object');
  };

  if (videoData === null) {
    return null;
  }

  const { data, width, height } = videoData;

  return (
    <>
      <div className = 'player__frame'>
        <div className = 'player__content'>
          <button onClick = { _test }>Test</button>
          <ReactPlayer
            config = { { youtube: {
              playerVars: { controls: 0 },
            } } }
            height = { height }
            playing = { play }
            ref = { ref }
            url = { data.video }
            width = { width }
            onProgress = { _onProgress }
          />

        </div>
        <div className = 'player__menu player__menu_direction_row'>
          <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faVolumeUp } /></div>
          <div className = 'volume'>
            <input type = 'range' />
          </div>
          <div className = 'timing'>3:34 / 4:58</div>
          <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faClosedCaptioning } /></div>
          <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faDesktop } /></div>
        </div>
      </div>
    </>
  );
};
