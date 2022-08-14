import React from 'react';
import { createContext, useState } from 'react';

interface UserType {
  [key: string]: string | null | number;
}

interface UserContextType {
  user: UserType | null;
  changeUser: (user: UserType | null) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [user, setUser] = useState<UserType | null>(null);

  const changeUser = (newUser: UserType | null): void => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
