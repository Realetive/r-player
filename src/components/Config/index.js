// Core
import React from 'react';
import useStoreon from 'storeon/react';

import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import Styles from './style.module.css';

export const Config = () => {

  return (
    <>
      <div className = { Styles.config }>
        <div className = 'button player__button'>
          <FontAwesomeIcon className = 'button__icon' icon = { faCog } />
        </div>
      </div>
    </>
  );
};
