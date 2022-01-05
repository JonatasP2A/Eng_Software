import React from "react";
import { useUsers } from "../../hooks/user";
import { NavbarCF } from "./styles";
import logo from "../../assets/images/logo.png";
import { UsersInfos } from "./UsersInfos";
import { CashInfo } from "./CashInfo";
import { Dice } from "./Dice";

const Navbar: React.FC = () => {
  //Estou pegando o contexto direto no componente pq seriam muitas informações para passar por props.
  //Isso pode ser alterado no futuro se preferirem
  const { users, userTurn } = useUsers();

  return(
      <NavbarCF firstColor={userTurn?.color.firstColor} secondColor={userTurn?.color.secondColor} >
        <div>
          <img src={logo} alt="Monopoly Logo" style={{ height: '60px'}} />
        </div>
        <div className="infos">
          <Dice isMyTurn={true} firstColor={userTurn?.color.firstColor} secondColor={userTurn?.color.secondColor}/>
          <UsersInfos users={users} userTurn={userTurn} firstColor={userTurn?.color.firstColor} secondColor={userTurn?.color.secondColor}/>
          <CashInfo cash={userTurn?.cash}/>
        </div>
      </NavbarCF>
  );
};

export default Navbar;
