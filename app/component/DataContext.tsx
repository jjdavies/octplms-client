import { createContext, ReactNode, useState } from 'react';
import User from '../interface/User';

interface DataProviderState {
  user: User | null;
  setUserData: (userData: User) => void;
}

interface DataProviderProps {
  children: ReactNode;
}

const DataContext = createContext({} as DataProviderState);

export function DataProvider({ children }: DataProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const setUserData = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', userData.username);
  };
  return (
    <DataContext.Provider value={{ user, setUserData }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
