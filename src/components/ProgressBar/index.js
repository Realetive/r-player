// Core
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import useStoreon from 'storeon/react';
export const ProgressBar = (props) => {

  const { dispatch, playerNode, videoData, player, playerEvent, playerState } = useStoreon('player', 'playerEvent', 'playerState', 'playerNode');

  

  const _onSeekChange = (e) => {

    dispatch('playerState/played', parseFloat(e.target.value));
  };

  const onSeekMouseDown = (e) => {

    dispatch('event/seeking', true);

  };

  const onSeekMouseUp = (e) => {
    dispatch('event/seeking', false);
    props._seekTo(parseFloat(e.target.value));
  };


  return (
    <div className = 'player__progress'>
      <input
        className = 'player__current'
        max = { 1 }
        min = { 0 }
        step = 'any'
        type = 'range'
        value = { playerState.played }
        onChange = { _onSeekChange }
        onMouseDown = { onSeekMouseDown }
        onMouseUp = { onSeekMouseUp }
      />

    </div>

  );

};
