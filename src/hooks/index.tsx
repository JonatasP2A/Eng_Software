import React, {createContext} from 'react';
import { __useUserData } from './user';

export const StoreContext = createContext({});

const AppProvider: React.FC = ({ children }) => {
  return (
    <StoreContext.Provider value = {{
      user: __useUserData(),
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export default AppProvider;