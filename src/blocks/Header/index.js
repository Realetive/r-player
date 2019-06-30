// Core
import React from 'react';
import {
  faChevronDown,
  // faVk,
  // faFacebook,
  // faTwitter,
  faShare,
  faBookmark,
  faCog

} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
// import styles from './style.module.css';

export const Header = (props) => {

  return (
    <>
      <div className = 'player__header'>
        <div className = 'player__logo' />
        <div className = 'player__userpic' />
        <div className = 'player__heading'>
          <div className = 'player__name'>{ props.data.title }</div>
          <div className = 'player__author'>{ props.data.author }</div>
        </div>
        <div className = 'player__menu player__menu_direction_row'>
          {/* <div className="button player__button"><FontAwesomeIcon icon={faVk} className="button__icon" /></div> */}
          {/* <div className="button player__button"><FontAwesomeIcon icon={faFacebook} className="button__icon" /></div> */}
          {/* <div className="button player__button"><FontAwesomeIcon icon={faTwitter} className="button__icon" /></div> */}
          <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faShare } /></div>
          <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faBookmark } /></div>
          <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faCog } /></div>
        </div>
      </div>
    </>
  );
};
