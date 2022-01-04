import React from 'react';
import '../../App.css';

interface PlaceProps {
  backgroundColor:
    | 'red'
    | 'yellow'
    | 'green'
    | 'dark-blue'
    | 'purple'
    | 'orange'
    | 'dark-purple'
    | 'light-blue';
  name: string;
  price: number;
  threeLineName?: boolean;
  longName?: boolean;
  aditionalClasses?: string;
}

const Place = ({
  backgroundColor,
  name,
  price,
  threeLineName,
  longName,
  aditionalClasses,
}: PlaceProps) => {
  return (
    <div className={`space property ${aditionalClasses? aditionalClasses:""}`}>
      <div className="container">
        <div className={`color-bar ${backgroundColor}`}></div>
        <div
          className={`name ${threeLineName ? threeLineName : ''} ${
            longName ? longName : ''
          }`}
        >
          {name}
        </div>
        <div className="price">Preço R$: {price}</div>
      </div>
    </div>
  );
};

export default Place;
