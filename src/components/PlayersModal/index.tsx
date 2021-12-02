import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import Input, {ErrorProps} from '../Input';
import Button from '../Button';
import { FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { ColorSelector, OpponentSelector } from './Components';
import { BackgroundColors } from './Components/ColorSelector';
import { Modal } from './styles';
import { RED_COLOR, USER_TYPES } from '../../constants/colors';
import { User } from '../../hooks/user';

interface ModalProps {
  visible: boolean;
  onReceivedUsers: (value: User, opponentsNumber: number) => void;
}

const playerObj = {
  id: 0,
  name: '',
  color: RED_COLOR,
  cash: 2000,
  type: USER_TYPES.CURRENT_USER
}

const inputError = {
  isError: false,
  errorText: ''
}


const GetPlayersModal: React.FC<ModalProps> = ({ visible, onReceivedUsers }) => {
  const [currentPlayer, setCurrentPlayer] = useState<User>(playerObj);
  const [opponentsNumber, setOpponentsNumber] = useState<number>(0);
  const [modalBackgroundColor, setModalBackgroundColor] = useState<BackgroundColors>(RED_COLOR);
  const [error, setError] = useState<ErrorProps>(inputError);

  const validateInputs = () => {
    if(currentPlayer.name.length <= 0){
      setError({isError:true, errorText: "Digite um texto válido"});
      return;
    }
    onReceivedUsers(currentPlayer, opponentsNumber);
  }

  const handleChange = (value: string) => {
    const atualizedPlayers = ({ ...currentPlayer, name: value })

    setCurrentPlayer(atualizedPlayers);
  }

  const setBackgroundColor = ((color:BackgroundColors) => {
    setModalBackgroundColor(color);
    setCurrentPlayer({...currentPlayer, color})
  })

  return (
    <Modal firstColor={modalBackgroundColor.firstColor} secondColor={modalBackgroundColor.secondColor} visible={visible} >
      <div className="modal_img">
        <img src={logo} alt="Monopoly Logo" style={{ width: '60%' }} />
      </div>
      <div className="modal_form">
        <Form onSubmit={() => { }} >
          <Input onChange={(event) => handleChange(event.target.value)} icon={FiUser} placeholder="Jogador" name="Jogador" error={error} />
          <ColorSelector onColorSelected={(color) => setBackgroundColor(color)}/>
          <OpponentSelector onOponenteNumberSelected={(newOpponentsNumber) => setOpponentsNumber(newOpponentsNumber)}/>
          <div className="btn">
            <Button onClick={validateInputs}>Iniciar</Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default GetPlayersModal;
