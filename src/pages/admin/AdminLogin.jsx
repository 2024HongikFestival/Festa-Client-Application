import { adminAxiosInstance } from '@/api/axios';
import * as jwt_decode from 'jwt-decode';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const AdminLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [resetKey, setResetKey] = useState(0);

  const checkTokenValidity = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) return false;

    try {
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000; // 현재 시간 (초 단위)
      if (decoded.exp < currentTime) {
        localStorage.removeItem('accessToken'); // 만료된 토큰 삭제
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    if (!checkTokenValidity()) {
      setResetKey((prevKey) => prevKey + 1); // 키 값을 변경하여 컴포넌트를 리렌더링
    }
  }, []);

  const adminAccess = async (username, password) => {
    try {
      const response = await adminAxiosInstance.post('/admin/token', { username, password });
      if (response.status === 200) {
        const { accessToken } = response.data.data;
        localStorage.setItem('accessToken', accessToken);
        onLoginSuccess();
        navigate('/admin');
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          setError('어드민 인증 실패');
        } else {
          setError('서버 오류');
        }
      } else if (err.request) {
        setError('서버에 응답이 없습니다.');
      } else {
        setError('요청 설정 중 오류 발생');
      }
    }
  };

  return (
    <LoginContainer key={resetKey}>
      <Title>화양연화 관리자페이지</Title>
      <Form>
        <LoginInput
          type="text"
          placeholder="ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />
        <LoginInput
          type="password"
          placeholder="PW"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </Form>
      <LoginButton onClick={() => adminAccess(username, password)}>Login</LoginButton>
    </LoginContainer>
  );
};

AdminLogin.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default AdminLogin;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.fontStyles.basic.headline2};
  font-size: 3.2rem;
  margin-bottom: 3.2rem;
`;

const LoginInput = styled.input`
  display: flex;
  padding: 1.6rem 2.4rem;
  width: 26.9rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: none;
  border-radius: 2rem;
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  font-size: 1.8rem;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray40};
  }

  &:focus {
    outline: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
    -webkit-text-fill-color: #000 !important;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.gray10};
`;

const LoginButton = styled.button`
  background-color: ${(props) => props.theme.colors.gray80};
  display: flex;
  width: 26.9rem;
  margin-top: 1.6rem;
  padding: 1.6rem 2.4rem;
  border: none;
  border-radius: 2rem;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  font-size: 1.8rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
