// Core
import React, { Component, useState, useEffect } from 'react';
import videojs from 'video.js';
import 'videojs-youtube';
import 'video.js/dist/video-js.css';
import connect from 'storeon/react/connect';

import {
  faVolumeUp,
  faClosedCaptioning,
  faDesktop

} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
// import styles from './style.module.css';




class PlayerFrame extends Component {

  state = {
    play: false,
  }
  //   componentDidMount () {
  //     // instantiate Video.js
  // console.log('object')
  //     this.player = videojs(this.videoNode, this.props.videoData, () => {
  //       console.log('ready');
  //     });
  //     this.player.on(this.player, ['play', 'pause'], (event) => {

  //       this.setState({ play: !this.player.paused() });
  //     });
  //   }
  componentDidUpdate (prevProps) {
    
    if (prevProps.videoData !== this.props.videoData) {
      this.player = videojs(this.videoNode, this.props.videoData, () => {
        console.log('ready');
      });
      this.player.on(this.player, ['play', 'pause'], (event) => {

        this.setState({ play: !this.player.paused() });
      });

      return true;
    }

    return false;
  }

  // componentWillUnmount () {
  //   if (this.player) {
  //     this.player.dispose();
  //   }
  // }
  // _test = () => {
  //   console.log('this.props', this.props);
  // }
  render () {


    return (
      <>
        <div className = 'player__frame'>
          <div className = 'player__content'>
            <video className = 'video-js vjs-default-skin player__video' ref = { (node) => this.videoNode = node } />
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
