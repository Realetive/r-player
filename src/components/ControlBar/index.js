// Core
import React from 'react';
import useStoreon from 'storeon/react';

import {
  faPause,
  faPlay,
  faStepForward,
  faStepBackward,
  faFastForward,
  faFastBackward
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ControlBar = (props) => {
  const { dispatch, player, playerEvent, videoData } = useStoreon(
    'playerEvent',
    'player',
    'videoData'
  );

  const { play } = playerEvent;

  const _playToggle = () => {
    dispatch('event/play', !play);
  };

  return (
    <>
      <div className = 'player__side-footer'>
        <div className = 'player__menu player__menu_direction_row'>
          <div className = 'button player__button'>
            <FontAwesomeIcon className = 'button__icon' icon = { faFastBackward } />
          </div>
          <div className = 'button player__button'>
            <FontAwesomeIcon className = 'button__icon' icon = { faStepBackward } />
          </div>
          <div className = 'player__menu-area'>
            <div
              className = 'button button_width_available player__button'
              onClick = { _playToggle }>
              <FontAwesomeIcon
                className = 'button__icon'
                icon = { play ? faPause : faPlay }
              />
            </div>
          </div>
          <div className = 'button player__button'>
            <FontAwesomeIcon className = 'button__icon' icon = { faStepForward } />
          </div>
          <div className = 'button player__button'>
            <FontAwesomeIcon className = 'button__icon' icon = { faFastForward } />
          </div>
        </div>
      </div>
    </>
  );
};
