import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  //CameraProvider 관련 내용
  const [isCamera, setIsCamera] = useState(false);

  // lost_access_token 관련 함수
  const setLostAccessToken = (token) => {
    localStorage.setItem('lost_access_token', token);
  };
  const getLostAccessToken = () => {
    return localStorage.getItem('lost_access_token');
  };
  const removeLostAccessToken = () => {
    localStorage.removeItem('lost_access_token');
  };

  // event_access_token 관련 함수
  const setEventAccessToken = (token) => {
    localStorage.setItem('event_access_token', token);
  };
  const getEventAccessToken = () => {
    return localStorage.getItem('event_access_token');
  };
  const removeEventAccessToken = () => {
    localStorage.removeItem('event_access_token');
  };

  const value = {
    // lost_access_token 관련 함수
    setLostAccessToken,
    getLostAccessToken,
    removeLostAccessToken,

    // event_access_token 관련 함수
    setEventAccessToken,
    getEventAccessToken,
    removeEventAccessToken,

    // 카메라 상태 관련 함수
    isCamera,
    setIsCamera,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const { setLostAccessToken, getLostAccessToken, removeLostAccessToken } = useContext(AuthContext);

  return {
    setLostAccessToken,
    getLostAccessToken,
    removeLostAccessToken,
  };
};

export const useCamera = () => {
  const { isCamera, setIsCamera } = useContext(AuthContext);

  return { isCamera, setIsCamera };
};

export const useEvent = () => {
  const { setEventAccessToken, getEventAccessToken, removeEventAccessToken } = useContext(AuthContext);

  return {
    setEventAccessToken,
    getEventAccessToken,
    removeEventAccessToken,
  };
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
