import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../utils/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyExistingToken = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const res = await api.get('/auth/verify');
        setIsAuthenticated(true);
        setAdminUsername(res.data.admin.username);
      } catch (err) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUsername');
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    verifyExistingToken();
  }, []);

  const login = async (username, password) => {
    const res = await api.post('/auth/login', { username, password });
    localStorage.setItem('adminToken', res.data.token);
    localStorage.setItem('adminUsername', res.data.admin.username);
    setIsAuthenticated(true);
    setAdminUsername(res.data.admin.username);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
    setIsAuthenticated(false);
    setAdminUsername('');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, adminUsername, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
