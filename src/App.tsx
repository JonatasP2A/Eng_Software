import React, { useState } from 'react';
import './App.css';
import GetPlayersModal from './components/PlayersModal';

function App() {

  const [isModalVisible, setModalVisible] = useState(true);

  // const onReceivedUsers = (currentUsers) => { 

  // }

  return (
    <div className="App">
     <GetPlayersModal isVisible={isModalVisible} onReceivedUsers={() => {}}/>
    </div>
  );
}

export default App;
