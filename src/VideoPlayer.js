import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
// import connect from 'storeon/react/connect';
import useStoreon from 'storeon/react';

import * as marked from 'marked';
import {
  faChevronDown,
  faVolumeUp,
  faClosedCaptioning,
  faDesktop
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Blocks
import { SideLeft } from './blocks/SideLeft';
import { SideRight } from './blocks/SideRight';
// import { PlayerFrame } from './blocks/PlayerFrame';
import { Footer } from './blocks/Footer';
import { Header } from './blocks/Header';

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
  autoplay:        true,
  playbackRates:   [0.5, 1, 1.25, 1.5, 2],
  width:           '100%',
  height:          '100%',
  controls:        false,
  ProgressControl: true,
  controlBar:      {
    children: [
      'playToggle',
      'volumeMenuButton',
      'durationDisplay',
      'timeDivider',
      'currentTimeDisplay',
      'progressControl',
      'remainingTimeDisplay',
      'fullscreenToggle'
    ],
  },
  techOrder: ['youtube'],
  sources:   [
    {
      src:  `https://www.youtube.com/watch?v=${videoId || '8pbuqx_Th2Y'}`,
      type: 'video/youtube',
    }
  ],
};

export const VideoPlayer = () => {

  const { dispatch, videoData, playerEvent } = useStoreon('videoData', 'playerEvent', 'playerState', 'playerNode');
  const { play } = playerEvent;

  const [player, _setPlayer] = useState(null);

  const ref = (data) => {
    _setPlayer(data);
  };

  useEffect(() => {
    dispatch('videoData/init', videoJsOptions);

  }, [dispatch, videoData]);

  useEffect(() => {
    // if (player) {

    //   dispatch('playerNode/init', player);
    // }
  }, [dispatch, player]);
  const _seekTo = (progress) => {
    player.seekTo(progress);
  };

  const _onProgress = (updateState) => {
    if (!playerEvent.seeking) {
      console.log(updateState);

      dispatch('playerState/update', updateState);
    }
  };

  // goTo = (time) => {
  //   this.player.currentTime(time);
  // }

  const _renderChapter = () => {
    const { data } = this.props;

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
            { chapter.title }
          </div>
        </div>
        <div className = 'collapse__content' dangerouslySetInnerHTML = { getMarkdownText(chapter.content) } />
        <br />
        <div className = 'collapse__footer'>
          <div className = 'button button_width_available collapse__jump' style = { { border: '1px solid #000' } } onClick = { () => this.goTo(chapter.offset) }>
            <span className = 'button__text' style = { { color: '#000' } }>Перейти к разделу</span>
          </div>
        </div>
        <br />
      </li>
    ));
  };

  if (videoData === null) {
    return null;
  }

  const { data, width, height } = videoData;

  return (
    <div>
      <div data-vjs-player>
        <div className = 'player'>
          <Header />
          <div className = 'player__main'>
            <SideLeft />
            {/* <PlayerFrame /> */}
            <div className = 'player__frame'>
              <div className = 'player__content'>
                <ReactPlayer
                  config = { { youtube: {
                    playerVars: { controls: 0 },
                  } } }
                  height = { height }
                  playing = { play }
                  ref = { ref }
                  url = { data.video }
                  width = { width }
                  onProgress = { _onProgress }
                />

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
            <SideRight />
          </div>
          <Footer _seekTo = { _seekTo } />
        </div>
      </div>
    </div>

  );

};
