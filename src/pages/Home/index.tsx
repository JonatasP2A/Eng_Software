import React, { useEffect, useState } from 'react';
import GetPlayersModal, { PlayerProps } from '../../components/PlayersModal';
import { useUserContext } from '../../hooks/user';
import { HomeCF } from './styles';

const Home: React.FC = () => {

    const [isModalVisible, setModalVisible] = useState(true);
    const storeUser = useUserContext();

    const onReceivedUsers = (currentUsers: PlayerProps) => { 
      setModalVisible(false);
    }

    useEffect(() => {
      console.log("Dado vindo do store", storeUser);
    } , [storeUser]);
  
    return (
      <HomeCF>
       <GetPlayersModal visible={isModalVisible} onReceivedUsers={onReceivedUsers}/>
      </HomeCF>
    );
}

export default Home;

