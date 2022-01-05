import React from "react";
import { Container } from "./styles";
import { FaUserCircle } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { User } from "../../../types/user";

interface UsersInfosProps {
  users: User[];
  userTurn: User | undefined;
  firstColor: string | undefined;
  secondColor: string | undefined;
}

export const UsersInfos: React.FC<UsersInfosProps> = ({
  users,
  userTurn,
  firstColor,
  secondColor,
  ...rest
}) => {

  return (
    <Container firstColor={firstColor} secondColor={secondColor}>
      <div className="user_infos">
        <div>
          <FaUserCircle
            style={{ height: 40, width: 40, color: "#fff", marginRight: 5 }}
          />
        </div>
        <p className="title">{userTurn?.name}</p>
        <div className="opponents_infos">
          {users.map((user, index) => (
            <div key={index}>
              <div className="item-info">
                <div>
                  <FaUserCircle
                    style={{
                      height: 20,
                      width: 20,
                      color: "#fff",
                      marginRight: 5,
                    }}
                  />
                </div>
                <p className="item-title">{user.name}</p>
                <div>
                  <SiCashapp
                    style={{
                      height: 20,
                      width: 20,
                      color: "#fff",
                      marginRight: 5,
                      marginLeft: 20,
                    }}
                  />
                </div>
                <p className="item-title">
                  {user.cash.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
