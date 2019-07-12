// Core
import React from 'react';
import useStoreon from 'storeon/react';

import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Instruments
import { format } from '../../instruments/helpers';

// Styles
import Styles from './style.module.css';

export const VolumeBar = () => {
  const { dispatch, playerEvent, playerState } = useStoreon(
    'playerEvent',
    'playerState',
    'playerNode'
  );
  const { volume, muted, duration } = playerEvent;
  const { played } = playerState;

  const _setVolume = (e) => {
    dispatch('event/volume', parseFloat(e.target.value));
  };

  const _toggleMuted = () => {
    dispatch('event/muted', !muted);
  };

  return (
    <>
      <div className = { Styles.volumeBar }>
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
        <div className = 'timing'>{`${format(duration * played)} / ${format(
          duration
        )}`}</div>
      </div>
    </>
  );
};
