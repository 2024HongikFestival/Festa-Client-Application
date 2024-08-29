import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const value = {
    setAccessToken: (token) => {
      localStorage.setItem('lost_access_token', token);
    },
    getAccessToken: () => {
      const token = localStorage.getItem('lost_access_token');
      return token;
    },
    removeAccessToken: () => {
      localStorage.removeItem('lost_access_token');
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//사용하는 곳에서 value를 쉽게 가져올 수 있도록 커스텀 훅 제작
export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
