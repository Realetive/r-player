// Core
import React, { useState, useEffect, useRef } from 'react';
import useStoreon from 'storeon/react';


// Styles
// import styles from './style.module.css';

export const Footer = () => {

  return (
    <>
      <div className = 'player__footer'>


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
