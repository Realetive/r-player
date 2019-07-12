// Core
import React from 'react';
import screenfull from 'screenfull';
import { findDOMNode } from 'react-dom';

import { faClosedCaptioning, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import Styles from './style.module.css';

export const ScreenBar = (props) => {
  
  const { player } = props;

  const _onClickFullscreen = () => {
    screenfull.request(findDOMNode(player));
  };

  return (
    <>
      <div className = { Styles.screenBar }>
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
