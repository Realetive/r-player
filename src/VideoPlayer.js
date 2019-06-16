import React, { Component } from 'react';
import 'video.js/dist/video-js.min.css';
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
  faStepForward,
  faFastForward,
  faVolumeUp,
  faClosedCaptioning,
  faDesktop,
  faPaperclip,
  faHome,
  faThumbsUp,
  faThumbsDown,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class VideoPlayer extends Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  _renderChapter = () => {
    const { data } = this.props;

    const getMarkdownText = ( text ) => {
      const rawMarkup = marked( text, { sanitize: true, breaks: true } );

      return { __html: rawMarkup };
    }

    return data.chapter.map( (chapter, index) => (
      <li key={ index } className="collapse__chapter" data-time={ chapter.offset }>
        <div className="collapse__header">
          <div className="collapse__open">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className="collapse__heading" data-time={ chapter.offset }>
            { chapter.title }
          </div>
        </div>
        <div className="collapse__content" dangerouslySetInnerHTML={ getMarkdownText( chapter.content ) } />
        <div className="collapse__footer">
          <div className="collapse__jump">
            →
          </div>
        </div>
      </li>
    ) )
  }


  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    const { data } = this.props;

    return (
      <div>    
        <div data-vjs-player>
          <div className="player">
            <div className="player__header">
              <div className="player__logo"></div>
              <div className="player__userpic"></div>
              <div className="player__heading">
                <div className="player__name">{ data.title }</div>
                <div className="player__author">{ data.author }</div>
              </div>
              <div className="player__menu player__menu_direction_row">
                {/* <div className="button player__button"><FontAwesomeIcon icon={faVk} className="button__icon" /></div> */}
                {/* <div className="button player__button"><FontAwesomeIcon icon={faFacebook} className="button__icon" /></div> */}
                {/* <div className="button player__button"><FontAwesomeIcon icon={faTwitter} className="button__icon" /></div> */}
                <div className="button player__button"><FontAwesomeIcon icon={faShare} className="button__icon" /></div>
                <div className="button player__button"><FontAwesomeIcon icon={faBookmark} className="button__icon" /></div>
                <div className="button player__button"><FontAwesomeIcon icon={faCog} className="button__icon" /></div>
              </div>
            </div>
            <div className="player__main">
              <div className="player__side">
                <div className="player__menu player__menu_direction_column">
                  <div className="button player__button"><FontAwesomeIcon icon={faInfo} className="button__icon" /></div>
                  <div className="button player__button"><FontAwesomeIcon icon={faListOl} className="button__icon" /></div>
                  <div className="button player__button"><FontAwesomeIcon icon={faClone} className="button__icon" /></div>
                  <div className="player__menu-area"></div>
                  <div className="button player__button"><FontAwesomeIcon icon={faFastBackward} className="button__icon" /></div>
                </div>
                <div className="player__side-main">
                  <div className="player__side-header">
                    <div className="player__menu player__menu_direction_row">
                      <div className="player__menu-area">
                        <div className="button button_width_available player__button"><span className="button__text">Описание</span></div>
                      </div>
                      <div className="player__menu-area">
                        <div className="button button_width_available player__button"><span className="button__text">Оглавление</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="player__side-content">
                    <ul className="collapse">
                      { this._renderChapter() }
                    </ul>
                  </div>
                  <div className="player__side-footer">
                    <div className="player__menu player__menu_direction_row">
                      <div className="button player__button"><FontAwesomeIcon icon={faStepBackward} className="button__icon" /></div>
                      <div className="player__menu-area">
                        <div className="button button_width_available player__button"><FontAwesomeIcon icon={faPlay} className="button__icon" /></div>
                      </div>
                      <div className="button player__button"><FontAwesomeIcon icon={faStepForward} className="button__icon" /></div>
                      <div className="button player__button"><FontAwesomeIcon icon={faFastForward} className="button__icon" /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="player__frame">
                <div className="player__content">
                  <video ref={ node => this.videoNode = node } className="video-js vjs-default-skin player__video" />
                </div>
                <div className="player__menu player__menu_direction_row">
                  <div className="button player__button"><FontAwesomeIcon icon={faVolumeUp} className="button__icon" /></div>
                  <div className="volume">
                    <input type="range"/>
                  </div>
                  <div className="timing">3:34 / 4:58</div>
                  <div className="button player__button"><FontAwesomeIcon icon={faClosedCaptioning} className="button__icon" /></div>
                  <div className="button player__button"><FontAwesomeIcon icon={faDesktop} className="button__icon" /></div>
                </div>
              </div>
              <div className="player__side">
                <div className="player__side-main">
                  <div className="player__side-header">
                    <div className="player__menu player__menu_direction_row">
                      <div className="player__menu-area">
                        <div className="button button_width_available player__button"><span className="button__text">Очередь</span></div>
                      </div>
                      <div className="player__menu-area">
                        <div className="button button_width_available player__button"><span className="button__text">Похожие</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="player__side-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dignissimos, voluptatum! Aspernatur obcaecati nihil maxime! Nostrum, impedit. Qui at ea eligendi incidunt impedit recusandae, ipsam, saepe veniam consequatur, voluptatibus dolore!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dignissimos, voluptatum! Aspernatur obcaecati nihil maxime! Nostrum, impedit. Qui at ea eligendi incidunt impedit recusandae, ipsam, saepe veniam consequatur, voluptatibus dolore!</p>
                  </div>
                  <div className="player__side-footer">
                    <div className="player__menu player__menu_direction_row">
                      <div className="button player__button"><FontAwesomeIcon icon={faPaperclip} className="button__icon" /></div>
                      <div className="player__menu-area">
                        <div className="input input_width_available">
                          <div className="input__box">
                            <textarea className="input__control"></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="button player__button"><FontAwesomeIcon icon={faHome} className="button__icon" /></div>
                    </div>
                  </div>
                </div>
                <div className="player__menu player__menu_direction_column">
                  <div className="player__menu-area">
                    <div className="button button_height_available player__button"><FontAwesomeIcon icon={faThumbsUp} className="button__icon" /></div>
                  </div>
                  <div className="player__menu-area">
                    <div className="button button_height_available player__button"><FontAwesomeIcon icon={faThumbsDown} className="button__icon" /></div>
                  </div>
                  <div className="button player__button"><FontAwesomeIcon icon={faComments} className="button__icon" /></div>
                </div>
              </div>
            </div>
            <div className="player__footer">
              <div className="player__progress">
                <input
                  className="player__current"
                  type="range"
                  min="0"
                  max="100"
                  value="33"
                  onChange={ () => {} }/>
              </div>
              <div className="player__ruler">
                <div className="player__ruler-content">
                  <div className="player__ruler-chapter"></div>
                  <div className="player__ruler-chapter"></div>
                  <div className="player__ruler-chapter"></div>
                  <div className="player__ruler-chapter"></div>
                  <div className="player__ruler-chapter"></div>
                </div>
                <input
                  className="player__current"
                  type="range"
                  min="0"
                  max="100"
                  value="33"
                  onChange={ () => {} }/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}