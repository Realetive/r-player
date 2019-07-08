// Core
import React, { Component, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import connect from 'storeon/react/connect';

import {
  faVolumeUp,
  faClosedCaptioning,
  faDesktop

} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import { VideoStream } from '../../components/VideoStream';

// Styles
// import styles from './style.module.css';

class PlayerFrame extends Component {

  state = {
    play: false,
  }

  render () {

    if (this.props.videoData === null) {
      return null;
    }

    const { data, width, height } = this.props.videoData;

    return (
      <>
        <div className = 'player__frame'>
          <div className = 'player__content'>
            <ReactPlayer
              height = { height }
              url = { data.video }
              width = { width }
            />
            {/* <video className = 'video-js vjs-default-skin player__video' ref = { (node) => this.videoNode = node } /> */}
          </div>
          <div className = 'player__menu player__menu_direction_row'>
            <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faVolumeUp } /></div>
            <div className = 'volume'>
              <input type = 'range' />
            </div>
            <div className = 'timing'>3:34 / 4:58</div>
            <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faClosedCaptioning } /></div>
            <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faDesktop } /></div>
          </div>
        </div>
      </>
    );
  }

}
export default connect('videoData', PlayerFrame);
