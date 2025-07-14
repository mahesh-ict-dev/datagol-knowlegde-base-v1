// src/theme/Root.js
import React from 'react';
import MendableWidget from '../components/MendableWidget';

export default function Root({ children }) {
  return (
    <>
      {children}
      <MendableWidget />
    </>
  );
}