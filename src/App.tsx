import React, { useState } from 'react';
import './App.css';
import GetPlayersModal, { PlayerProps } from './components/PlayersModal';

function App() {

  const [isModalVisible, setModalVisible] = useState(true);

  const onReceivedUsers = (currentUsers: PlayerProps) => { 
    setModalVisible(false);
  }

  return (
    <div className="App">
     <GetPlayersModal visible={isModalVisible} onReceivedUsers={onReceivedUsers}/>
    </div>
  );
}

export default App;
