import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  const [actived, setActived] = useState(false);

  const toggleState = () => {
    setActived((prevState) => !prevState);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Card name="Leo" actived={actived} onClick={toggleState} />
      </header>
    </div>
  );
}

export default App;
