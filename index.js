import React from 'react';
import ReactDOM from 'react-dom/client';
import ChadinaSite from './components/ChadinaSite';
import './styles/globals.css';
import '@solana/wallet-adapter-react-ui/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChadinaSite />
  </React.StrictMode>
);