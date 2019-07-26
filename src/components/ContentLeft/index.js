// Core
import React from 'react';
// import useStoreon from 'storeon/react';

// Styles
// import Styles from './style.module.css';

// Components
import { ChapterVideo } from '../ChapterVideo';

export const ContentLeft = ({ player }) => {

  return (
    <>
      <div className = 'player__side-main'>
        <div className = 'player__side-header'>
          <div className = 'player__menu player__menu_direction_row'>
            <div className = 'player__menu-area'>
              <div className = 'button button_width_available player__button'>
                <span className = 'button__text'>Описание</span>
              </div>
            </div>
            <div className = 'player__menu-area'>
              <div className = 'button button_width_available player__button'>
                <span className = 'button__text'>Оглавление</span>
              </div>
            </div>
          </div>
        </div>
        <div className = 'player__side-content'>

          <ChapterVideo player = { player } />
        </div>
      </div>
    </>
  );
};
