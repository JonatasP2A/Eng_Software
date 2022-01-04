import React from 'react';
import '../../App.css';

interface RailroadProps {
  name: string;
  price: number;
  longName?: boolean;
}

const Railroad: React.FC<RailroadProps> = ({ name, price, longName }) => {
  return (
    <div className="space railroad">
      <div className="container">
        <div className={`name ${longName ? longName : ''}`}>{name}</div>
        <i className="drawing fa fa-subway"></i>
        <div className="price">Preço R$: {price}</div>
      </div>
    </div>
  );
};

export default Railroad;
