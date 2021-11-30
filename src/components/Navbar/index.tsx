import React from 'react';
import { useUsers } from '../../hooks/user';
import { NavbarCF } from './styles';
import logo from '../../assets/images/logo.png';
import { SiCashapp } from 'react-icons/si';
import { FaUserCircle } from 'react-icons/fa';

const Navbar: React.FC = () => {

  //Estou pegando o contexto direto no componente pq seriam muitas informações para passar por props.
  //Isso pode ser alterado no futuro se preferirem
  const { getCurrentUser } = useUsers();

  return(
      <NavbarCF firstColor={getCurrentUser()?.color.firstColor} secondColor={getCurrentUser()?.color.secondColor} >
        <div>
          <img src={logo} alt="Monopoly Logo" style={{ height: '90%'}} />
        </div>
        <div className="user_infos">
          <div><FaUserCircle style={{height: 40, width: 40, color:'#fff', marginRight: 5}}/></div>
          <p className="user_title">{getCurrentUser()?.name}</p>
          <div><SiCashapp style={{height: 30, width: 30, color:'#fff', marginRight: 5, marginLeft: 20}}/></div>
          <p className="user_title">{getCurrentUser()?.cash.toLocaleString('pt-br', {minimumFractionDigits: 2})}</p>
        </div>
      </NavbarCF>
  );
}

export default Navbar;