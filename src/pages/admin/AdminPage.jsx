import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:3000',
  timeout: 1000,
});

const AdminPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Admin 인증 함수
  const adminAccess = async (username, password) => {
    try {
      const response = await axiosInstance.post('/admin/token', { username, password });
      if (response.status === 200) {
        const { accessToken } = response.data.accessToken;
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

  // 로그아웃 함수
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // 토큰 만료 체크
  const checkTokenExpiration = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('token');
          alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
          history.push('/login');
        }
      } catch (e) {
        console.error('Token decode error:', e);
        localStorage.removeItem('token');
        history.push('/login');
      }
    }
  };

  useEffect(() => {
    const interceptors = axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosInstance.interceptors.request.eject(interceptors);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(checkTokenExpiration, 300000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Navbar>
      <BtnContainer>
        <LostBtn>분실물 관리</LostBtn>
        <EventBtn>이벤트 관리</EventBtn>
        <UserBtn>사용자 관리</UserBtn>
        <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
      </BtnContainer>
      {error && <Error>{error}</Error>}
    </Navbar>
  );
};

export default AdminPage;

// 스타일 컴포넌트
const Navbar = styled.div`
  display: flex;
  width: 100%;
  height: 3.563rem;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25rem;
`;

const LostBtn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  margin-right: 1.125rem;
`;

const EventBtn = styled(LostBtn)``;

const UserBtn = styled(LostBtn)``;

const LogoutBtn = styled(LostBtn)`
  margin-right: 0;
  cursor: pointer;
`;

const Error = styled.p`
  color: red;
  margin-top: 1rem;
`;
