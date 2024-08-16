import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { adminAxiosInstance } from '@/api/axios';
import arrowDown from '../../assets/svgs/arrow_down.svg';
import arrowUp from '../../assets/svgs/arrow_up.svg';
import Post from './Post';

const PAGE_SIZE = 12;

const BlockList = () => {
  const [list, setList] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null);
  const [allLosts, setAllLosts] = useState([]);
  const [displayedLosts, setDisplayedLosts] = useState({});
  const [displayedList, setDisplayedList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getLists();
    getAllLosts();
  }, []);

  useEffect(() => {
    // 페이지가 변경될 때마다 displayedList를 업데이트
    const nextPageItems = list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    setDisplayedList(nextPageItems);
    setHasMore(nextPageItems.length === PAGE_SIZE);
  }, [page, list]);

  const getAdminToken = () => localStorage.getItem('accessToken');

  const getLists = async () => {
    try {
      const token = getAdminToken();
      const response = await adminAxiosInstance.get('/admin/blacklist', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.data);
      setList(response.data.data);
    } catch (error) {
      console.error('Error fetching blacklist:', error.response?.data || error.message);
    }
  };

  const getAllLosts = async () => {
    try {
      const token = getAdminToken();
      const response = await adminAxiosInstance.get('/losts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllLosts(response.data.data);
    } catch (error) {
      console.error('Error fetching lost posts:', error.response?.data || error.message);
    }
  };

  const filterPostsByUserId = (userId) => allLosts.filter((lost) => lost.userId === userId);

  const handleFilterByUserId = (userId) => {
    const filteredPosts = filterPostsByUserId(userId);
    setDisplayedLosts((prevPosts) => ({
      ...prevPosts,
      [userId]: filteredPosts,
    }));
  };

  const deleteBlackLists = async (userId) => {
    try {
      const token = getAdminToken();
      const response = await adminAxiosInstance.delete(`/admin/blacklist/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 204) {
        alert('차단 해제가 완료되었습니다.');
        setList((prevList) => prevList.filter((item) => item.userId !== userId)); // 차단 해제된 사용자 리스트에서 제거
        setDisplayedList((prevList) => prevList.filter((item) => item.userId !== userId));
        setExpandedItem(null); // 해당 사용자가 펼쳐져 있는 상태를 초기화
        setDisplayedLosts((prevPosts) => {
          const updatedPosts = { ...prevPosts };
          delete updatedPosts[userId]; // 사용자의 포스트 정보 삭제
          return updatedPosts;
        });
      }
    } catch (error) {
      console.error('Error unblocking user: ', error);
      alert('차단 해제에 실패했습니다.');
    }
  };

  const formatUserId = (userId) => {
    return userId.toString().padStart(6, '0');
  };

  const formatBlockedDate = (dateString) => {
    const date = new Date(dateString);
    const pad = (num) => num.toString().padStart(2, '0');
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return `${month}.${day} ${hours}:${minutes}:${seconds}`;
  };

  const handleLoadMore = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const toggleExpand = (userId) => {
    if (expandedItem === userId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(userId);
      if (!displayedLosts[userId]) {
        handleFilterByUserId(userId);
      }
    }
  };

  return (
    <ListContainer>
      <Container>
        <TitleSection>
          <SubTitle>작성자</SubTitle>
          <SubTitle>차단 일시</SubTitle>
        </TitleSection>
        {displayedList.length > 0 ? (
          displayedList.map((item, index) => (
            <div key={`${item.userId}-${index}`}>
              <List>
                <UserId>{formatUserId(item.userId)}</UserId>
                <BlockDate>{formatBlockedDate(item.blockedAt)}</BlockDate>
                <BlockBtn onClick={() => deleteBlackLists(item.userId)}>차단 해제</BlockBtn>
                <ArrowIcon
                  src={expandedItem === item.userId ? arrowUp : arrowDown}
                  alt="Toggle Arrow"
                  onClick={() => toggleExpand(item.userId)}
                />
              </List>
              {expandedItem === item.userId && (
                <>
                  <PostDetails>
                    <Post
                      posts={displayedLosts[item.userId]}
                      userId={expandedItem}
                      setIsDetailView={() => {}}
                      setPostId={() => {}}
                    />
                  </PostDetails>
                </>
              )}
            </div>
          ))
        ) : (
          <p>No blocked users found.</p>
        )}
        {hasMore && (
          <LoadMoreButton onClick={handleLoadMore} disabled={loading}>
            {loading ? 'Loading...' : '더보기'}
          </LoadMoreButton>
        )}
      </Container>
    </ListContainer>
  );
};

export default BlockList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Container = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.span`
  width: 5rem;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  font-size: 0.875rem;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.gray80};
`;

const UserId = styled.span`
  width: 5.5rem;
  color: ${(props) => props.theme.colors.gray30};
  font-size: 0.875rem;
  text-decoration: line-through;
`;

const BlockDate = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Med};
  color: ${(props) => props.theme.colors.gray40};
  font-size: 0.875rem;
  width: 8.5rem;
`;

const ArrowIcon = styled.img`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

const BlockBtn = styled.button`
  ${(props) => props.theme.fontStyles.basic.captionBold};
  color: ${(props) => props.theme.colors.gray70};
  width: 4rem;
  font-weight: 700;
  font-size: 0.75rem;
  text-decoration: underline;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0.5rem;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 0.063rem solid ${(props) => props.theme.colors.gray20};
`;

const PostDetails = styled.div`
  background-color: ${(props) => props.theme.colors.gray10};
`;

const LoadMoreButton = styled.button`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  width: 20rem;
  height: 4rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.gray70};
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 4.813em;
`;
