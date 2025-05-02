import React, { createContext, useState, ReactNode } from 'react';

interface GlobalContextProps {
  sharedValue: string;
  setSharedValue: (val: string) => void;
}

export const GlobalContext = createContext<GlobalContextProps>({
  sharedValue: '',
  setSharedValue: () => {},
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [sharedValue, setSharedValue] = useState('Valor inicial');

  return (
    <GlobalContext.Provider value={{ sharedValue, setSharedValue }}>
      {children}
    </GlobalContext.Provider>
  );
};