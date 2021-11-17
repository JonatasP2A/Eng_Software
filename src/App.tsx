import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import GetPlayersModal from './components/PlayersModal';

function App() {

  return (
    <div className="App">
     <GetPlayersModal isVisible={true} onReceivedUsers = {() => {}}/>
    </div>
  );
}

export default App;
