import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  /*
    인증 시 바로 촬영 컴포넌트로 넘어가도록 구현 필요
    그러나 state를 사용해서 전역 상태를 관리할 경우, 리렌더링이 되어도 후순위이기 때문에
    첫 1회 시도 시 항상 lost-and-found 페이지에 머무는 문제 발생
    -> 따라서 당장 token이 있는지 확인하는 로직으로 변경
  */
  //const [accessToken, setAccessToken] = useState(localStorage.getItem('lost_access_token'));

  const value = {
    //accessToken,
    setAccessToken: (token) => {
      localStorage.setItem('lost_access_token', token);
      //setAccessToken(token);
    },
    getAccessToken: () => {
      const token = localStorage.getItem('lost_access_token');
      //setAccessToken(token);
      return token;
    },
    removeAccessToken: () => {
      localStorage.removeItem('lost_access_token');
      //setAccessToken(null);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//사용하는 곳에서 value를 쉽게 가져올 수 있도록 커스텀 훅 제작
export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
