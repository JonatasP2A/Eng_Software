import React, { createContext, useState, useContext } from "react";
import { USER_TYPES, COLORS, OPPONENTS } from "../constants";
import { User } from "../types/user";

interface IUserContextData {
  users: User[];
  addUsers: (playerUser: User, opponentsNumber: number) => void;
  removeUser: (id: number) => void;
  getUser: (id: number) => User | undefined;
  getCurrentUser: () => User | undefined;
  getUsers: () => User[];
  getOpponents: () => User[];
  startGame: () => void;
  nextUserTurn: () => void;
}

export const UsersContext = createContext({} as IUserContextData);

const UsersProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [userTurn, setUserTurn] = useState<User | undefined>(undefined);

  const addUsers = (playerUser: User, opponentsNumber: number) => {
    setUsers([...users, ...generateOpponents(opponentsNumber, playerUser)]);
  };

  const removeUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const getUser = (id: number) => {
    return users.find((user) => user.id === id);
  };

  const getCurrentUser = () => {
    return users.find((user) => user.type === USER_TYPES.CURRENT_USER);
  };

  const getOpponents = () => {
    return users.filter((user) => user.type === USER_TYPES.BOT);
  };

  const getUsers = () => {
    return users;
  };

  const generateOpponents = (numberOfOpponents: number, playerUser: User) => {
    const response = [playerUser];
    const availableColors = COLORS;
    response.forEach((user) => {
      if (availableColors.includes(user.color)) {
        availableColors.splice(availableColors.indexOf(user.color), 1);
      }
    });

    for (let i = 0; i < numberOfOpponents; i++) {
      const currentOpponent = OPPONENTS[i];
      currentOpponent.color = availableColors[0];
      availableColors.shift();
      response.push(currentOpponent);
    }

    return response;
  };

  const startGame = () => {
    setUserTurn(users[0]);
  };

  const nextUserTurn = () => {
    const userIndex = users.findIndex((user) => user.id === userTurn!.id);

    if (userIndex >= 0) {
      const nextUser = (userIndex + 1) % users.length;

      setUserTurn(users[nextUser]);
    }
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        addUsers,
        removeUser,
        getUser,
        getCurrentUser,
        getUsers,
        getOpponents,
        startGame,
        nextUserTurn,
      }}
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
