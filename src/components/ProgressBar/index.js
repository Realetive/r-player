// Core
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import useStoreon from 'storeon/react';
export const ProgressBar = (props) => {

  const { dispatch, videoData, player, playerEvent } = useStoreon('player', 'playerEvent');

  const progressNode = useRef(null);

  if (!player) {
    return null;
  }

  const progressBar = player.controlBar.progressControl.el().innerHTML;
  const progressBar2 = player.controlBar.progressControl.createEl();
  const progressBar3 = player.controlBar.progressControl.contentEl();
  const progressBar4 = player.controlBar.progressControl.contentEl();

  console.log('createEl', progressBar2);
  console.log('contentEl', progressBar3);
  player.controlBar.progressControl.contentEl(progressNode);

  return (
    <div className = { 'video-js' }>
      <div
        dangerouslySetInnerHTML = { { __html: progressBar3.innerHTML } }
        ref = { progressNode }
      />
    </div>

  );

};
// <div className = 'player__progress'>
//   <input
//     className = 'player__current'
//     max = '100'
//     min = '0'
//     step = '0.1'
//     type = 'range'
//     value = { `${prog}` }
//     onChange = { _progressBar }
//   />
// </div>
