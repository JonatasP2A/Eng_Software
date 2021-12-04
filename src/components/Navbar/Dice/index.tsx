import React, {useState} from 'react';
import { FaDice } from 'react-icons/fa';
import { DiceCF } from './styles';
import animationData from './AnimationData/dice_animation.json';
import Lottie from 'lottie-react';

interface DiceProps {
    firstColor: string | undefined,
    secondColor: string | undefined,
}

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

export const Dice: React.FC<DiceProps> = ({ firstColor, secondColor, ...props}) => {

    const [isStopped, setIsStopped] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

  return(
        <DiceCF firstColor = {firstColor} secondColor={secondColor}>
          <div><FaDice style={{height: 40, width: 40, color:'#fff', marginRight: 5, marginLeft: 20}}/></div>
          <p className="title">Dados</p>
          <div className="play_dice">
          <Lottie animationData={animationData}
              height={400}
              width={400}/>
          </div>
        </DiceCF>
  );
}