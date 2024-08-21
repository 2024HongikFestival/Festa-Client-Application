import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import morebtn from '@/assets/webps/admin/more_vert.webp';
import { adminAxiosInstance } from '@/api/axios';
import PropTypes from 'prop-types';
import Popup from './Popup';

const Post = ({ posts, userId, setIsDetailView, setPostId }) => {
  const [allLosts, setAllLosts] = useState([]);
  const [displayedLosts, setDisplayedLosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(null);
  const [currentPostId, setCurrentPostId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(null);
  const optionsMenuRef = useRef(null);

  useEffect(() => {
    if (Array.isArray(posts)) {
      setDisplayedLosts(posts.slice(0, currentPage * postsPerPage));
    }
  }, [posts, currentPage]);

  const userPosts = userId && posts ? posts : displayedLosts;

  const getLosts = async () => {
    const token = getAdminToken();
    setLoading(true);
    try {
      const response = await adminAxiosInstance.get('/losts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.data);
      setAllLosts(response.data.data.losts);
      setDisplayedLosts(response.data.data.losts.slice(0, postsPerPage));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching URL: ', error);
      setLoading(false);
    }
  };

  const getAdminToken = () => {
    return localStorage.getItem('accessToken');
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsMenuRef.current && !optionsMenuRef.current.contains(event.target)) {
        setShowOptions(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    getLosts();
  }, []);

  const handleClick = (lostId) => {
    setPostId(lostId);
    setIsDetailView(true);
  };

  const formatId = (id) => {
    return String(id).padStart(6, '0');
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

  const handleMoreClick = (lostId, e) => {
    e.stopPropagation();
    setShowOptions((prev) => (prev === lostId ? null : lostId));
    setCurrentPostId(lostId);
  };

  const openPopup = (type) => {
    console.log('Opening popup of type:', type); // Debug log
    setPopupType(type);
    setShowPopup(true);
  };

  const handleDeletePost = async () => {
    try {
      await adminAxiosInstance.delete(`/admin/losts/${currentPostId}`, {
        headers: {
          Authorization: `Bearer ${getAdminToken()}`,
        },
      });
      setAllLosts((prev) => prev.filter((lost) => lost.lostId !== currentPostId));
      setDisplayedLosts((prev) => prev.filter((lost) => lost.lostId !== currentPostId));
      setShowOptions(null);
      setShowPopup(false);
    } catch (error) {
      console.error('Error deleting post: ', error);
    }
  };

  const handleBlockAndDelete = async () => {
    const lost = allLosts.find((lost) => lost.lostId === currentPostId);
    if (!lost) {
      console.error('Lost item not found');
      return;
    }

    try {
      await Promise.all([
        adminAxiosInstance.post(
          '/admin/blacklist',
          { userId: lost.userId },
          {
            headers: {
              Authorization: `Bearer ${getAdminToken()}`,
            },
          }
        ),
        adminAxiosInstance.delete(`/admin/losts/${currentPostId}`),
      ]);

      setAllLosts((prev) => prev.filter((lost) => lost.lostId !== currentPostId));
      setDisplayedLosts((prev) => prev.filter((lost) => lost.lostId !== currentPostId));
      setShowOptions(null);
      setShowPopup(false);
    } catch (error) {
      console.error('Error handling block and delete: ', error);
    }
  };

  const handleUndoDelete = async () => {
    try {
      await adminAxiosInstance.put(
        `/admin/losts/${currentPostId}`,
        { lostStatus: 'PUBLISHED' },
        {
          headers: {
            Authorization: `Bearer ${getAdminToken()}`,
          },
        }
      );
      setAllLosts((prev) =>
        prev.map((lost) => (lost.lostId === currentPostId ? { ...lost, lostStatus: 'PUBLISHED' } : lost))
      );
      setDisplayedLosts((prev) =>
        prev.map((lost) => (lost.lostId === currentPostId ? { ...lost, lostStatus: 'PUBLISHED' } : lost))
      );
      setShowOptions(null);
      setShowPopup(false);
    } catch (error) {
      console.error('Error undoing delete: ', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = String(date.getFullYear()).padStart(4, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
  };

  const OptionsMenu = ({ onUndo, isDeleted, onBlockAndDelete }) => (
    <OptionsContainer ref={optionsMenuRef}>
      {isDeleted ? (
        <OptionButton
          onClick={(e) => {
            e.stopPropagation();
            openPopup('undo');
          }}
        >
          삭제 취소
        </OptionButton>
      ) : (
        <>
          <OptionButton
            onClick={(e) => {
              e.stopPropagation();
              openPopup('delete');
            }}
          >
            글 삭제
          </OptionButton>
          <OptionButton
            onClick={(e) => {
              e.stopPropagation();
              openPopup('blockAndDelete');
            }}
          >
            차단하고 글 삭제
          </OptionButton>
        </>
      )}
    </OptionsContainer>
  );

  OptionsMenu.propTypes = {
    onUndo: PropTypes.func.isRequired,
    isDeleted: PropTypes.bool.isRequired,
    onBlockAndDelete: PropTypes.func.isRequired,
  };

  return (
    <PostContainer noGap={posts === userPosts}>
      {Array.isArray(userPosts) && userPosts.length > 0 ? (
        userPosts.map((lost) => (
          <Container key={lost.lostId} onClick={() => handleClick(lost.lostId)} border={posts === userPosts}>
            <Img src={lost.imageUrl} alt={lost.content} />
            <PostInfo>
              <Status lostStatus={lost.lostStatus}>
                &middot; {lost.lostStatus === 'PUBLISHED' ? '게시중' : '삭제됨'}
              </Status>
              <UserInfo>
                <UserName>작성자</UserName>
                <UserId isBlocked={lost.isUserBlocked}>{formatId(lost.userId)}</UserId>
              </UserInfo>
              <Wrapper>
                <PostDate>{formatDate(lost.createdAt)}</PostDate>
                <MoreBtn lostStatus={lost.lostStatus} onClick={(e) => handleMoreClick(lost.lostId, e)} />
              </Wrapper>
              {showOptions === lost.lostId && (
                <OptionsMenu
                  onUndo={handleUndoDelete}
                  isDeleted={lost.lostStatus === 'DELETED'}
                  onBlockAndDelete={handleBlockAndDelete}
                />
              )}
            </PostInfo>
          </Container>
        ))
      ) : (
        <p style={{ padding: '1rem' }}>분실물 게시글이 존재하지 않습니다.</p>
      )}
      {posts !== userPosts && (
        <LoadMoreWrapper showButton={displayedLosts.length < allLosts.length}>
          {displayedLosts.length < allLosts.length && (
            <LoadMoreButton onClick={loadMore} disabled={loading}>
              {loading ? 'Loading...' : '더보기'}
            </LoadMoreButton>
          )}
        </LoadMoreWrapper>
      )}
      {showPopup && (
        <Popup
          message={
            popupType === 'delete' ? (
              '글을 삭제할까요?'
            ) : popupType === 'blockAndDelete' ? (
              <>
                사용자을 차단하고
                <br />
                해당 글을 삭제할까요?
              </>
            ) : (
              '삭제된 게시물을 복구할까요?'
            )
          }
          onConfirm={
            popupType === 'delete'
              ? handleDeletePost
              : popupType === 'blockAndDelete'
                ? handleBlockAndDelete
                : handleUndoDelete
          }
          onCancel={() => setShowPopup(false)}
          confirmText={popupType === 'delete' ? '삭제' : popupType === 'blockAndDelete' ? '차단 후 삭제' : '복구'}
          cancelText="취소"
        />
      )}
    </PostContainer>
  );
};

Post.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      lostId: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      content: PropTypes.string,
      lostStatus: PropTypes.oneOf(['PUBLISHED', 'DELETED']).isRequired,
      // 기타 필요한 PropTypes 정의
    })
  ).isRequired,
  userId: PropTypes.string,
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
  gap: ${({ noGap }) => (noGap ? '0' : '0.5rem')};
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
  background-color: ${(props) => props.theme.colors.white};
  justify-content: center;
  width: 20rem;
  height: 5rem;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
  border-bottom: ${({ border, theme }) => (border ? `0.063rem solid ${theme.colors.gray20}` : 'none')};
  box-sizing: border-box;
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
  font-size: 0.875rem;
  color: ${(props) => (props.isBlocked ? props.theme.colors.gray30 : props.theme.colors.gray80)};
  text-decoration: ${(props) => (props.isBlocked ? 'line-through' : 'none')};
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
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  width: 20rem;
  height: 4rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.gray70};
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

const MoreBtn = styled.div`
  background: url(${morebtn});
  width: 1.5rem;
  height: 1.3rem;
  z-index: 10;
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
  z-index: 11;
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
  z-index: 11;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray70};
  }
`;
const LoadMoreWrapper = styled.div`
  width: 20rem;
  height: ${(props) => (props.showButton ? '4rem' : '0')};
  color: ${(props) => props.theme.colors.black};
  border: none;
  cursor: ${(props) => (props.showButton ? 'pointer' : 'default')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
