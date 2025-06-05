import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setAuthUser(JSON.parse(storedUser));
      }
    };
    loadUser();
  }, []);

  const logIn = async (user) => {
    await AsyncStorage.setItem("user", JSON.stringify(user));
    setAuthUser(user);
  };

  const logOut = async () => {
    await AsyncStorage.removeItem("user");
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
