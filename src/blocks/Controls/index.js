// Core
import React from 'react';
import useStoreon from 'storeon/react';

// Components
import { ControlBar } from '../../components/ControlBar';
import { VolumeBar } from '../../components/VolumeBar';
import { ProgressBar } from '../../components/ProgressBar';

// Styles
import Styles from './style.module.css';

export const Controls = (props) => {
  return (
    <>
      <div className = { Styles.controls }>
        <div className = { Styles.controlsDashBoard }>
          <ControlBar />
          <VolumeBar />
        </div>

        <ProgressBar _seekTo = { props._seekTo } />
      </div>
    </>
  );
};
