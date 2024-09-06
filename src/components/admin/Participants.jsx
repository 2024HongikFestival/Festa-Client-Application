import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { adminAxiosInstance } from '@/api/axios';

const Participants = ({ setIsDetailView, setPostId, lists }) => {
  const [allLists, setAllLists] = useState([]);
  const [displayedLists, setDisplayedLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerpage] = useState(10);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    getLists();
  }, []);

  useEffect(() => {
    setDisplayedLists(allLists.slice(0, currentPage * entriesPerpage));
  }, [allLists, currentPage]);

  const getLists = async () => {
    const token = localStorage.getItem('accessToken');
    setLoading(true);
    try {
      const response = await adminAxiosInstance.get('/admin/entries/prizes', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllLists(response.data.data);
      setDisplayedLists(response.data.data.slice(0, entriesPerpage));
    } catch (error) {
      console.error('Error fetching URL: ', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handleClick = (entry) => {
    setPostId({
      prizeName: entry.prizeName,
      quantity: entry.quantity,
      entryCount: entry.entryCount,
    });
    setIsDetailView(true); // 상세 보기로 전환
  };

  return (
    <>
      <EntryContainer>
        {Array.isArray(displayedLists) && displayedLists.length > 0 ? (
          displayedLists.map((entry, index) => (
            <Container key={entry.id || index} onClick={() => handleClick(entry)}>
              <Img src={entry.imageUrl} alt={entry.prizeName} />
              <InfoWrapper>
                <Wrapper>
                  <EntryName>{entry.prizeName}</EntryName>
                  <EntryInfo>
                    수량 {entry.quantity}개 / {entry.entryCount}명 응모
                  </EntryInfo>
                </Wrapper>
                <StatusBox>
                  <Status $drawstatus={entry.drawCompleted ? 'PUBLISHED' : 'NOT_PUBLISHED'}>
                    &middot; {entry.drawCompleted ? '추첨 완료' : '추첨 전'}
                  </Status>
                </StatusBox>
              </InfoWrapper>
            </Container>
          ))
        ) : (
          <p style={{ padding: '1rem' }}>응모 목록이 존재하지 않습니다.</p>
        )}
        <LoadMoreWrapper $showbutton={displayedLists.length < lists.length}>
          {displayedLists.length < lists.length && (
            <LoadMoreButton onClick={loadMore} disabled={loading}>
              {loading ? 'Loading...' : '더보기'}
            </LoadMoreButton>
          )}
        </LoadMoreWrapper>
      </EntryContainer>
    </>
  );
};

export default Participants;
Participants.propTypes = {
  setIsDetailView: PropTypes.func.isRequired,
  setPostId: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
};
const EntryContainer = styled.div`
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
  flex-direction: column;
  justify-content: center;
  gap: 0.45rem;
  width: 14.5rem;
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

const StatusBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EntryName = styled.span`
  ${(props) => props.theme.fontStyles.body2Bold};
  color: ${(props) => props.theme.colors.gray60};
  font-size: 1.4rem;
  font-weight: 700;
  height: 2.1rem;
  display: flex;
  align-items: center;
`;

const EntryInfo = styled.span`
  display: flex;
  align-items: center;
  height: 1.8rem;
  ${(props) => props.theme.fontStyles.body2Med};
  color: ${(props) => props.theme.colors.gray40};
  font-size: 1.2rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 24rem;
  justify-content: space-between;
  padding: 0.8rem 1.6rem;
`;

const Status = styled.span`
  display: flex;
  height: 1.8rem;
  align-items: center;
  ${(props) => props.theme.fontStyles.captionBold};
  text-align: right;
  font-size: 1.2rem;
  color: ${(props) => (props.$drawstatus === 'PUBLISHED' ? '#3586D7' : '#888E94')};
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
  margin-bottom: 8rem;
`;
