import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import morebtn from '../../assets/svgs/more_vert.svg';
import { adminAxiosInstance } from '@/api/axios';
import PropTypes from 'prop-types';

const Post = ({ setIsDetailView, setPostId }) => {
  const [allLosts, setAllLosts] = useState([]);
  const [displayedLosts, setDisplayedLosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(null);
  const [currentPostId, setCurrentPostId] = useState(null);

  const getLosts = async () => {
    setLoading(true);
    try {
      const response = await adminAxiosInstance.get('/losts');
      setAllLosts(response.data.data);
      setDisplayedLosts(response.data.data.slice(0, postsPerPage));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching URL: ', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getLosts();
  }, []);

  const handleClick = (lostId) => {
    setPostId(lostId);
    setIsDetailView(true);
  };

  const loadMore = () => {
    if (displayedLosts.length < allLosts.length && !loading) {
      setLoading(true);
      setCurrentPage((prevPage) => {
        const nextPage = prevPage + 1;
        const newDisplayedLosts = allLosts.slice(0, nextPage * postsPerPage);
        setDisplayedLosts(newDisplayedLosts);
        setLoading(false);
        return nextPage;
      });
    }
  };
  const handleMoreClick = (lostId) => {
    setCurrentPostId(lostId);
    setShowOptions((prev) => (prev === lostId ? null : lostId));
  };

  const formatId = (id) => {
    return String(id).padStart(6, '0');
  };

  const handleDeletePost = async () => {
    try {
      await adminAxiosInstance.delete(`/losts/${currentPostId}`);
      setAllLosts((prev) => prev.filter((lost) => lost.lostId !== currentPostId));
      setDisplayedLosts((prev) => prev.filter((lost) => lost.lostId !== currentPostId));
      setShowOptions(false);
    } catch (error) {
      console.error('Error deleting post: ', error);
    }
  };

  const getAdminToken = () => {
    return localStorage.getItem('token');
  };

  const handleBlockAndDelete = async (lostId) => {
    // Find the lost item by its ID
    const lost = allLosts.find((lost) => lost.lostId === lostId);

    if (!lost) {
      console.error('Lost item not found');
      return;
    }

    try {
      // Block and delete the post
      await Promise.all([
        adminAxiosInstance.post(
          '/blacklist',
          { userId: lost.userId }, // Use the userId from the lost object
          {
            headers: {
              Authorization: `Bearer ${getAdminToken()}`,
            },
          }
        ),
        adminAxiosInstance.delete(`/losts/${lostId}`),
      ]);

      // Update the state after successful operation
      setAllLosts((prev) => prev.filter((lost) => lost.lostId !== lostId));
      setDisplayedLosts((prev) => prev.filter((lost) => lost.lostId !== lostId));
      setShowOptions(null);
    } catch (error) {
      console.error('Error handling block and delete: ', error);
    }
  };

  const handleUndoDelete = async () => {
    try {
      await adminAxiosInstance.post(`/losts/${currentPostId}`, { lostStatus: 'PUBLISHED' });
      setAllLosts((prev) =>
        prev.map((lost) => (lost.lostId === currentPostId ? { ...lost, lostStatus: 'PUBLISHED' } : lost))
      );
      setDisplayedLosts((prev) =>
        prev.map((lost) => (lost.lostId === currentPostId ? { ...lost, lostStatus: 'PUBLISHED' } : lost))
      );
      setShowOptions(false);
    } catch (error) {
      console.error('Error undoing delete: ', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
  };
  const OptionsMenu = ({ onUndo, isDeleted }) => (
    <OptionsContainer>
      {isDeleted ? (
        <OptionButton onClick={onUndo}>삭제 취소</OptionButton>
      ) : (
        <>
          <OptionButton onClick={handleDeletePost}>글 삭제</OptionButton>
          <OptionButton onClick={handleBlockAndDelete}>차단하고 글 삭제</OptionButton>
        </>
      )}
    </OptionsContainer>
  );
  OptionsMenu.propTypes = {
    onUndo: PropTypes.func.isRequired,
    isDeleted: PropTypes.bool.isRequired,
  };
  return (
    <PostContainer>
      {Array.isArray(displayedLosts) && displayedLosts.length > 0 ? (
        displayedLosts.map((lost) => (
          <Container key={lost.lostId} onClick={() => handleClick(lost.lostId)}>
            <Img src={lost.imageUrl} alt={lost.content} />
            <PostInfo>
              <Status lostStatus={lost.lostStatus}>
                &middot; {lost.lostStatus === 'PUBLISHED' ? '게시중' : '삭제됨'}
              </Status>
              <UserInfo>
                <UserName>작성자</UserName>
                <UserId>{formatId(lost.lostId)}</UserId>
              </UserInfo>
              <Wrapper>
                <PostDate>{formatDate(lost.createdAt)}</PostDate>
                <MoreBtn
                  lostStatus={lost.lostStatus}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent click from triggering handleClick
                    handleMoreClick(lost.lostId);
                  }}
                />
              </Wrapper>
              {showOptions === lost.lostId && (
                <OptionsMenu
                  onUndo={handleUndoDelete}
                  isDeleted={allLosts.find((lost) => lost.lostId === currentPostId)?.lostStatus === 'DELETED'}
                />
              )}
            </PostInfo>
          </Container>
        ))
      ) : (
        <p>No lost items found.</p>
      )}
      {displayedLosts.length < allLosts.length && (
        <LoadMoreButton onClick={loadMore} disabled={loading}>
          {loading ? 'Loading...' : '더보기'}
        </LoadMoreButton>
      )}
    </PostContainer>
  );
};
Post.propTypes = {
  setIsDetailView: PropTypes.func.isRequired,
  setPostId: PropTypes.func.isRequired,
};

export default Post;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
`;

const Container = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  width: 20rem;
  height: 5rem;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  position: relative;
`;

const Img = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
`;

const UserInfo = styled.span`
  display: flex;
  height: 1.5rem;
  flex-direction: row;
  align-items: center;
  padding-left: 1rem;
  gap: 0.5rem;
`;

const UserName = styled.span`
  ${(props) => props.theme.fontStyles.body2Bold};
  color: ${(props) => props.theme.colors.gray60};
  font-size: 0.875rem;
  font-weight: 700;
`;

const UserId = styled.span`
  ${(props) => props.theme.fontStyles.body2Med};
  color: ${(props) => props.theme.colors.gray80};
  font-size: 0.875rem;
`;

const PostDate = styled.span`
  height: 1.3rem;
  display: flex;
  align-items: flex-end;
  ${(props) => props.theme.fontStyles.body2Med};
  color: ${(props) => props.theme.colors.gray40};
  font-size: 0.875rem;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  padding-top: 0.5rem;
  padding-right: 1rem;
  position: relative;
`;

const Status = styled.span`
  display: flex;
  height: 1.125rem;
  justify-content: flex-end;
  align-items: center;
  ${(props) => props.theme.fontStyles.captionBold};
  text-align: right;
  font-size: 0.75rem;
  color: ${(props) => (props.lostStatus === 'PUBLISHED' ? '#53cc7c' : '#F04949')};
  font-weight: 700;
`;

const LoadMoreButton = styled.button`
  width: 20rem;
  height: 4rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const MoreBtn = styled.div`
  background: url(${morebtn});
  width: 1.5rem;
  height: 1.3rem;
  z-index: 1000;
  background-repeat: no-repeat;
  background-size: contain;
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: calc(100% - 0.5rem);
  right: -0.625rem;
  background-color: ${(props) => props.theme.colors.white};
  width: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1001;
`;

const OptionButton = styled.button`
  ${(props) => props.theme.fontStyles.basic.captionMed};
  width: 100%;
  padding: 0.5rem 1rem;
  height: 2.125rem;
  border: none;
  font-size: 0.75rem;
  background-color: ${(props) => props.theme.colors.gray60};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray70};
  }
`;
