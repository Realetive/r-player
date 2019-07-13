// Core
import React from 'react';
import useStoreon from 'storeon/react';
import * as marked from 'marked';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
// import Styles from './style.module.css';

export const ChapterVideo = () => {
  const { videoData } = useStoreon('videoData');
  const { data } = videoData;

  const _renderChapter = () => {

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
      <div className = 'player__side-content'>
        <ul className = 'collapse'>{_renderChapter()}</ul>
      </div>
    </>
  );
};
