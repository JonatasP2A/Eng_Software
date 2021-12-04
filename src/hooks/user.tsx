import React, { createContext, useState, useContext } from 'react';
import { BackgroundColors } from '../components/PlayersModal/Components/ColorSelector';
import { USER_TYPES, COLORS, OPPONENTS } from '../constants';
export interface User{
  id: number;
  name: string;
  color: BackgroundColors;
  cash: number;
  type: number
}

interface IUserContextData {
  users: User[];
  addUsers: (playerUser: User, opponentsNumber: number) => void;
  removeUser: (id: number) => void;
  getUser: (id: number) => User | undefined;
  getCurrentUser: () => User | undefined;
  getUsers: () => User[];
  getOpponents: () => User[];
}

export const UsersContext = createContext({} as IUserContextData);

const UsersProvider:React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUsers = (playerUser: User, opponentsNumber: number) => {
    setUsers([...users, ...generateOpponents(opponentsNumber, playerUser)]);
  };

  const removeUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const getUser = (id: number) => {
    return users.find(user => user.id === id);
  };

  const getCurrentUser = () => {
    return users.find(user => user.type === USER_TYPES.CURRENT_USER)
  }

  const getOpponents = () => {
    console.log("Estou mandando esse usuários aqui: ", users);
    return users.filter(user => user.type === USER_TYPES.BOT)
  }

  const getUsers = () => {
    return users;
  };

  const generateOpponents = (numberOfOpponents: number, playerUser: User) => {
     const response = [playerUser];
     const availableColors = COLORS;
     response.forEach(user => {
       if(availableColors.includes(user.color)){
        availableColors.splice(availableColors.indexOf(user.color), 1);
       }
     });
     console.log("Numero de oponents: ", numberOfOpponents);
     for(let i = 0; i < numberOfOpponents; i++){
        const currentOpponent = OPPONENTS[i];
        currentOpponent.color = availableColors[0];
        availableColors.shift();
        response.push(currentOpponent);
     }
     console.log("Usuários da sessão: ", response);
     return response;
  }
  

  return (
    <UsersContext.Provider
      value={{ users, addUsers, removeUser, getUser, getCurrentUser, getUsers, getOpponents }}
    >
      {children}
    </UsersContext.Provider>
  );
};

const useUsers = () => {
  const context = useContext(UsersContext);

  return context;
};

export { UsersProvider, useUsers };