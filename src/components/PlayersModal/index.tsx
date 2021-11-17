import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/images/monopoly-logo.png';
import Input from '../Input';
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


  return (
    <div className="modal_container">
      <div className="modal_content">
        <div className="modal_img">
          <img src={logo} alt="Monopoly Logo" style={{ width: '60%' }} />
        </div>
        <div className="modal_form">
          <Form ref={formRef} onSubmit={onReceivedUsers}>

            <Input name="player1" icon={FiUser} placeholder="Jogador 1" />
            <Input name="player2" icon={FiUser} placeholder="Jogador 2" />

          </Form>
        </div>
      </div>
    </div>
  );
};

export default GetPlayersModal;
