// Core
import React from 'react';

// Components
import { Share } from '../../components/Share';
import { Bookmark } from '../../components/Bookmark';
import { Config } from '../../components/Config';

// Styles
import Styles from './style.module.css';

export const Header = (props) => {
  const { title, author } = props.data;

  return (
    <>
      <div className = { Styles.header }>
        <div className = 'player__logo' />
        <div className = 'player__userpic' />

        <div className = { Styles.heading }>
          <div className = { Styles.name }>{ title }</div>
          <div className = { Styles.author }>{ author }</div>
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
