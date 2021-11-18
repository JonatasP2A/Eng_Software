import React, { useState, useEffect, useRef, useCallback } from 'react';
import logo from '../../assets/images/monopoly-logo.png';
import Input from '../Input';
import Button from '../Button';
import { FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import './styles.css';

interface ModalProps {
  isVisible: boolean;
  onReceivedUsers: () => void;
}

const GetPlayersModal: React.FC<ModalProps> = ({ isVisible, onReceivedUsers }) => {
  const [currentPlayers, setValues] = useState<string[]>([]);
  const formRef = useRef<FormHandles>(null);
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);

  const addPlayerInput = () => {
    if(numberOfPlayers < 6){
      setNumberOfPlayers((prevState) => prevState + 1);
    }
  }

  const setCurrentInputs = () => {
    var inputs = [];
    for (var i = 0; i < numberOfPlayers; i++) {
      inputs.push(<Input key={i} name={`player${i + 1}`} icon={FiUser} placeholder={`Jogador ${i+1}`}/>
      );
    }
    return inputs;
  }


  return (
    <div className="modal_container">
      <div className="modal_img">
        <img src={logo} alt="Monopoly Logo" style={{ width: '60%' }} />
      </div>
      <div className="modal_form">
        <Form ref={formRef} onSubmit={onReceivedUsers}>
          {setCurrentInputs()}
          <div className="group_btn">
            <Button onClick={addPlayerInput}>Adicionar Jogador</Button>
            <Button type="submit">Iniciar</Button>
          </div>

        </Form>
      </div>
    </div>
  );
};

export default GetPlayersModal;
