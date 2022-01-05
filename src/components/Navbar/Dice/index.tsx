import React, { useState } from "react";
import { FaDice } from "react-icons/fa";
import { DiceCF } from "./styles";
import animationData from "./AnimationData/dice_animation.json";
import Lottie from "lottie-react";
import Button from "../../Button";
import { useUsers } from "../../../hooks/user";

interface DiceProps {
  firstColor: string | undefined;
  secondColor: string | undefined;
  isMyTurn: boolean;
}

export const Dice: React.FC<DiceProps> = ({
  isMyTurn,
  firstColor,
  secondColor,
  ...props
}) => {
  const { jumpHouses } = useUsers();

  const [segment, setSegment] = useState<[number, number]>([50, 160]);
  const [isReleased, setReleased] = useState<boolean>(false);
  const [diceValue, setDiceValue] = useState<number>(1);
  const [isLoading, setLoading] = useState<boolean>(false);

  const generateDiceValue = () => {
    if (!isLoading) {
      setSegment([50, 300]);
      setLoading(true);
      setReleased(false);
      setTimeout(() => {
        setSegment([50, 160]);
        setReleased(true);
        let value = Math.floor(Math.random() * 12) + 1;
        setDiceValue(value);
        setLoading(false);
        jumpHouses(value);
      }, 3000);
    }
  };

  const resetValues = () => {
    setTimeout(() => {
      if (isReleased) {
        setSegment([50, 160]);
        setReleased(false);
      }
    }, 3000);
  };

  return (
    <DiceCF
      firstColor={firstColor}
      secondColor={secondColor}
      onMouseLeave={resetValues}
    >
      <div>
        <FaDice
          style={{
            height: 40,
            width: 40,
            color: "#fff",
            marginRight: 5,
            marginLeft: 20,
          }}
        />
      </div>
      <p className="title">Dados</p>
      <div className="play_dice">
        {!isReleased ? (
          <Lottie
            animationData={animationData}
            height={300}
            width={300}
            initialSegment={segment}
          />
        ) : (
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              height: 350,
            }}
          >
            <p className="dice_value">{diceValue}</p>
          </div>
        )}
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Button
            onClick={generateDiceValue}
            loading={isLoading}
            disabled={!isMyTurn}
            style={{ opacity: !isMyTurn ? 0.5 : 1 }}
          >
            {isMyTurn ? "Lançar dados" : "Aguarde sua vez"}
          </Button>
        </div>
      </div>
    </DiceCF>
  );
};
