import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Popup from './Popup';
import morebtn from '@/assets/webps/admin/more_vert.webp';
import { adminAxiosInstance } from '@/api/axios';

const Post = ({ posts, userId, setIsDetailView, setPostId, updateLostsStatus }) => {
  const [allLosts, setAllLosts] = useState([]);
  const [displayedLosts, setDisplayedLosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [loading, setLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(null);
  const [currentPostId, setCurrentPostId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(null);
  const optionsMenuRef = useRef(null);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    getLosts(1);
  }, []);

  useEffect(() => {
    if (Array.isArray(allLosts)) {
      setDisplayedLosts(allLosts.slice(0, currentPage * postsPerPage));
    }
  }, [allLosts, currentPage]);

  useEffect(() => {
    setHasMore(currentPage < totalPages);
  }, [currentPage, totalPages]);

  const getLosts = async (page = 1) => {
    const token = getAdminToken();
    setLoading(true);
    try {
      const response = await adminAxiosInstance.get(`/losts?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newLosts = response.data.data.losts;
      setTotalPages(response.data.data.totalPage);

      if (newLosts.length === 0) {
        setHasMore(false);
      } else {
        setAllLosts((prevLosts) => [...prevLosts, ...newLosts]);
        setDisplayedLosts((prevDisplayedLosts) => [...prevDisplayedLosts, ...newLosts]);
        setHasMore(page < totalPages);
      }
    } catch (error) {
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  const userPosts = userId && posts ? posts : displayedLosts;
  const getAdminToken = () => localStorage.getItem('accessToken');

  const handleClick = (lostId) => {
    setPostId(lostId);
    setIsDetailView(true);
  };

  const formatId = (id) => String(id).padStart(6, '0');

  const loadMore = () => {
    if (!loading && hasMore) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      getLosts(nextPage);
    }
  };

  const handleMoreClick = (lostId, e) => {
    e.stopPropagation();
    setShowOptions((prev) => (prev === lostId ? null : lostId));
    setCurrentPostId(lostId);
  };

  const openPopup = (type) => {
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
      handleStatusChange('DELETED');
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
      await adminAxiosInstance.post(
        '/admin/blacklist',
        { userId: lost.userId },
        {
          headers: {
            Authorization: `Bearer ${getAdminToken()}`,
          },
        }
      );

      await adminAxiosInstance.delete(`/admin/losts/${currentPostId}`, {
        headers: {
          Authorization: `Bearer ${getAdminToken()}`,
        },
      });
      handleStatusChange('DELETED', true);
      setShowOptions(null);
      setShowPopup(false);
    } catch (error) {
      alert('이미 차단된 사용자입니다.');
      console.error('Error handling block and delete: ', error);
      setShowPopup(false);
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
      handleStatusChange('PUBLISHED');
      setShowOptions(null);
      setShowPopup(false);
    } catch (error) {
      console.error('Error undoing delete: ', error);
    }
  };
  const handleStatusChange = (status, block = false) => {
    const currentLost = allLosts.find((lost) => lost.lostId === currentPostId);
    if (
      currentLost &&
      currentLost.lostStatus === status &&
      currentLost.isUserBlocked === (block ? 'true' : currentLost.isUserBlocked)
    ) {
      return;
    }

    const updatedAllLosts = allLosts.map((lost) =>
      lost.lostId === currentPostId
        ? { ...lost, lostStatus: status, isUserBlocked: block ? 'true' : lost.isUserBlocked }
        : lost
    );

    const updatedDisplayedLosts = displayedLosts.map((lost) =>
      lost.lostId === currentPostId
        ? { ...lost, lostStatus: status, isUserBlocked: block ? 'true' : lost.isUserBlocked }
        : lost
    );

    setAllLosts(updatedAllLosts);
    setDisplayedLosts(updatedDisplayedLosts);
    if (updateLostsStatus) {
      updateLostsStatus(userId, updatedDisplayedLosts);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear().toString().padStart(4, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsMenuRef.current && !optionsMenuRef.current.contains(event.target)) {
        setShowOptions(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <PostContainer $nogap={posts === userPosts}>
      {Array.isArray(userPosts) && userPosts.length > 0 ? (
        userPosts.map((lost, index) => (
          <Container
            key={`${lost.lostId}-${index}`}
            onClick={() => handleClick(lost.lostId)}
            $hasborder={posts === userPosts}
          >
            <Img src={lost.imageUrl} alt={lost.content} loading="lazy" />
            <PostInfo>
              <Status $loststatus={lost.lostStatus}>
                &middot; {lost.lostStatus === 'PUBLISHED' ? '게시중' : '삭제됨'}
              </Status>
              <UserInfo>
                <UserName>작성자</UserName>
                <UserId $isblocked={lost.isUserBlocked}>{formatId(lost.userId)}</UserId>
              </UserInfo>
              <Wrapper>
                <PostDate>{formatDate(lost.createdAt)}</PostDate>
                <MoreBtn $loststatus={lost.lostStatus} onClick={(e) => handleMoreClick(lost.lostId, e)} />
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
      {posts !== userPosts && hasMore && (
        <LoadMoreWrapper>
          <LoadMoreButton onClick={loadMore} disabled={loading}>
            {loading ? '로딩 중...' : '더보기'}
          </LoadMoreButton>
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
      lostId: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      content: PropTypes.string,
      lostStatus: PropTypes.oneOf(['PUBLISHED', 'DELETED']).isRequired,
      isUserBlocked: PropTypes.bool,
      userId: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  userId: PropTypes.string,
  setIsDetailView: PropTypes.func.isRequired,
  setPostId: PropTypes.func.isRequired,
  updateLostsStatus: PropTypes.func,
};

export default Post;
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray10};
  gap: ${({ $nogap }) => ($nogap ? '0' : '0.8rem')};
  padding-bottom: ${({ $nogap }) => ($nogap ? '0' : '8rem')};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 1.6rem;
`;

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  justify-content: center;
  width: 32rem;
  height: 8rem;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
  border-bottom: ${(props) => (props.$hasborder ? `0.1rem solid ${props.theme.colors.gray20}` : 'none')};
  box-sizing: border-box;
  position: relative;
`;

const Img = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
`;

const UserInfo = styled.span`
  display: flex;
  height: 2.4rem;
  flex-direction: row;
  align-items: center;
  padding-left: 1.6rem;
  gap: 0.8rem;
`;

const UserName = styled.span`
  ${(props) => props.theme.fontStyles.body2Bold};
  color: ${(props) => props.theme.colors.gray60};
  font-size: 1.4rem;
  font-weight: 700;
`;

const UserId = styled.span`
  ${(props) => props.theme.fontStyles.body2Med};
  font-size: 1.4rem;
  color: ${(props) => (props.$isblocked ? props.theme.colors.gray30 : props.theme.colors.gray80)};
  text-decoration: ${(props) => (props.$isblocked ? 'line-through' : 'none')};
`;

const PostDate = styled.span`
  height: 2.08rem;
  display: flex;
  align-items: flex-end;
  ${(props) => props.theme.fontStyles.body2Med};
  color: ${(props) => props.theme.colors.gray40};
  font-size: 1.4rem;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;
  padding-top: 0.8rem;
  padding-right: 1.6rem;
  position: relative;
`;

const Status = styled.span`
  display: flex;
  height: 1.8rem;
  justify-content: flex-end;
  align-items: center;
  ${(props) => props.theme.fontStyles.captionBold};
  text-align: right;
  font-size: 1.2rem;
  color: ${(props) => (props.$loststatus === 'PUBLISHED' ? '#53cc7c' : '#F04949')};
  font-weight: 700;
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
`;

const MoreBtn = styled.div`
  background: url(${morebtn});
  width: 2.4rem;
  height: 2.08rem;
  z-index: 10;
  background-repeat: no-repeat;
  background-size: contain;
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: calc(100% - 0.8rem);
  right: -1rem;
  background-color: ${(props) => props.theme.colors.white};
  width: 11.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 11;
`;

const OptionButton = styled.button`
  ${(props) => props.theme.fontStyles.basic.captionMed};
  width: 100%;
  padding: 0.8rem 1.6rem;
  height: 3.4rem;
  border: none;
  font-size: 1.2rem;
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
  width: 32rem;
  color: ${(props) => props.theme.colors.black};
  border: none;
  cursor: ${({ $showbutton }) => ($showbutton ? 'pointer' : 'default')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
