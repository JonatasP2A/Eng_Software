import React, { useState, useEffect } from 'react';

const Card: React.FC = () => {
  const [actived, setActived] = useState(false);
  const [values, setValues] = useState<string[]>([]);

  const umafuncao = (arg1: string) => {
    return <h1>Texto {arg1}</h1>;
  };

  const toggleState = () => {
    setActived((prevState) => !prevState);
  };

  useEffect(() => {
    setValues((prevState) => [...prevState, prevState.length.toString()]);
  }, [actived]);

  return (
    <div className="card">
      {values.map((value, index) => (
        <React.Fragment key={index}>{umafuncao(value)}</React.Fragment>
      ))}
      <button onClick={toggleState}>alterar estado</button>
    </div>
  );
};

export default Card;
