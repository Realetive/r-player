// Core
import React, { useEffect, useRef } from 'react';
import useStoreon from 'storeon/react';

import videojs from 'video.js';


// Styles
// import styles from './style.module.css';

export const VideoStream = () => {
  const { videoData } = useStoreon('videoData');

  const videoNode = useRef();

  useEffect(() => {
    if (JSON.stringify(videoData) !=='{}') {
      const player = videojs(videoNode.current, videoData, () => {
        console.log('ready');
      });
    }

  }, [videoData]);
  // componentDidUpdate (prevProps) {

  //   if (prevProps.videoData !== this.props.videoData) {
  //     this.player = videojs(this.videoNode, this.props.videoData, () => {
  //       console.log('ready');
  //     });
  //     this.player.on(this.player, ['play', 'pause'], (event) => {

  //       this.setState({ play: !this.player.paused() });
  //     });

  //     return true;
  //   }

  //   return false;
  // }

  if (JSON.stringify(videoData) ==='{}') {

    return null;
  }

  return (
    <>
      <video className = 'video-js vjs-default-skin player__video' ref = { videoNode } />
    </>
  );
};
