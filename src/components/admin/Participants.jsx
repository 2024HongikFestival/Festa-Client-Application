import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import morebtn from '@/assets/webps/admin/more_vert.webp';
import { adminAxiosInstance } from '@/api/axios';
import PropTypes from 'prop-types';
import Popup from './Popup';

const Participants = () => {
  const [allLists, setAllLists] = useState([]);
  const [displayedLists, setDisplayedLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    getLists();
  }, []);

  useEffect(() => {
    setDisplayedLists(allLists.slice(0, currentPage * postsPerPage));
  }, [allLists, currentPage]);

  const getLists = async () => {
    const token = localStorage.getItem('accessToken');
    setLoading(true);
    try {
      const response = await adminAxiosInstance.get('/entries/prizes', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllLists(response.data.data.entries);
      setDisplayedLists(response.data.data.entries.slice(0, postsPerPage));
    } catch (error) {
      console.error('Error fetching URL: ', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleClick = (id) => {
    setSelectedId(id);
    setShowPopup(true);
  };

  const handleDeletePost = () => {
    // Handle delete post logic here
    setShowPopup(false);
  };

  const handleBlockAndDelete = () => {
    // Handle block and delete logic here
    setShowPopup(false);
  };

  const handleUndoDelete = () => {
    // Handle undo delete logic here
    setShowPopup(false);
  };

  return (
    <>
      <PostContainer>
        {Array.isArray(displayedLists) && displayedLists.length > 0 ? (
          displayedLists.map((lost) => (
            <Container key={lost.lostId} onClick={() => handleClick(lost.lostId)} $hasborder={false}>
              <Img src={lost.imageUrl} alt={lost.content} />
              <PostInfo>
                <Status $loststatus={lost.lostStatus}>
                  &middot; {lost.lostStatus === 'PUBLISHED' ? '추첨 완료' : '추첨 전'}
                </Status>
                <UserInfo>
                  <UserName>1번 경품 이름</UserName>
                </UserInfo>
                <Wrapper>
                  <PostDate>수량 3개 / 119명 응모</PostDate>
                </Wrapper>
              </PostInfo>
            </Container>
          ))
        ) : (
          <p style={{ padding: '1rem' }}>응모 목록이 존재하지 않습니다.</p>
        )}
        <LoadMoreWrapper $showbutton={displayedLists.length < allLists.length}>
          {displayedLists.length < allLists.length && (
            <LoadMoreButton onClick={loadMore} disabled={loading}>
              {loading ? 'Loading...' : '더보기'}
            </LoadMoreButton>
          )}
        </LoadMoreWrapper>
        {showPopup && (
          <Popup
            message={
              popupType === 'delete' ? (
                '글을 삭제할까요?'
              ) : popupType === 'blockAndDelete' ? (
                <>
                  사용자를 차단하고
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
    </>
  );
};

export default Participants;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray10};
  gap: ${({ $nogap }) => ($nogap ? '0' : '0.8rem')};
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
  color: ${(props) => (props.$loststatus === 'PUBLISHED' ? '#3586D7' : '#888E94')};
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

const LoadMoreWrapper = styled.div`
  width: 32rem;
  height: ${({ $showbutton }) => ($showbutton ? '6.4rem' : '0')};
  color: ${(props) => props.theme.colors.black};
  border: none;
  cursor: ${({ $showbutton }) => ($showbutton ? 'pointer' : 'default')};
  display: flex;
  align-items: center;
  justify-content: center;
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
  top: calc(100% - 0.8rem); /* calc(100% - 0.5rem) → calc(100% - 0.8rem) */
  right: -1rem; /* -0.625rem → -1rem */
  background-color: ${(props) => props.theme.colors.white};
  width: 11.2rem; /* 7rem → 11.2rem */
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 11;
`;

const OptionButton = styled.button`
  ${(props) => props.theme.fontStyles.basic.captionMed};
  width: 100%;
  padding: 0.8rem 1.6rem; /* 0.5rem 1rem → 0.8rem 1.6rem */
  height: 3.4rem; /* 2.125rem → 3.4rem */
  border: none;
  font-size: 1.2rem; /* 0.75rem → 1.2rem */
  background-color: ${(props) => props.theme.colors.gray60};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  text-align: left;
  z-index: 11;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray70};
  }
`;
