import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

import useStoreon from 'storeon/react';

// Blocks
import { Header } from './blocks/Header';
import { SideLeft } from './blocks/SideLeft';
import { SideRight } from './blocks/SideRight';
import { Footer } from './blocks/Footer';
import { Controls } from './blocks/Controls';

const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

const videoJsOptions = {
  data: {
    title:
      'Detroit: Become Human, Battlefield V, финишная прямая PlayStation 4',
    author:  'Dmitry Puchkov',
    video:   'https://www.youtube.com/watch?v=8pbuqx_Th2Y',
    chapter: [
      {
        offset:  21,
        title:   'Потрачено на игры $823 000 000 God of War, Far Cry 5',
        content:
          'Персона npd.com\n' +
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
  const { dispatch, videoData, playerEvent } = useStoreon(
    'videoData',
    'playerEvent',
    'playerState',
    'playerNode'
  );
  const { play, volume, muted } = playerEvent;

  const [player, _setPlayer] = useState(null);

  const ref = (data) => {
    _setPlayer(data);
  };

  useEffect(() => {
    dispatch('videoData/init', videoJsOptions);
  }, [dispatch, videoData]);

  const _onProgress = (updateState) => {
    if (!playerEvent.seeking) {
      dispatch('playerState/update', updateState);
    }
  };

  const _onDuration = (duration) => {
    dispatch('event/duration', duration);
  };
  // goTo = (time) => {
  //   this.player.currentTime(time);
  // }

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
            <div className = 'player__frame'>
              <div className = 'player__content'>
                <ReactPlayer
                  config = { {
                    youtube: {
                      playerVars: { controls: 0 },
                    },
                  } }
                  height = { height }
                  muted = { muted }
                  playing = { play }
                  ref = { ref }
                  url = { data.video }
                  volume = { volume }
                  width = { width }
                  onDuration = { _onDuration }
                  onProgress = { _onProgress }
                />
              </div>
            </div>
            <SideRight />
          </div>
          <Controls player = { player } />
          <Footer />
        </div>
      </div>
    </div>
  );
};
