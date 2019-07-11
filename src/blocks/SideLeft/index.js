// Core
import React from 'react';
import useStoreon from 'storeon/react';
import * as marked from 'marked';

import {
  faInfo,
  faListOl,
  faClone,
  faFastBackward,
  faPause,
  faPlay,
  faStepForward,
  faStepBackward,
  faFastForward,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
// import styles from './style.module.css';

export const SideLeft = () => {
  const { dispatch, player, playerEvent, videoData } = useStoreon(
    'playerEvent',
    'player',
    'videoData'
  );
  const { play } = playerEvent;
  const { data } = videoData;

  const _playToggle = () => {
    dispatch('event/play', !play);
  };

  const _renderChapter = () => {
    // const { data } = this.props;

    const getMarkdownText = (text) => {
      const rawMarkup = marked(text, { sanitize: true, breaks: true });

      return { __html: rawMarkup };
    };

    return data.chapter.map((chapter, index) => (
      <li className = 'collapse__chapter' data-time = { chapter.offset } key = { index }>
        <div className = 'collapse__header'>
          <div className = 'collapse__open'>
            <FontAwesomeIcon icon = { faChevronDown } />
          </div>
          <div className = 'collapse__heading' data-time = { chapter.offset }>
            {chapter.title}
          </div>
        </div>
        <div
          className = 'collapse__content'
          dangerouslySetInnerHTML = { getMarkdownText(chapter.content) }
        />
        <br />
        <div className = 'collapse__footer'>
          <div
            className = 'button button_width_available collapse__jump'
            style = { { border: '1px solid #000' } }
            onClick = { () => this.goTo(chapter.offset) }>
            <span className = 'button__text' style = { { color: '#000' } }>
              Перейти к разделу
            </span>
          </div>
        </div>
        <br />
      </li>
    ));
  };

  return (
    <>
      <div className = 'player__side'>
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
            <ul className = 'collapse'>{_renderChapter()}</ul>
          </div>
          <div className = 'player__side-footer'>
            <div className = 'player__menu player__menu_direction_row'>
              <div className = 'button player__button'>
                <FontAwesomeIcon
                  className = 'button__icon'
                  icon = { faStepBackward }
                />
              </div>
              <div className = 'player__menu-area'>
                <div
                  className = 'button button_width_available player__button'
                  onClick = { _playToggle }>
                  <FontAwesomeIcon
                    className = 'button__icon'
                    icon = { play ? faPause : faPlay }
                  />
                </div>
              </div>
              <div className = 'button player__button'>
                <FontAwesomeIcon
                  className = 'button__icon'
                  icon = { faStepForward }
                />
              </div>
              <div className = 'button player__button'>
                <FontAwesomeIcon
                  className = 'button__icon'
                  icon = { faFastForward }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
