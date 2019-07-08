// Core
import React, { useState, useEffect, useRef } from 'react';
import useStoreon from 'storeon/react';

// Components
import { ProgressBar } from '../../components/ProgressBar';

// Styles
// import styles from './style.module.css';

export const Footer = () => {
  // const { dispatch, videoData, player, playerEvent } = useStoreon('videoData', 'player', 'playerEvent');



  // if (!player) {
  //   return null;
  // }

  

  return (
    <>
      <div className = 'player__footer'>
        <div>test</div>
        {/* <div dangerouslySetInnerHTML = { { __html: player.controlBar.progressControl.el().innerHTML } } /> */}
        <ProgressBar />
        {/* <div className = 'player__progress'>
          <input
            className = 'player__current'
            max = { `${player.duration()}` }
            min = '0'
            type = 'range'
            value = { `${progress}` }
            onChange = { _progressBar }
          />
        </div> */}
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
            // onChange = { () => {} }
            type = 'range'
          // value = '33'
          />
        </div>
      </div>
    </>
  );

};
