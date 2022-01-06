import React from "react";
import { UsersProvider } from "./user";
import { ToastProvider } from "./toast";

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <UsersProvider>{children}</UsersProvider>
    </ToastProvider>
  );
};

export default AppProvider;
