import React from 'react';

interface TaxProps {
  type: 'income' | 'luxury';
  name: string;
  instructions: string;
}

const Tax: React.FC<TaxProps> = ({ type, name, instructions }) => {
  return (
    <div className={`space fee ${type}-tax`}>
      <div className="container">
        <div className="name">{name}</div>
        <div className="diamond"></div>
        <div className="instructions">{instructions}</div>
      </div>
    </div>
  );
};

export default Tax;
