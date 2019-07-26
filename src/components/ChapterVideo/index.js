// Core
import React from 'react';
import useStoreon from 'storeon/react';
import * as marked from 'marked';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import Styles from './style.module.css';

export const ChapterVideo = ({ player }) => {
  const { dispatch, videoData, playerEvent } = useStoreon('videoData', 'playerEvent');
  const { data } = videoData;
  const { play } = playerEvent;

  const _renderChapter = () => {

    const getMarkdownText = (text) => {
      const rawMarkup = marked(text, { sanitize: true, breaks: true });

      return { __html: rawMarkup };
    };

    const goTo = (seconds) => {
      player.seekTo(seconds);
      !play && dispatch('event/play', true);
    };

    return data.chapter.map((chapter, index) => (
      <li className = { Styles.chapterItem } data-time = { chapter.offset } key = { index }>
        <div className = { Styles.chapterHeader }>
          <div className = { Styles.chapterOpen }>
            <FontAwesomeIcon icon = { faChevronDown } />
          </div>
          <div className = { Styles.chapterHeading } data-time = { chapter.offset }>
            {chapter.title}
          </div>
        </div>
        <div
          className = 'collapse__content'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML = { getMarkdownText(chapter.content) }
        />
        <br />
        <div>
          <div
            className = { `button ${Styles.chapterButton}` }
            onClick = { () => goTo(chapter.offset) }>
            <span className = 'button__text' >
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
      <ul className = { Styles.chapter }>{_renderChapter()}</ul>
    </>
  );
};
