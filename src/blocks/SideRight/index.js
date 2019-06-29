// Core
import React from 'react';
import {
  faFastForward,
  faStepBackward,
  faStepForward,
  faPause,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import styles from './style.module.css';

export const SideRight = (props) => {
  const { data, play } = props;

  return (
    <>
      <div className = 'player__side-main'>
        <div className = 'player__side-header'>
          <div className = 'player__menu player__menu_direction_row'>
            <div className = 'player__menu-area'>
              <div className = 'button button_width_available player__button'><span className = 'button__text'>Описание</span></div>
            </div>
            <div className = 'player__menu-area'>
              <div className = 'button button_width_available player__button'><span className = 'button__text'>Оглавление</span></div>
            </div>
          </div>
        </div>
        <div className = 'player__side-content'>
          <ul className = 'collapse'>
            {/* { this._renderChapter() } */}
          </ul>
        </div>
        <div className = 'player__side-footer'>
          <div className = 'player__menu player__menu_direction_row'>
            <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faStepBackward } /></div>
            <div className = 'player__menu-area'>
              <div className = 'button button_width_available player__button' onClick = { () => this.playToggle() }>
                <FontAwesomeIcon className = 'button__icon' icon = { play ? faPause : faPlay } />
              </div>
            </div>
            <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faStepForward } /></div>
            <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faFastForward } /></div>
          </div>
        </div>
      </div>
    </>
  );
};
