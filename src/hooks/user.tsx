import { useContext, useState } from 'react';
import { StoreContext } from "."

//TODO: Checar com o Jonatas a typagem disso 
export const useUserContext = () => {
  const store = useContext(StoreContext);
  return store;
}

export const __useUserData = () => {
  const [user, setUser] = useState("Josevaldo Testador de Contextos");

  return {
    data: {
      user,
    },
    actions: {
     setUser,
    }
  }
}
