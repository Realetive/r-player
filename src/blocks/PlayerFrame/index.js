// Core
import React, { useState, useEffect } from 'react';
import { findDOMNode } from 'react-dom';
import useStoreon from 'storeon/react';
import screenfull from 'screenfull';

import {
  faVolumeUp,
  faVolumeMute,
  faClosedCaptioning,
  faDesktop
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PlayerFrame = (props) => {
  const { dispatch, videoData, playerEvent } = useStoreon(
    'videoData',
    'playerEvent',
    'playerState',
    'playerNode'
  );
  const { play, volume, muted } = playerEvent;
  const { player } = props;

  const _setVolume = (e) => {
    dispatch('event/volume', parseFloat(e.target.value));
  };

  const _toggleMuted = () => {
    dispatch('event/muted', !muted);
  };
  const _onClickFullscreen = () => {
    screenfull.request(findDOMNode(player));
  };

  // if (videoData === null) {
  //   return null;
  // }

  return (
    <>
      <div className = 'player__menu player__menu_direction_row'>
        <div className = 'button player__button' onClick = { _toggleMuted }>
          <FontAwesomeIcon
            className = 'button__icon'
            icon = { muted ? faVolumeMute : faVolumeUp }
          />
        </div>
        <div className = 'volume'>
          <input
            max = { 1 }
            min = { 0 }
            step = 'any'
            type = 'range'
            value = { volume }
            onChange = { _setVolume }
          />
        </div>
        <div className = 'timing'>3:34 / 4:58</div>
        <div className = 'button player__button'>
          <FontAwesomeIcon className = 'button__icon' icon = { faClosedCaptioning } />
        </div>
        <div className = 'button player__button' onClick = { _onClickFullscreen }>
          <FontAwesomeIcon className = 'button__icon' icon = { faDesktop } />
        </div>
      </div>
    </>
  );
};
