import React, { useState, useEffect } from 'react';

interface CardProps {
  name?: string;
  actived: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ name, actived, onClick }) => {
  const [values, setValues] = useState<string[]>([]);

  const umafuncao = (arg1: string) => {
    return <h1>Texto {arg1}</h1>;
  };

  useEffect(() => {
    setValues((prevState) => [...prevState, prevState.length.toString()]);
  }, [actived]);

  return (
    <div className="card">
      {values.map((value, index) => (
        <React.Fragment key={index}>{umafuncao(value)}</React.Fragment>
      ))}
      {name && <h1>{name}</h1>}
      <button onClick={onClick}>alterar estado</button>
    </div>
  );
};

export default Card;
