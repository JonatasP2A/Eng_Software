import React from 'react';
import { useUsers } from '../../hooks/user';
import { NavbarCF } from './styles';
import logo from '../../assets/images/logo.png';
import { UsersInfos } from './UsersInfos';
import { CashInfo } from './CashInfo';

const Navbar: React.FC = () => {

  //Estou pegando o contexto direto no componente pq seriam muitas informações para passar por props.
  //Isso pode ser alterado no futuro se preferirem
  const { getCurrentUser, getOpponents } = useUsers();

  return(
      <NavbarCF firstColor={getCurrentUser()?.color.firstColor} secondColor={getCurrentUser()?.color.secondColor} >
        <div>
          <img src={logo} alt="Monopoly Logo" style={{ height: '90%'}} />
        </div>
        <div className="user_infos">
          <UsersInfos currentUser={getCurrentUser()} opponents={getOpponents()} firstColor={getCurrentUser()?.color.firstColor} secondColor={getCurrentUser()?.color.secondColor}/>
          <CashInfo cash={getCurrentUser()?.cash}/>
        </div>
      </NavbarCF>
  );
}

export default Navbar;