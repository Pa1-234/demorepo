import React from 'react';
import sonatalogo from "../img/sonata-logo.png"
import sharedConfig from '../config/config';
const isDemo = sharedConfig.ISDEMO;
export default function Header() {
  return (
    <header style={{ backgroundColor: '#2a3b4c', padding: '2rem', color: 'white' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          style={{
            fontSize: '1.5rem',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            marginRight: '1rem',
            color: 'white',
          }}
        >
          ☰
        </button>
        <div style={{ flexGrow: 1 }}>
          <img
            src={sonatalogo}  // Replace with the actual path to your Sonata logo image
            alt="Sonata Logo"
            style={{ height: '40px', width: 'auto', marginRight: '1rem' }}
          />
        </div>
         { isDemo && (
         <a
          href="http://localhost:8001/"  // Replace with the actual URL of your demo
          target="_blank"
          style={{
            fontSize: '1rem',
            textDecoration: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
            marginRight: '1rem', // Add a margin to match the styling
          }}
         >
          Demo
        </a>
         )}
      </div>
    </header>
  );
}
