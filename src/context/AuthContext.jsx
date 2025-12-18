import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  token: null,
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("Authorization"));

  useEffect(() => {
    const savedToken = localStorage.getItem("Authorization");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = (authToken) => {
    localStorage.setItem("Authorization", authToken);
    setToken(authToken);
  };

  const logout = () => {
    localStorage.removeItem("Authorization");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
