// Core
import React, { Component, useState, useEffect } from 'react';
import videojs from 'video.js';
import 'videojs-youtube';
import 'video.js/dist/video-js.css';

import {
  faVolumeUp,
  faClosedCaptioning,
  faDesktop

} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
// import styles from './style.module.css';

const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

const videoJsOptions = {
  data: {
    title:   'Detroit: Become Human, Battlefield V, финишная прямая PlayStation 4',
    author:  'Dmitry Puchkov',
    video:   'https://www.youtube.com/watch?v=8pbuqx_Th2Y',
    chapter: [
      {
        offset:  21,
        title:   'Потрачено на игры $823 000 000 God of War, Far Cry 5',
        content: 'Персона npd.com\n' +
                '\n' +
                'Предмет [zxc](//google.com)\n' +
                '\n' +
                'Пруф-линк:\n' +
                '\n' +
                '- [far-cry.ubisoft.com](https://far-cry.ubisoft.com/game/ru-ru/home/)\n' +
                '- [far-cry.ubisoft.com](https://far-cry.ubisoft.com/game/ru-ru/home/)',
      },
      {
        offset:  235,
        title:   'Финишная прямая PlayStation 4',
        content: 'Пруф-линк: [playstation.com](https://www.playstation.com)',
      }
    ],
  },
  autoplay:      true,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width:         720,
  height:        300,
  controls:      false,
  techOrder:     ['youtube'],
  sources:       [
    {
      src:  `https://www.youtube.com/watch?v=${videoId || '8pbuqx_Th2Y'}`,
      type: 'video/youtube',
    }
  ],
};

export class PlayerFrame extends Component {

  state = {
    play: false,
  }
  componentDidMount () {
    // instantiate Video.js
    this.player = videojs(this.videoNode, videoJsOptions, () => {
      console.log('this.props', videoJsOptions);
      console.log('ready');
    });
    console.log('object', !this.player.paused());
    this.player.on(this.player, ['play', 'pause'], (event) => {

      this.setState({ play: !this.player.paused() });
    });
  }
  componentWillUnmount () {
    if (this.player) {
      this.player.dispose();
    }
  }
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
