// Core
import React from 'react';
import useStoreon from 'storeon/react';

// Components
import { ProgressBar } from '../../components/ProgressBar';
import { ControlBar } from '../../components/ControlBar';

// Styles
// import styles from './style.module.css';

export const Controls = (props) => {
  return (
    <>
      <ControlBar />
      <ProgressBar _seekTo = { props._seekTo } />
    </>
  );
};
