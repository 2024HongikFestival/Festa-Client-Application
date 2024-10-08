import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AdminLogin from './AdminLogin';
import Post from '@/components/admin/Post';
import BlockList from '@/components/admin/BlockList';
import PostDetail from '@/components/admin/PostDetail';
import { adminAxiosInstance } from '@/api/axios';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [activeComponent, setActiveComponent] = useState('posts');
  const [isDetailView, setIsDetailView] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(window.location.search);
  const view = queryParams.get('view') || 'posts';
  const detailId = queryParams.get('detailId');

  useEffect(() => {
    setActiveComponent(view);
    if (detailId && !isNaN(Number(detailId))) {
      setSelectedPostId(Number(detailId));
      setIsDetailView(true);
    } else {
      setIsDetailView(false);
    }
  }, [view, detailId]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      adminAxiosInstance
        .get('/test/admin', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        })
        .catch(() => {
          setIsLoggedIn(false);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setIsLoggedIn(false);
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'accessToken' && event.newValue === null) {
        setIsLoggedIn(false);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (loading === false && !isLoggedIn) {
      navigate('/admin');
    }
  }, [loading, isLoggedIn, navigate]);

  if (loading) {
    return (
      <SpinnerContainer>
        <div className="spinner"></div>
      </SpinnerContainer>
    );
  }

  if (!isLoggedIn) {
    return <AdminLogin state={{ from: location.pathname }} />;
  }
  const handleChangeView = (view) => {
    setActiveComponent(view);
    navigate(`?view=${view}`);
  };

  const handleOpenDetailView = (id) => {
    setSelectedPostId(id);
    setIsDetailView(true);
    navigate(`?view=${activeComponent}&detailId=${id}`);
  };

  return (
    <>
      <Container>
        {!isDetailView && (
          <SelectBar>
            <Title onClick={() => handleChangeView('posts')} $active={activeComponent === 'posts'}>
              게시글
            </Title>
            <Title onClick={() => handleChangeView('blockList')} $active={activeComponent === 'blockList'}>
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
                navigate('?view=posts');
              }}
            />
          ) : (
            <Post setIsDetailView={setIsDetailView} setPostId={handleOpenDetailView} posts={posts} />
          ))}
        {activeComponent === 'blockList' &&
          (isDetailView ? (
            <PostDetail
              postId={selectedPostId}
              onBack={() => {
                setIsDetailView(false);
                setSelectedPostId(null);
                navigate('?view=blockList');
              }}
            />
          ) : (
            <BlockList setIsDetailView={setIsDetailView} setPostId={handleOpenDetailView} />
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
  color: ${({ $active, theme }) => ($active ? theme.colors.gray80 : theme.colors.gray40)};
  transition: background-color 0.3s;
  font-weight: 700;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.gray10};

  .spinner {
    border: 5px solid ${(props) => props.theme.colors.gray20};
    border-top: 5px solid ${(props) => props.theme.colors.gray80};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
