// Core
import React from 'react';
// import useStoreon from 'storeon/react';

import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
// import Styles from './style.module.css';

export const ColumnRight = () => {

  return (
    <>
      <div className = 'player__menu player__menu_direction_column'>
        <div className = 'player__menu-area'>
          <div className = 'button button_height_available player__button'><FontAwesomeIcon className = 'button__icon' icon = { faThumbsUp } /></div>
        </div>
        <div className = 'player__menu-area'>
          <div className = 'button button_height_available player__button'><FontAwesomeIcon className = 'button__icon' icon = { faThumbsDown } /></div>
        </div>
      </div>
    </>
  );
};
