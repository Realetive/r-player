import React, { Component } from 'react';
// import 'video.js/dist/video-js.min.css';
import 'video.js/dist/video-js.css';
// import videojs from 'video.js';
import 'videojs-youtube';
import connect from 'storeon/react/connect';
// import useStoreon from 'storeon/react';

import * as marked from 'marked';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Blocks
import { SideLeft } from './blocks/SideLeft';
import { SideRight } from './blocks/SideRight';
import PlayerFrame from './blocks/PlayerFrame';
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

class VideoPlayer extends Component {

  componentDidMount () {
    const { dispatch } = this.props;

    dispatch('videoData/init', videoJsOptions);
  }

  // goTo = (time) => {
  //   this.player.currentTime(time);
  // }

  _renderChapter = () => {
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
  }


  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render () {
    // if (JSON.stringify(this.props.videoData) === {}) {
    //   return null;
    // }


    return (
      <div>
        <div data-vjs-player>
          <div className = 'player'>
            <Header />
            <div className = 'player__main'>
              <SideLeft />
              <PlayerFrame />
              <SideRight />
            </div>
            <Footer />
          </div>
        </div>
      </div>

    );
  }
}
export default connect('playerEvent', 'videoData', VideoPlayer);

// return (
//   <div>
//     <div data-vjs-player>
//       <div className = 'player'>
//         <div className = 'player__header'>
//           <div className = 'player__logo' />
//           <div className = 'player__userpic' />
//           <div className = 'player__heading'>
//             <div className = 'player__name'>{ data.title }</div>
//             <div className = 'player__author'>{ data.author }</div>
//           </div>
//           <div className = 'player__menu player__menu_direction_row'>
//             {/* <div className="button player__button"><FontAwesomeIcon icon={faVk} className="button__icon" /></div> */}
//             {/* <div className="button player__button"><FontAwesomeIcon icon={faFacebook} className="button__icon" /></div> */}
//             {/* <div className="button player__button"><FontAwesomeIcon icon={faTwitter} className="button__icon" /></div> */}
//             <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faShare } /></div>
//             <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faBookmark } /></div>
//             <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faCog } /></div>
//           </div>
//         </div>
//         <div className = 'player__main'>
//           <SideLeft play = { play } />
//           {/* <div className = 'player__side'>
//             <div className ='player__menu player__menu_direction_column'>
//               <div className ='button player__button'><FontAwesomeIcon className="button__icon" icon={faInfo} /></div>
//               <div className ='button player__button'><FontAwesomeIcon className="button__icon" icon={faListOl} /></div>
//               <div className ='button player__button'><FontAwesomeIcon className="button__icon" icon={faClone} /></div>
//               <div className= 'player__menu-area' />
//               <div className= 'button player__button'><FontAwesomeIcon className="button__icon" icon={faFastBackward} /></div>
//             </div>
//             <div className = 'player__side-main'>
//               <div className = 'player__side-header'>
//                 <div className = 'player__menu player__menu_direction_row'>
//                   <div className = 'player__menu-area'>
//                     <div className = 'button button_width_available player__button'><span className = 'button__text'>Описание</span></div>
//                   </div>
//                   <div className = 'player__menu-area'>
//                     <div className = 'button button_width_available player__button'><span className = 'button__text'>Оглавление</span></div>
//                   </div>
//                 </div>
//               </div>
//               <div className = 'player__side-content'>
//                 <ul className = 'collapse'>
//                   { this._renderChapter() }
//                 </ul>
//               </div>
//               <div className = 'player__side-footer'>
//                 <div className = 'player__menu player__menu_direction_row'>
//                   <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faStepBackward } /></div>
//                   <div className = 'player__menu-area'>
//                     <div className = 'button button_width_available player__button' onClick = { () => this.playToggle() }>
//                       <FontAwesomeIcon className = 'button__icon' icon = { play ? faPause : faPlay } />
//                     </div>
//                   </div>
//                   <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faStepForward } /></div>
//                   <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faFastForward } /></div>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//           <PlayerFrame />
//           {/* <div className = 'player__frame'>
//             <div className = 'player__content'>
//               <video className = 'video-js vjs-default-skin player__video' ref = { (node) => this.videoNode = node } />
//             </div>
//             <div className = 'player__menu player__menu_direction_row'>
//               <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faVolumeUp } /></div>
//               <div className = 'volume'>
//                 <input type = 'range' />
//               </div>
//               <div className = 'timing'>3:34 / 4:58</div>
//               <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faClosedCaptioning } /></div>
//               <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faDesktop } /></div>
//             </div>
//           </div> */}
//           <SideRight />
//         </div>
//         <div className = 'player__footer'>
//           <div className = 'player__progress'>
//             <input
//               className = 'player__current'
//               max = '100'
//               min = '0'
//               onChange = { () => {} }
//               type = 'range'
//               value = '33'
//             />
//           </div>
//           <div className = 'player__ruler'>
//             <div className = 'player__ruler-content'>
//               <div className = 'player__ruler-chapter' />
//               <div className = 'player__ruler-chapter' />
//               <div className = 'player__ruler-chapter' />
//               <div className = 'player__ruler-chapter' />
//               <div className = 'player__ruler-chapter' />
//             </div>
//             <input
//               className = 'player__current'
//               max = '100'
//               min = '0'
//               onChange = { () => {} }
//               type = 'range'
//               value = '33'
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* <Test /> */}
//   </div>

// );
