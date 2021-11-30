import React, { createContext, useState, useContext } from 'react';
import { BackgroundColors } from '../components/PlayersModal/Components/ColorSelector';
import { USER_TYPES } from '../constants/colors';
export interface User{
  id: number;
  name: string;
  color: BackgroundColors;
  cash: number;
  type: number
}

interface IUserContextData {
  users: User[];
  addUser: (newUser: User) => void;
  removeUser: (id: number) => void;
  getUser: (id: number) => User | undefined;
  getCurrentUser: () => User | undefined;
}

export const UsersContext = createContext({} as IUserContextData);

const UsersProvider:React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUsers([...users, newUser]);
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


  return (
    <UsersContext.Provider
      value={{ users, addUser, removeUser, getUser, getCurrentUser }}
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