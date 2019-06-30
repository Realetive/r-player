import React, { Component } from 'react';
// import 'video.js/dist/video-js.min.css';
import 'video.js/dist/video-js.css';
import videojs from 'video.js';
import 'videojs-youtube';

import * as marked from 'marked';
import {
  faChevronDown,
  // faVk,
  // faFacebook,
  // faTwitter,
  faShare,
  faBookmark,
  faCog,
  faInfo,
  faListOl,
  faClone,
  faFastBackward,
  faStepBackward,
  faPlay,
  faPause,
  faStepForward,
  faFastForward,
  faVolumeUp,
  faClosedCaptioning,
  faDesktop,
  faPaperclip,
  faHome,
  faThumbsUp,
  faThumbsDown,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Blocks
import { SideLeft } from './blocks/SideLeft';
import { SideRight } from './blocks/SideRight';

export default class VideoPlayer extends Component {
  state = {
    play: false,
  }

  componentDidMount () {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, () => {
      console.log('ready');
    });

    this.player.on(this.player, ['play', 'pause'], (event) => {
      this.setState({ play: !this.player.paused() });
    });
  }

  // destroy player on unmount
  componentWillUnmount () {
    if (this.player) {
      this.player.dispose();
    }
  }

  goTo = (time) => {
    this.player.currentTime(time);
  }

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

  playToggle = () => {
    this.player && this.player.paused() ? this.player.play() : this.player.pause();
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render () {
    const { data } = this.props;
    const { play } = this.state;

    console.log('play', play);

    return (
      <div>
        <div data-vjs-player>
          <div className = 'player'>
            <div className = 'player__header'>
              <div className = 'player__logo' />
              <div className = 'player__userpic' />
              <div className = 'player__heading'>
                <div className = 'player__name'>{ data.title }</div>
                <div className = 'player__author'>{ data.author }</div>
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
            <div className = 'player__main'>
              <SideLeft play = { play } />
              {/* <div className = 'player__side'>
                <div className ='player__menu player__menu_direction_column'>
                  <div className ='button player__button'><FontAwesomeIcon className="button__icon" icon={faInfo} /></div>
                  <div className ='button player__button'><FontAwesomeIcon className="button__icon" icon={faListOl} /></div>
                  <div className ='button player__button'><FontAwesomeIcon className="button__icon" icon={faClone} /></div>
                  <div className= 'player__menu-area' />
                  <div className= 'button player__button'><FontAwesomeIcon className="button__icon" icon={faFastBackward} /></div>
                </div>
                <div className = 'player__side-main'>
                  <div className = 'player__side-header'>
                    <div className = 'player__menu player__menu_direction_row'>
                      <div className = 'player__menu-area'>
                        <div className = 'button button_width_available player__button'><span className = 'button__text'>Описание</span></div>
                      </div>
                      <div className = 'player__menu-area'>
                        <div className = 'button button_width_available player__button'><span className = 'button__text'>Оглавление</span></div>
                      </div>
                    </div>
                  </div>
                  <div className = 'player__side-content'>
                    <ul className = 'collapse'>
                      { this._renderChapter() }
                    </ul>
                  </div>
                  <div className = 'player__side-footer'>
                    <div className = 'player__menu player__menu_direction_row'>
                      <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faStepBackward } /></div>
                      <div className = 'player__menu-area'>
                        <div className = 'button button_width_available player__button' onClick = { () => this.playToggle() }>
                          <FontAwesomeIcon className = 'button__icon' icon = { play ? faPause : faPlay } />
                        </div>
                      </div>
                      <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faStepForward } /></div>
                      <div className = 'button player__button'><FontAwesomeIcon className = 'button__icon' icon = { faFastForward } /></div>
                    </div>
                  </div>
                </div>
              </div> */}
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
              <SideRight />
            </div>
            <div className = 'player__footer'>
              <div className = 'player__progress'>
                <input
                  className = 'player__current'
                  max = '100'
                  min = '0'
                  onChange = { () => {} }
                  type = 'range'
                  value = '33'
                />
              </div>
              <div className = 'player__ruler'>
                <div className = 'player__ruler-content'>
                  <div className = 'player__ruler-chapter' />
                  <div className = 'player__ruler-chapter' />
                  <div className = 'player__ruler-chapter' />
                  <div className = 'player__ruler-chapter' />
                  <div className = 'player__ruler-chapter' />
                </div>
                <input
                  className = 'player__current'
                  max = '100'
                  min = '0'
                  onChange = { () => {} }
                  type = 'range'
                  value = '33'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
