import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import jwtDecode from 'jwt-decode';
// import { adminAxiosInstance } from '@/api/axios';
import AdminLogin from './AdminLogin';
import Post from './Post';
import BlockList from './BlockList';
import PostDetail from './PostDetail';
import Header from '@/components/layouts/Header';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeComponent, setActiveComponent] = useState('posts');
  const [isDetailView, setIsDetailView] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('accessToken');
  //   if (token && !isTokenExpired(token)) {
  //     setIsLoggedIn(true);
  //   } else {
  //     handleLogout(); // 토큰이 없거나 만료된 경우 로그아웃 처리
  //   }
  // }, []);

  // const isTokenExpired = (token) => {
  //   try {
  //     const decodedToken = jwtDecode(token);
  //     return decodedToken.exp < Date.now() / 1000;
  //   } catch (error) {
  //     console.error('Token decode error:', error);
  //     return true;
  //   }
  // };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken'); // 리프레시 토큰도 삭제
    setIsLoggedIn(false);
    navigate('/admin'); // 로그인 화면으로 리다이렉트
  };

  if (!isLoggedIn) {
    return <AdminLogin onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <>
      <Header />
      <Container>
        {!isDetailView && (
          <SelectBar>
            <Title onClick={() => setActiveComponent('posts')} active={activeComponent === 'posts'}>
              게시글
            </Title>
            <Title onClick={() => setActiveComponent('blockList')} active={activeComponent === 'blockList'}>
              차단 목록
            </Title>
          </SelectBar>
        )}
        {activeComponent === 'posts' &&
          (isDetailView ? (
            <PostDetail
              postId={selectedPostId}
              onBack={() => {
                setIsDetailView(false); // Go back to the post list view
                setSelectedPostId(null); // Clear the selected post ID
              }}
            />
          ) : (
            <Post setIsDetailView={setIsDetailView} setPostId={setSelectedPostId} />
          ))}
        {activeComponent === 'blockList' && !isDetailView && <BlockList />}
      </Container>
    </>
  );
};

export default AdminPage;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.gray10};
  height: 100vh;
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
