import { adminAxiosInstance } from '@/api/axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        try {
          const response = await adminAxiosInstance.get('/test/admin', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          if (response.status === 200) {
            if (location.pathname === '/admin/event') {
              navigate(location.state?.from || location.pathname);
            } else if (location.pathname === '/admin/' || location.pathname === '/admin') {
              navigate(location.state?.from || '/admin/losts');
            } else {
              navigate(location.state?.from);
            }
          }
        } catch (err) {
          // 토큰이 유효하지 않으면 로그인 페이지에 머무름
        }
      }
    };

    checkToken();
  }, [navigate]);

  const adminAccess = async (username, password) => {
    try {
      const response = await adminAxiosInstance.post('/admin/token', { username, password });
      if (response.status === 200) {
        const { accessToken } = response.data.data;
        localStorage.setItem('accessToken', accessToken);
        setIsLoggedIn(true);
        navigate('/admin/losts');
        window.location.reload();
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
    <LoginContainer>
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
