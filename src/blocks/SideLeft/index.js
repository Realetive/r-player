import React from 'react';
import {
  faInfo,
  faListOl,
  faClone,
  faFastBackward

} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SideLeft = () => {

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
        <div className = 'button player__button'>
          <FontAwesomeIcon className = 'button__icon' icon = { faFastBackward } />
        </div>
      </div>
    </>
  );
};
