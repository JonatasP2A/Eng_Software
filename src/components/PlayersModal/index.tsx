import React, { useState, useEffect, useRef, useCallback } from 'react';
import logo from '../../assets/images/monopoly-logo.png';
import Input from '../Input';
import Button from '../Button';
import { FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import './styles.css';

interface ModalProps {
  isVisible: boolean;
  onReceivedUsers: (value:PlayerProps[]) => void;
}

export interface PlayerProps {
  id: number,
  name: string
}

const playersInputs = [
  {
    id: 1,
    name: 'Player 1',
  },
  {
    id: 2,
    name: 'Player 2',
  },
]


const GetPlayersModal: React.FC<ModalProps> = ({ isVisible, onReceivedUsers }) => {
  const [currentPlayers, setCurrentPlayers] = useState<PlayerProps[]>(playersInputs);


  const addPlayerInput = () => {
    setCurrentPlayers([...currentPlayers, { id: currentPlayers.length + 1, name: `Player ${currentPlayers.length + 1}` }])
  }

  const validateInputs = () => {
    onReceivedUsers(currentPlayers);
  }

  const handleChange = (value: string, id: number ) => {
    const atualizedPlayers = currentPlayers.map((item) => (
      item.id === id ? ({...item, name: value}) : item
    ));
    console.log("atualizedPlayers::::::", atualizedPlayers);
    setCurrentPlayers(atualizedPlayers);
  }

  return (
    <div className="modal_container">
      <div className="modal_img">
        <img src={logo} alt="Monopoly Logo" style={{ width: '60%' }} />
      </div>
      <div className="modal_form">

        <Form onSubmit={() => {}} >
          {currentPlayers.map((item, index) => (
            <Input onChange={(event) => handleChange(event.target.value, item.id)} key={index} name={item.name} icon={FiUser} placeholder={`Jogador ${index + 1}`} />
          ))}
          <div className="group_btn">
            <Button onClick={addPlayerInput}>Adicionar Jogador</Button>
            <Button onClick={validateInputs}>Iniciar</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default GetPlayersModal;
