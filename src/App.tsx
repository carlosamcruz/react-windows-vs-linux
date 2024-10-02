import React from 'react';
import logo from './logo.svg';
import './App.css';

import crypto from 'crypto';
export let vcrypto = crypto;

function App() {

  const hash = vcrypto.createHash('sha256');
  // Update the hash with some data (for example, a string)
  hash.update('Hello, World!');
  // Get the resulting hash in hexadecimal format
  const hashedValue = hash.digest('hex');

  return (
    <div className="App">
      <header className="App-header">
        <p>
          hash: {hashedValue}
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
