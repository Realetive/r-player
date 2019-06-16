import React from 'react';
import VideoPlayer from "./VideoPlayer";

import './App.css';

const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

const videoJsOptions = {
  data: {
    title: `Detroit: Become Human, Battlefield V, финишная прямая PlayStation 4`,
    author: `Dmitry Puchkov`,
    video: `https://www.youtube.com/watch?v=8pbuqx_Th2Y`,
    chapter: [
      {
        offset: 21,
        title: `Потрачено на игры $823 000 000 God of War, Far Cry 5`,
        content: 'Персона npd.com\n' +
                '\n' +
                'Предмет [zxc](//google.com)\n' +
                '\n' +
                'Пруф-линк:\n' +
                '\n' +
                '- [far-cry.ubisoft.com](https://far-cry.ubisoft.com/game/ru-ru/home/)\n' +
                '- [far-cry.ubisoft.com](https://far-cry.ubisoft.com/game/ru-ru/home/)'
      },
      {
        offset: 235,
        title: `Финишная прямая PlayStation 4`,
        content: 'Пруф-линк: [playstation.com](https://www.playstation.com)'
      }
    ]
  },
  autoplay: true,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: 720,
  height: 300,
  controls: false,
  techOrder: ["youtube"],
  sources: [
    {
      src: `https://www.youtube.com/watch?v=${ videoId || '8pbuqx_Th2Y' }`,
      type: 'video/youtube',
    },
  ],
};

function App() {

  return (
    <div className="App">
      <VideoPlayer { ...videoJsOptions } />
    </div>
  );
}

export default App;
