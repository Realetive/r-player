// Core
import React, { useState, useEffect, useRef } from 'react';
import useStoreon from 'storeon/react';

import videojs from 'video.js';

// Styles
// import styles from './style.module.css';

export const VideoStream = () => {
  const { dispatch, videoData, player, playerEvent } = useStoreon('videoData', 'player', 'playerEvent');

  const videoNode = useRef();
  const progressNode = useRef();

  useEffect(() => {
    let playerInit = null;

    if (JSON.stringify(videoData) !=='{}') {
      playerInit = videojs(videoNode.current, videoData, () => {
        dispatch('player/init', playerInit);

        // console.log('ready', playerInit.duration());
        // console.log('node', videoNode.current.currentTime);
      });

      playerInit.on(playerInit, ['play', 'pause'], (event) => {
        // dispatch('event/progress', playerInit.currentTime());

        return dispatch('event/play', !playerInit.paused());
      });

      const progressControl = playerInit.controlBar.progressControl.contentEl();

      console.log('progressControl', progressControl.innerHTML);

    }

    // return () => {
    //   if (playerInit) {
    //     playerInit.dispose();
    //   }
    // };

  }, [videoData]);

  // if (!player) {
  //   return null;
  // }

  return JSON.stringify(videoData) ==='{}' ? null : (
    <>
      <video className = 'video-js vjs-default-skin player__video' ref = { videoNode } />
      { player ?
            <div dangerouslySetInnerHTML = { { __html: player.controlBar.progressControl.el().innerHTML } } /> : null}
      
      
      <div ref = { progressNode }>test
        <div>
          
        </div>
      </div>

    </>
  );
};
