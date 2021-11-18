import React, { useState } from 'react';
import './App.css';
import GetPlayersModal, { PlayerProps } from './components/PlayersModal';

function App() {

  const [isModalVisible, setModalVisible] = useState(true);

  const onReceivedUsers = (currentUsers: PlayerProps[]) => { 
    console.log("Cheguei aquiiiii: ", currentUsers);
  }

  return (
    <div className="App">
     <GetPlayersModal isVisible={isModalVisible} onReceivedUsers={onReceivedUsers}/>
    </div>
  );
}

export default App;
