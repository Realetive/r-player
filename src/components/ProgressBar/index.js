// Core
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import useStoreon from 'storeon/react';
export const ProgressBar = (props) => {

  const { dispatch, videoData, player, playerEvent } = useStoreon('player', 'playerEvent');
  const { progress, duration } = props;

  const _progressBar = (event) => {

    // dispatch('event/progress', player.currentTime());
    // console.log(player.currentTime());
  };

  const [prog, setProgress] = useState(0);
  //   useEffect(() => {
  //       return () => {
  //           effect
  //       };
  //   }, [input])
  const percent = player.currentTime() / player.duration() * 100;
  const test = Math.round(percent * 10) / 10;

  useEffect(() => {
    // let test = null;

    if (player) {

      //   console.log('percent', test);
      //   setInterval(console.log('progress', progress), 500);
      // dispatch('event/progress', test);
      //   setProgress(test);
      //   console.log('object', progress);
      // test = setInterval(setProgress(progress = player.currentTime()), 500);
    //   dispatch('event/progress', test);

      setProgress(test);

    }

  }, [player.currentTime()]);

  if (!player) {
    return null;
  }

  return (
    <div className = 'player__progress'>
      <input
        className = 'player__current'
        max = '100'
        min = '0'
        step = '0.1'
        type = 'range'
        value = { `${prog}` }
        onChange = { _progressBar }
      />
    </div>
  );

};
