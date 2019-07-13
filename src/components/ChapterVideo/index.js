// Core
import React from 'react';
import useStoreon from 'storeon/react';
import * as marked from 'marked';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import Styles from './style.module.css';

export const ChapterVideo = () => {
  const { videoData } = useStoreon('videoData');
  const { data } = videoData;

  const _renderChapter = () => {

    const getMarkdownText = (text) => {
      const rawMarkup = marked(text, { sanitize: true, breaks: true });

      return { __html: rawMarkup };
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
          dangerouslySetInnerHTML = { getMarkdownText(chapter.content) }
        />
        <br />
        <div>
          <div
            className = { `button ${Styles.chapterButton}` }
            onClick = { () => this.goTo(chapter.offset) }>
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
