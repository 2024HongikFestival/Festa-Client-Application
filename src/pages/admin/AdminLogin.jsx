import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:3000',
  timeout: 1000,
});

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const adminAccess = async (username, password) => {
    try {
      const response = await axiosInstance.post('/admin/token', { username, password });
      if (response.status === 200) {
        const { accessToken } = response.data;
        localStorage.setItem('token', accessToken);
        alert('로그인 성공');
        navigate('/admin');
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('어드민 인증 실패');
      } else {
        setError('서버 오류');
      }
    }
  };

  return (
    <LoginContainer>
      <Title>화양연화 관리자페이지</Title>
      {error && <Error>{error}</Error>}
      <LoginInput type="text" placeholder="ID" value={username} onChange={(e) => setUsername(e.target.value)} />
      <LoginInput type="password" placeholder="PW" value={password} onChange={(e) => setPassword(e.target.value)} />
      <LoginButton onClick={adminAccess}>Login</LoginButton>
    </LoginContainer>
  );
};

export default AdminLogin;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.fontStyles.flame.Headline2};
  font-size: 2rem;
  margin-bottom: 2.5rem;
`;

const LoginInput = styled.input`
  display: flex;
  padding: 1rem 1.5rem;
  width: 16.813rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border: none;
  border-radius: 1.25rem;
  ${(props) => props.theme.fontStyles.subHeadBold};
  font-size: 1.125rem;
  &::placeholder {
    color: ${(props) => props.theme.colors.gray40};
  }
  &:focus {
    outline: none;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.gray10};
  gap: 1rem;
`;

const LoginButton = styled.button`
  background-color: ${(props) => props.theme.colors.gray80};
  display: flex;
  width: 16.813rem;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 1.25rem;
  justify-content: center;
  align-items: center;
  color: white;
  ${(props) => props.theme.fontStyles.subHeadBold};
  font-size: 1.125rem;
`;

const Error = styled.p`
  color: red;
  margin-top: 1rem;
`;
