// Core
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import useStoreon from 'storeon/react';
export const ProgressBar = (props) => {

  const { dispatch, videoData, player, playerEvent } = useStoreon('player', 'playerEvent');

  const _onSeekChange = (e) => {

    dispatch('event/progress', parseFloat(e.target.value));
  };
  const _test =() => {
    console.log('object')
  }

  return (
    <div className = 'player__progress'>
      <input
        className = 'player__current'
        max = '100'
        min = '0'
        step = '0.1'
        type = 'range'
        value = { playerEvent.progress }
        onChange = { _onSeekChange }
      />
      <button onClick={_test}>Test</button>
    </div>

  );

};
