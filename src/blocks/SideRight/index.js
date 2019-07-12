// Core
import React from 'react';
import {
  faThumbsUp,
  faThumbsDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
// import styles from './style.module.css';

export const SideRight = (props) => {

  return (
    <>
      <div className = 'player__side'>
        <div className = 'player__side-main'>
          <div className = 'player__side-header'>
            <div className = 'player__menu player__menu_direction_row'>
              <div className = 'player__menu-area'>
                <div className = 'button button_width_available player__button'><span className = 'button__text'>Очередь</span></div>
              </div>
              <div className = 'player__menu-area'>
                <div className = 'button button_width_available player__button'><span className = 'button__text'>Похожие</span></div>
              </div>
            </div>
          </div>
          <div className = 'player__side-content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dignissimos, voluptatum! Aspernatur obcaecati nihil maxime! Nostrum, impedit. Qui at ea eligendi incidunt impedit recusandae, ipsam, saepe veniam consequatur, voluptatibus dolore!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dignissimos, voluptatum! Aspernatur obcaecati nihil maxime! Nostrum, impedit. Qui at ea eligendi incidunt impedit recusandae, ipsam, saepe veniam consequatur, voluptatibus dolore!</p>
          </div>
        </div>
        <div className = 'player__menu player__menu_direction_column'>
          <div className = 'player__menu-area'>
            <div className = 'button button_height_available player__button'><FontAwesomeIcon className = 'button__icon' icon = { faThumbsUp } /></div>
          </div>
          <div className = 'player__menu-area'>
            <div className = 'button button_height_available player__button'><FontAwesomeIcon className = 'button__icon' icon = { faThumbsDown } /></div>
          </div>
        </div>
      </div>
    </>
  );
};
