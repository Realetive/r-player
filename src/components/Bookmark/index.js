// Core
import React from 'react';
import useStoreon from 'storeon/react';

import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import Styles from './style.module.css';

export const Bookmark = () => {

  return (
    <>
      <div className = { Styles.bookmark }>
        {/* <div className = 'button player__button'> */}
        <div className = { Styles.button }>
          <FontAwesomeIcon className = 'button__icon' icon = { faBookmark } />
        </div>
      </div>
    </>
  );
};