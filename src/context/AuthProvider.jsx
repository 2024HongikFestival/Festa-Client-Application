import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

//CameraProvider, AuthProvider로 나누어야 하지만 AuthProvider에 모아둠
export const AuthProvider = ({ children }) => {
  //CameraProvider 관련 내용
  const [isCamera, setIsCamera] = useState(false);

  //AuthProvider 관련 내용
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
    isCamera,
    setIsCamera,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//사용하는 곳에서 value를 쉽게 가져올 수 있도록 커스텀 훅 제작
export const useAuth = () => useContext(AuthContext);

//위랑 로직이 같지만, 사용성을 위해 새로운 이름으로 만듬
export const useCamera = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
