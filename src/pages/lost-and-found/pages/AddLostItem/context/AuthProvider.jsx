import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('lost_access_token'));

  const value = {
    accessToken,
    setAccessToken: (token) => {
      localStorage.setItem('lost_access_token', token);
      setAccessToken(token);
    },
    removeAccessToken: () => {
      localStorage.removeItem('lost_access_token');
      setAccessToken(null);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//사용하는 곳에서 value를 쉽게 가져올 수 있도록 커스텀 훅 제작
export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
