// Core
import React, { useState, useEffect, useRef } from 'react';
import useStoreon from 'storeon/react';

import videojs from 'video.js';

// Styles
// import styles from './style.module.css';

export const VideoStream = () => {
  const { dispatch, videoData, player, playerEvent } = useStoreon('videoData', 'player', 'playerEvent');

  const videoNode = useRef();
  const controlNode = useRef();

  useEffect(() => {
    let playerInit = null;

    if (JSON.stringify(videoData) !=='{}') {
      playerInit = videojs(videoNode.current, videoData, () => {
        dispatch('player/init', playerInit);

        console.log('ready', playerInit.duration());
      });

      playerInit.on(playerInit, ['play', 'pause'], (event) => {
        dispatch('event/progress', playerInit.currentTime());

        return dispatch('event/play', !playerInit.paused());
      });
      
      
    }

    return () => {
      if (playerInit) {
        playerInit.dispose();
      }
    };

  }, [videoData]);

  return JSON.stringify(videoData) ==='{}' ? null : (
    <>
      <video className = 'video-js vjs-default-skin player__video' ref = { videoNode } />
      <div>test
        <div ref = { controlNode } />
      </div>
    </>
  );
};
