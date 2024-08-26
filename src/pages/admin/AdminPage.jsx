import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdminLogin from './AdminLogin';
import Post from '@/components/admin/Post';
import BlockList from '@/components/admin/BlockList';
import PostDetail from '@/components/admin/PostDetail';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeComponent, setActiveComponent] = useState('posts');
  const [isDetailView, setIsDetailView] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  if (!isLoggedIn) {
    return <AdminLogin onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <>
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
                setIsDetailView(false);
                setSelectedPostId(null);
              }}
            />
          ) : (
            <Post setIsDetailView={setIsDetailView} setPostId={setSelectedPostId} />
          ))}
        {activeComponent === 'blockList' &&
          (isDetailView ? (
            <PostDetail
              postId={selectedPostId}
              onBack={() => {
                setIsDetailView(false);
                setSelectedPostId(null);
              }}
            />
          ) : (
            <BlockList setIsDetailView={setIsDetailView} setPostId={setSelectedPostId} />
          ))}
      </Container>
    </>
  );
};

export default AdminPage;
const Container = styled.div`
  background-color: ${(props) => props.theme.colors.gray10};
`;

const SelectBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
`;

const Title = styled.div`
  cursor: pointer;
  ${(props) => props.theme.fontStyles.subHeadBold};
  font-size: 1.8rem;
  color: ${({ active, theme }) => (active ? theme.colors.gray80 : theme.colors.gray40)};
  transition: background-color 0.3s;
  font-weight: 700;
`;
