import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Post from './Post';
import { adminAxiosInstance } from '@/api/axios';
import arrowDown from '@/assets/webps/admin/arrow_drop_down.webp';
import arrowUp from '@/assets/webps/admin/arrow_drop_up.webp';

const PAGE_SIZE = 12;

const BlockList = ({ setIsDetailView, setPostId }) => {
  const [list, setList] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null);
  const [allLosts, setAllLosts] = useState([]);
  const [displayedLosts, setDisplayedLosts] = useState({});
  const [displayedList, setDisplayedList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const getAdminToken = () => localStorage.getItem('accessToken');

  const handleFilterByUserId = (userId) => {
    const filteredPosts = allLosts.filter((lost) => lost.userId === userId);
    setDisplayedLosts((prevPosts) => ({
      ...prevPosts,
      [userId]: filteredPosts,
    }));
  };

  const updateLostsStatus = (userId, updatedPosts) => {
    const filteredPosts = updatedPosts.filter((post) => post.userId === userId);

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
        setList((prevList) => prevList.filter((item) => item.userId !== userId));
        setDisplayedList((prevList) => prevList.filter((item) => item.userId !== userId));
        setExpandedItem(null); // 해당 사용자가 펼쳐져 있는 상태를 초기화
        setDisplayedLosts((prevPosts) => {
          const updatedPosts = { ...prevPosts };
          delete updatedPosts[userId];
          return updatedPosts;
        });
      }
    } catch (error) {
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

  const handlePostClick = (postId) => {
    setIsDetailView(true);
    setSelectedPostId(postId);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchAllLosts = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        let allLosts = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const response = await adminAxiosInstance.get(`/losts?page=${page}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const fetchedLosts = response.data.data.losts;
          allLosts = [...allLosts, ...fetchedLosts];

          hasMore = fetchedLosts.length === 9;
          page += 1;
        }

        setAllLosts(allLosts);
        setDisplayedLosts(
          allLosts.reduce((acc, lost) => {
            if (!acc[lost.userId]) acc[lost.userId] = [];
            acc[lost.userId].push(lost);
            return acc;
          }, {})
        );
      } catch (error) {
        console.error('Error fetching all losts:', error);
      }
    };

    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const responseBlacklist = await adminAxiosInstance.get('/admin/blacklist', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setList(responseBlacklist.data.data);

        await fetchAllLosts();
      } catch (error) {
        console.error('Error fetching data:', error.response?.data || error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const nextPageItems = list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    setDisplayedList(nextPageItems);
    setHasMore(nextPageItems.length === PAGE_SIZE);
  }, [page, list]);

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
                  loading="lazy"
                />
              </List>
              {expandedItem === item.userId && (
                <>
                  <PostDetails>
                    <Post
                      posts={displayedLosts[item.userId]}
                      userId={expandedItem}
                      setIsDetailView={handlePostClick}
                      setPostId={setPostId}
                      updateLostsStatus={updateLostsStatus}
                    />
                  </PostDetails>
                </>
              )}
            </div>
          ))
        ) : (
          <p style={{ padding: '1rem' }}>차단된 사용자가 존재하지 않습니다.</p>
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

BlockList.propTypes = {
  setIsDetailView: PropTypes.func.isRequired,
  setPostId: PropTypes.func.isRequired,
};

export default BlockList;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray10};
  min-height: 100vh;
`;

const Container = styled.div`
  width: 32rem;
  margin-bottom: 7.7rem;
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.span`
  width: 8rem;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  font-size: 1.4rem;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0.8rem 0.8rem 0.8rem 1.6rem;
  background-color: ${(props) => props.theme.colors.gray80};
`;

const UserId = styled.span`
  display: flex;
  align-items: center;
  width: 8.8rem;
  color: ${(props) => props.theme.colors.gray30};
  font-size: 1.4rem;
  text-decoration: line-through;
`;

const BlockDate = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Med};
  color: ${(props) => props.theme.colors.gray40};
  font-size: 1.4rem;
  width: 13.6rem;
`;

const ArrowIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`;

const BlockBtn = styled.button`
  ${(props) => props.theme.fontStyles.basic.captionBold};
  color: ${(props) => props.theme.colors.gray70};
  width: 6.4rem;
  font-weight: 700;
  font-size: 1.2rem;
  text-decoration: underline;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0.8rem 0.8rem;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray20};
`;

const PostDetails = styled.div`
  background-color: ${(props) => props.theme.colors.gray10};
`;

const LoadMoreButton = styled.button`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  width: 32rem;
  height: 6.4rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.gray70};
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  margin-top: 1.6rem;
  margin-bottom: 7.7rem;
`;
