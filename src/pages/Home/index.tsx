import React, { useEffect, useState } from 'react';
import GetPlayersModal from '../../components/PlayersModal';
import { User, useUsers } from '../../hooks/user';
import { HomeCF } from './styles';

const Home: React.FC = () => {

    const [isModalVisible, setModalVisible] = useState(true);
    const { users, addUser } = useUsers();

    const onReceivedUsers = (currentUser: User) => { 
      addUser(currentUser);
      setModalVisible(false);
    }

    useEffect(() => {
      console.log("Dado vindo do store", users);
    } , [users]);
  
    return (
      <HomeCF>
       <GetPlayersModal visible={isModalVisible} onReceivedUsers={onReceivedUsers}/>
      </HomeCF>
    );
}

export default Home;

