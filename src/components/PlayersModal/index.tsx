import React, { useState } from 'react';
import logo from '../../assets/images/monopoly-logo.png';
import Input, {ErrorProps} from '../Input';
import Button from '../Button';
import { FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { ColorSelector } from './Components';
import { BackgroundColors } from './Components/ColorSelector';
import { Modal } from './styles';
import { RED_COLOR } from '../../constants/colors';


interface ModalProps {
  visible: boolean;
  onReceivedUsers: (value: PlayerProps) => void;
}
export interface PlayerProps {
  name: string,
  playerColor: BackgroundColors
}

const playerObj = {
  name: '',
  playerColor: RED_COLOR
}

const inputError = {
  isError: false,
  errorText: ''
}


const GetPlayersModal: React.FC<ModalProps> = ({ visible, onReceivedUsers }) => {
  const [currentPlayer, setCurrentPlayer] = useState<PlayerProps>(playerObj);
  const [modalBackgroundColor, setModalBackgroundColor] = useState<BackgroundColors>(RED_COLOR);
  const [error, setError] = useState<ErrorProps>(inputError);

  const validateInputs = () => {
    if(currentPlayer.name.length <= 0){
      setError({isError:true, errorText: "Digite um texto válido"});
      return;
    }
    onReceivedUsers(currentPlayer);
  }

  const handleChange = (value: string) => {
    const atualizedPlayers = ({ ...currentPlayer, name: value })

    setCurrentPlayer(atualizedPlayers);
  }

  const setBackgroundColor = ((color:BackgroundColors) => {
    setModalBackgroundColor(color);
    setCurrentPlayer({...currentPlayer, playerColor: color})
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
          <div className="btn">
            <Button onClick={validateInputs}>Iniciar</Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default GetPlayersModal;
