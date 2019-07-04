// Core
import React, { useState, useEffect, useRef } from 'react';
import useStoreon from 'storeon/react';
export const ProgressBar = () => {

  const { dispatch, videoData, player, playerEvent } = useStoreon('videoData', 'player', 'playerEvent');

  const _progressBar = (event) => {

    // dispatch('event/progress', player.currentTime());
    // console.log(player.currentTime());
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // let test = null;

    if (player) {
      // dispatch('event/progress', player.currentTime());
      // const test = () => {
      //   progress + player.currentTime()
      // }
      // setInterval(console.log('progress', progress), 500);
      dispatch('event/progress', player.currentTime());
      setProgress(player.currentTime());

      // test = setInterval(setProgress(progress = player.currentTime()), 500);
    }

    // return () => {
    //   clearInterval(test);
    // };
  });

  if (!player) {
    return null;
  }

  return (
    <div className = 'player__progress'>
      <input
        className = 'player__current'
        max = { `${player.duration()}` }
        min = '0'
        type = 'range'
        value = { `${progress}` }
        onChange = { _progressBar }
      />
    </div>
  );

};
