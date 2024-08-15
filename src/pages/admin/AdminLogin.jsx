import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { adminAxiosInstance } from '@/api/axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const adminAccess = async (username, password) => {
    try {
      const response = await adminAxiosInstance.post('/admin/token', { username: username, password: password });
      if (response.status === 200) {
        const { accessToken } = response.data;
        localStorage.setItem('token', accessToken);
        alert('로그인 성공');
        navigate('/admin');
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          setError('어드민 인증 실패');
        } else {
          setError('서버 오류');
        }
      } else {
        console.log(err);
        setError('서버에 연결할 수 없습니다.');
      }
    }
  };

  return (
    <LoginContainer>
      <Title>화양연화 관리자페이지</Title>
      {error && <Error>{error}</Error>}
      <Form>
        <LoginInput type="text" placeholder="ID" value={username} onChange={(e) => setUsername(e.target.value)} />
        <LoginInput type="password" placeholder="PW" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form>
      <LoginButton onClick={adminAccess}>Login</LoginButton>
    </LoginContainer>
  );
};

export default AdminLogin;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.fontStyles.basic.headline2};
  font-size: 2rem;
  margin-bottom: 2rem;
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
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
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
`;

const LoginButton = styled.button`
  background-color: ${(props) => props.theme.colors.gray80};
  display: flex;
  width: 16.813rem;
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 1.25rem;
  justify-content: center;
  align-items: center;
  color: white;
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  font-size: 1.125rem;
`;

const Error = styled.p`
  color: red;
  margin-top: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
