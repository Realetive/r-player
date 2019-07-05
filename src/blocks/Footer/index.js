// Core
import React, { useState, useEffect, useRef } from 'react';
import useStoreon from 'storeon/react';

// Components
import { ProgressBar } from '../../components/ProgressBar';

// Styles
// import styles from './style.module.css';

export const Footer = () => {
  const { dispatch, videoData, player, playerEvent } = useStoreon('videoData', 'player', 'playerEvent');

  // const _progressBar = (event) => {

  //   // dispatch('event/progress', player.currentTime());
  //   // console.log(player.currentTime());
  //   console.log(event.target.value);
  // };

  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   // let test = null;

  //   if (player) {
  //   // dispatch('event/progress', player.currentTime());
  //     // const test = () => {
  //     //   progress + player.currentTime()
  //     // }
  //     // setInterval(console.log('progress', progress), 500);
  //     dispatch('event/progress', player.currentTime());
  //     setProgress(player.currentTime());

  //     // test = setInterval(setProgress(progress = player.currentTime()), 500);
  //   }

  //   // return () => {
  //   //   clearInterval(test);
  //   // };
  // });

  if (!player) {
    return null;
  }

  // setInterval(console.log('update',player.currentTime()), 500);
  // console.log('progress', progress);

  return (
    <>
      <div className = 'player__footer'>
      <div>test</div>
        {/* <div dangerouslySetInnerHTML = { { __html: player.controlBar.progressControl.el().innerHTML } } /> */}
        {/* <ProgressBar duration = { player.duration() } progress = { player.currentTime() } /> */}
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
