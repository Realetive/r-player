// Core
import React from 'react';
// import useStoreon from 'storeon/react';

import {
  faInfo,
  faListOl,
  faClone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Styles
// import Styles from './style.module.css';

export const ColumnLeft = () => {
  
  return (
    <>
      <div className = 'player__menu player__menu_direction_column'>
        <div className = 'button player__button'>
          <FontAwesomeIcon className = 'button__icon' icon = { faInfo } />
        </div>
        <div className = 'button player__button'>
          <FontAwesomeIcon className = 'button__icon' icon = { faListOl } />
        </div>
        <div className = 'button player__button'>
          <FontAwesomeIcon className = 'button__icon' icon = { faClone } />
        </div>
        <div className = 'player__menu-area' />

      </div>
    </>
  );
};
