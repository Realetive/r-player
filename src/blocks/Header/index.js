// Core
import React, { useState, useEffect } from 'react';
import useStoreon from 'storeon/react';
import {
  faShare,
  faBookmark,
  faCog
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import { Share } from '../../components/Share';
import { Bookmark } from '../../components/Bookmark';
import { Config } from '../../components/Config';

// Styles
import Styles from './style.module.css';

export const Header = () => {
  const { videoData } = useStoreon('videoData');

  const [data, _setData] = useState({});

  useEffect(() => {

    if (videoData) {

      _setData(videoData.data);
    }

  }, [videoData]);

  if (data === void 0) {
    return null;
  }

  return (
    <>
      <div className = { Styles.header }>
        <div className = 'player__logo' />
        <div className = 'player__userpic' />

        <div className = { Styles.heading }>
          <div className = { Styles.name }>{ data.title }</div>
          <div className = { Styles.author }>{ data.author }</div>
        </div>
        <div className = { Styles.headerButtons }>
          <Share />
          <Bookmark />
          <Config />
        </div>
      </div>
    </>
  );
};
