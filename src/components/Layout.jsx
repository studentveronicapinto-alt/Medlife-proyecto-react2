import React from 'react';
import Header from './Header';
import GrayBar from './GrayBar';
import FloatIAButton from './FloatIAButton';

export default function Layout({ children, showHeader = true, showGrayBar = true, showIA = true }) {
  return (
    <div className="medlife-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {showHeader && <Header />}
      {showGrayBar && <GrayBar />}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
      {showIA && <FloatIAButton />}
    </div>
  );
}
