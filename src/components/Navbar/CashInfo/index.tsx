import React from 'react';
import { SiCashapp } from 'react-icons/si';
import { CashCF } from './styles';

interface CashProps{
    cash: number | undefined;
}

export const CashInfo: React.FC<CashProps> = ({cash, ...props}) => {

  return(
        <CashCF>
          <div><SiCashapp style={{height: 30, width: 30, color:'#fff', marginRight: 5, marginLeft: 20}}/></div>
          <p className="user_title">{cash?.toLocaleString('pt-br', {minimumFractionDigits: 2})}</p>
        </CashCF>
  );
}