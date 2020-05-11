import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import * as auth from '#/services/auth';

type User = gapi.auth2.GoogleUser;

interface UserContext {
  user: User | null;
  login: () => void;
  logout: () => void;
}

const defaultValue = {
  user: null,
  login: () => {},
  logout: () => {},
};

const UserContext = createContext<UserContext>(defaultValue);

export const UserProvider: React.FC = (props) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async () => {
    const user = await auth.logIn();
    setUser(user);
  };

  const logout = async () => await auth.logOut();

  const tryInitialLogin = async () => {
    if (auth.isLoggedIn()) {
      await login();
    }
  };

  useEffect(() => {
    auth.initGoogleAuth({ onInit: tryInitialLogin });
  }, []);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
