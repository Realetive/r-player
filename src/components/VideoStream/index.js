// Core
import React, { useEffect, useRef } from 'react';
import useStoreon from 'storeon/react';

import videojs from 'video.js';

// Styles
// import styles from './style.module.css';

export const VideoStream = () => {
  const { dispatch, videoData, player, playerEvent } = useStoreon('videoData', 'player', 'playerEvent');

  const videoNode = useRef();
  const buttonNode = useRef(null);

  useEffect(() => {
    let playerInit = null;

    if (JSON.stringify(videoData) !=='{}') {
      playerInit = videojs(videoNode.current, videoData, () => {

        // videojs.registerComponent('Control', videojs.extends('Component'));
        // const Component = videojs.getComponent('Component');

        // const button = new Component(playerInit);
        const button2 = videojs.getComponent('Button');
        videojs.registerComponent('button2', button2);
        playerInit.addChild('button2');
        // button(playerInit, buttonNode.current);
        console.log('button', button2);

        // button.on(['play', 'pause'], (event) => {
        //   console.log('test')
        // })

        dispatch('player/init', playerInit);

      });

      playerInit.on(playerInit, ['play', 'pause'], (event) => {
        // dispatch('event/progress', playerInit.currentTime());

        return dispatch('event/play', !playerInit.paused());
      });

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
      <div rev = { buttonNode } />
      {/* { player ?
            <div dangerouslySetInnerHTML = { { __html: player.controlBar.progressControl.el().innerHTML } } /> : null}

      <div ref = { progressNode }>test
        <div>

        </div>
      </div> */}

    </>
  );
};
