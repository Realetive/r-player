// Core
import React from 'react';
import useStoreon from 'storeon/react';

import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Styles
import Styles from './style.module.css';

export const Share = () => {
  
  return (
    <>
      <div className = { Styles.share }>
        <div className = 'button player__button'>
          <FontAwesomeIcon className = 'button__icon' icon = { faShare } />
        </div>
      </div>
    </>
  );
};
