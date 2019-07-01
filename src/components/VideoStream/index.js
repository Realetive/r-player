// Core
import React, { useState, useEffect, useRef } from 'react';
import useStoreon from 'storeon/react';

import videojs from 'video.js';

// Styles
// import styles from './style.module.css';

export const VideoStream = () => {
  const { dispatch, videoData, playerEvent, player } = useStoreon('videoData', 'player');

  const [play, setPlay] = useState(false);

  const videoNode = useRef();

  useEffect(() => {
    if (JSON.stringify(videoData) !=='{}') {
      const playerInit = videojs(videoNode.current, videoData, () => {
        dispatch('player/init', playerInit);
        console.log('ready');
      });

      playerInit.on(playerInit, ['play', 'pause'], (event) => {
        return dispatch('event/play', !playerInit.paused());
      });
    }

    // return () => {
    //   videojs(videoNode.current).dispose();
    // };
    // return playerInit.dispose();

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
