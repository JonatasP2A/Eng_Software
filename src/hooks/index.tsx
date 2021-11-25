import React from 'react';
import { UsersProvider } from './user';

const AppProvider: React.FC = ({ children }) => {
  return (
    <UsersProvider>
      {children}
    </UsersProvider>
  );
};

export default AppProvider;