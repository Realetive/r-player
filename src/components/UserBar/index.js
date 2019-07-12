// Core
import React from 'react';
import useStoreon from 'storeon/react';

import { faPaperclip, faHome, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import Styles from './style.module.css';

export const UserBar = () => {

  return (
    <>
      <div className = { Styles.userBar }>
        <div className = 'player__menu player__menu_direction_row'>
          <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faPaperclip } /></div>
          <div className = 'player__menu-area'>
            <div className = 'input input_width_available'>
              <div className = 'input__box'>
                <textarea className = 'input__control' />
              </div>
            </div>
          </div>
          <div className = 'button player__button'>
            <FontAwesomeIcon className = 'button__icon' icon = { faHome } />
          </div>
          <div className = 'button player__button'>
            <FontAwesomeIcon className = 'button__icon' icon = { faComments } />
          </div>
        </div>
      </div>
    </>
  );
};
