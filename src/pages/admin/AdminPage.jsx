import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as jwtDecode from 'jwt-decode';
import { adminAxiosInstance } from '@/api/axios';
import AdminLogin from './AdminLogin';
import Post from './Post';
import BlockList from './BlockList';
import PostDetail from './PostDetail';
import Header from '@/components/layouts/Header';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeComponent, setActiveComponent] = useState('posts');
  const [isDetailView, setIsDetailView] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !isTokenExpired(token)) {
      setIsLoggedIn(true);
    }
  }, []);

  const isTokenExpired = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.exp < Date.now() / 1000;
    } catch (error) {
      console.error('Token decode error:', error);
      return true;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const interceptors = adminAxiosInstance.interceptors.request.use(
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
      adminAxiosInstance.interceptors.request.eject(interceptors);
    };
  }, []);

  if (!isLoggedIn) {
    return <AdminLogin onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <>
      <Header />
      <Container>
        <SelectBar>
          <Title onClick={() => setActiveComponent('posts')} active={activeComponent === 'posts'}>
            게시글
          </Title>
          <Title onClick={() => setActiveComponent('blockList')} active={activeComponent === 'blockList'}>
            차단 목록
          </Title>
        </SelectBar>
        {activeComponent === 'posts' &&
          (isDetailView ? (
            <PostDetail postId={selectedPostId} onBack={() => setIsDetailView(false)} />
          ) : (
            <Post setIsDetailView={setIsDetailView} setPostId={setSelectedPostId} />
          ))}
        {activeComponent === 'blockList' && <BlockList />}
      </Container>
    </>
  );
};

export default AdminPage;

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
  font-weight: 700;
`;
