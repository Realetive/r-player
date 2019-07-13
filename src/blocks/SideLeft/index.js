// Core
import React from 'react';
// import useStoreon from 'storeon/react';

// Styles
// import styles from './style.module.css';

// Components
import { ColumnLeft } from '../../components/ColumnLeft';
import { ContentLeft } from '../../components/ContentLeft';

export const SideLeft = () => {

  return (
    <>
      <div className = 'player__side'>
        <ColumnLeft />
        <ContentLeft />
      </div>
    </>
  );
};
