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

// Instruments
import { format } from '../../instruments/helpers';

export const PlayerFrame = (props) => {
  const { dispatch, videoData, playerEvent, playerState } = useStoreon(
    'videoData',
    'playerEvent',
    'playerState',
    'playerNode'
  );
  const { volume, muted, duration } = playerEvent;
  const { played } = playerState;
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
  console.log('duration', format(duration));

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
        <div className = 'timing'>{`${format(duration * played)} / ${format(duration)}`}</div>
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
