// AdminPage.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as jwtDecode from 'jwt-decode';
import axios from 'axios';
import AdminLogin from './AdminLogin';
import Post from './Post';
import BlockList from './BlockList';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:3000',
  timeout: 1000,
});

const AdminPage = () => {
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('posts');

  const handlePostsClick = () => setActiveComponent('posts');
  const handleBlockListClick = () => setActiveComponent('blockList');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkTokenExpiration();
      setIsLoggedIn(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const checkTokenExpiration = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('token');
          alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
          setIsLoggedIn(false);
        }
      } catch (e) {
        console.error('Token decode error:', e);
        localStorage.removeItem('token');
        setIsLoggedIn(false);
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

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  // if (!isLoggedIn) {
  //   return <AdminLogin onLoginSuccess={() => setIsLoggedIn(true)} />;
  // }

  return (
    <>
      {isNavbarOpen && (
        <Navbar isOpen={isNavbarOpen}>
          <BtnContainer>
            <BtnWrapper>
              <LostBtn>분실물 게시판 관리</LostBtn>
              <EventBtn>이벤트 관리</EventBtn>
            </BtnWrapper>
            <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
          </BtnContainer>
          {error && <Error>{error}</Error>}
        </Navbar>
      )}
      <Container>
        <SelectBar>
          <Title onClick={handlePostsClick} active={activeComponent === 'posts'}>
            게시글
          </Title>
          <Title onClick={handleBlockListClick} active={activeComponent === 'blockList'}>
            차단 목록
          </Title>
        </SelectBar>
        {activeComponent === 'posts' && <Post />}
        {activeComponent === 'blockList' && <BlockList />}
      </Container>
    </>
  );
};

export default AdminPage;

// const Header = ({ onToggleNavbar }) => {
//   return (
//     <HeaderContainer>
//       <ToggleButton onClick={onToggleNavbar}>Toggle </ToggleButton>
//     </HeaderContainer>
//   );
// };

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.gray10};
`;
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.gray50};
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
`;
const Navbar = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  width: 12rem;
  height: calc(var(--vh, 1vh) * 100);
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LostBtn = styled.span`
  display: flex;
  justify-content: flex-start;
  font-size: 1.125rem;
  padding: 1rem;
  gap: 0.625rem;
  align-self: stretch;
`;

const EventBtn = styled(LostBtn)``;

const LogoutBtn = styled(LostBtn)`
  margin-right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.gray70};
  color: white;
  gap: 0.625rem;
`;

const Error = styled.p`
  color: red;
  margin-top: 1rem;
`;

const SelectBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const Title = styled.div`
  cursor: pointer;
  ${(props) => props.theme.fontStyles.subHeadBold};
  font-size: 1.125rem;
  color: ${({ active, theme }) => (active ? theme.colors.gray80 : theme.colors.gray40)};
  transition: background-color 0.3s;
`;
