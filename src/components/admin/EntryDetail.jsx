import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Popup from './Popup';
import { adminAxiosInstance } from '@/api/axios';
import deleteBtn from '@/assets/webps/admin/deleteBtn.webp';

const EntryDetail = ({ prizeName, title, titleDescription, quantity, onBack }) => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [displayedList, setDisplayedList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [drawnCount, setDrawnCount] = useState(0);
  const [showCancelButton, setShowCancelButton] = useState(false);
  const [popupType, setPopupType] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const endOfListRef = useRef(null);

  const PAGE_SIZE = 10;

  const prizeMap = {
    '티빙 구독권': '티빙구독권',
  };

  const getPrizeParam = (prizeName) => prizeMap[prizeName] || '';

  useEffect(() => {
    const fetchEntryDetails = async () => {
      const token = localStorage.getItem('accessToken');
      setLoading(true);
      try {
        const response = await adminAxiosInstance.get('/admin/entries', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: { prize: getPrizeParam(prizeName) },
        });

        const data = response.data.data;
        const winners = data.filter((item) => item.winner);
        const nonWinners = data.filter((item) => !item.winner);
        const updatedList = [...winners, ...nonWinners];

        setList(updatedList);
        setPage(1);
        setDisplayedList(updatedList.slice(0, PAGE_SIZE));
        setHasMore(updatedList.length > PAGE_SIZE);
        setDrawnCount(winners.length);
        setShowCancelButton(winners.length > 0);
      } catch (error) {
        console.error('Error fetching entry details: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEntryDetails();
  }, [prizeName]);

  useEffect(() => {
    if (page > 1) {
      const nextPageItems = list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
      setDisplayedList((prev) => [...prev, ...nextPageItems]);
      setHasMore(nextPageItems.length === PAGE_SIZE);
    }
  }, [page, list]);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
      endOfListRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  const handleDraw = async (type) => {
    try {
      const token = localStorage.getItem('accessToken');
      const prizeParam = getPrizeParam(prizeName);

      const url = type === 'one' ? `/admin/draw-one?prize=${prizeParam}` : `/admin/draw?prize=${prizeParam}`;

      const response = await adminAxiosInstance.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Response Data:', response.data);

      const data = response.data.data;
      const result = Array.isArray(data) ? data : [data];
      const updatedList = list.map((item) => {
        const drawnEntry = result.find((entry) => entry.entryId === item.entryId);
        return drawnEntry ? { ...item, winner: drawnEntry.winner } : item;
      });

      const sortedList = updatedList.sort((a, b) => {
        if (a.winner && !b.winner) return -1;
        if (!a.winner && b.winner) return 1;
        return 0;
      });

      setList(sortedList);
      setPage(1);
      setDisplayedList(sortedList.slice(0, PAGE_SIZE));
      setHasMore(sortedList.length > PAGE_SIZE);
      setDrawnCount(sortedList.filter((item) => item.winner).length);
      setShowCancelButton(sortedList.some((item) => item.winner));
    } catch (error) {
      console.error('Error drawing winners: ', error);
      if (type === 'one') {
        setErrorMessage('추첨 가능한 응모자가 없습니다');
      } else {
        setErrorMessage('응모자 수가 경품 수량보다 적습니다');
      }
    }
  };

  const handleCancelWinner = async () => {
    if (!selectedEntry) return;

    try {
      const token = localStorage.getItem('accessToken');
      await adminAxiosInstance.delete(`/admin/entries/${selectedEntry.entryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const updatedList = list.map((item) =>
        item.entryId === selectedEntry.entryId ? { ...item, winner: false } : item
      );

      const sortedList = updatedList.sort((a, b) => {
        if (a.winner && !b.winner) return -1;
        if (!a.winner && b.winner) return 1;
        return 0;
      });
      setList(sortedList);
      setPage(1);
      setDisplayedList(sortedList.slice(0, PAGE_SIZE));
      setHasMore(sortedList.length > PAGE_SIZE);
      setDrawnCount(sortedList.filter((item) => item.winner).length);
      setShowCancelButton(sortedList.some((item) => item.winner));
    } catch (error) {
      console.error('Error canceling winner: ', error);
    }
  };

  const openPopup = (type, entry = null) => {
    setPopupType(type);
    setSelectedEntry(entry);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedEntry(null);
    setPopupType(null);
  };

  const confirmPopup = () => {
    if (popupType === 'undo') {
      handleCancelWinner();
    } else if (popupType === 'one') {
      handleDraw('one');
    } else if (popupType === 'full') {
      handleDraw('all');
    }
    closePopup();
  };

  const isSingleDrawEnabled = drawnCount < quantity;
  const isFullDrawEnabled = drawnCount === 0;

  const isSingleDrawComplete = drawnCount === quantity;
  const isFullDrawComplete = drawnCount === quantity;

  if (!list.length) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>응모자가 존재하지 않습니다.</p>;
  }

  return (
    <ListContainer ref={endOfListRef}>
      <TitleContainer>
        <Title>{`[${title}] 응모 목록`}</Title>
        <TitleDescription>{titleDescription}</TitleDescription>
      </TitleContainer>
      <Container>
        <TitleSection>
          <SubTitle>당첨</SubTitle>
          <SubTitle>이름</SubTitle>
          <SubTitle>전화번호</SubTitle>
        </TitleSection>
        {displayedList.length > 0 ? (
          displayedList.map((item, index) => (
            <List key={`${item.userId}-${index}`} $showCancelButton={showCancelButton} $isWinner={item.winner}>
              <Status $isWinner={item.winner}>{item.winner ? '당첨' : '응모'}</Status>
              <Name>{item.name}</Name>
              <Phone>{formatPhoneNumber(item.phone)}</Phone>
              {item.winner && <CancelButton onClick={() => openPopup('undo', item)} src={deleteBtn} alt="Cancel" />}
            </List>
          ))
        ) : (
          <p style={{ padding: '1rem' }}>응모자가 존재하지 않습니다.</p>
        )}
        {hasMore && (
          <LoadMoreButton onClick={handleLoadMore} disabled={loading}>
            {loading ? 'Loading...' : '더보기'}
          </LoadMoreButton>
        )}
      </Container>
      <ButtonContainer>
        <ActionButton
          onClick={() => openPopup('one')}
          $buttonType="singleDraw"
          $isEnabled={isSingleDrawEnabled}
          $isComplete={isSingleDrawComplete}
        >
          {isSingleDrawComplete ? '추첨 완료' : '1인 추가 추첨'}
        </ActionButton>

        <ActionButton
          onClick={() => openPopup('full')}
          $buttonType="fullDraw"
          $isEnabled={isFullDrawEnabled}
          $isComplete={isFullDrawComplete}
        >
          {isFullDrawComplete ? '추첨 완료' : '전체 추첨'}
        </ActionButton>
      </ButtonContainer>
      {showPopup && (
        <Popup
          message={
            popupType === 'undo'
              ? `${selectedEntry?.name} 님의 당첨을 취소할까요?`
              : popupType === 'one'
                ? '경품 당첨자 1인을 추가 추첨합니다'
                : '경품 당첨자를 추첨합니다'
          }
          onConfirm={confirmPopup}
          onCancel={closePopup}
          confirmText={popupType === 'undo' ? '당첨 취소' : '추첨'}
          cancelText={popupType === 'undo' ? '아니요' : '취소'}
        />
      )}
      {errorMessage && <Popup message={errorMessage} onConfirm={() => setErrorMessage(null)} confirmText="확인" />}
    </ListContainer>
  );
};

EntryDetail.propTypes = {
  prizeName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleDescription: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  entryCount: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default EntryDetail;

const formatPhoneNumber = (phoneNumber) => {
  const cleanedNumber = phoneNumber.replace(/-/g, '');
  const match = cleanedNumber.match(/^(\d{3})(\d{4})(\d{4})$/);
  if (match) {
    return `${match[1]}${match[2]}${match[3]}`;
  }

  return phoneNumber;
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray10};
  min-height: 100vh;
  overflow-y: auto;
`;

const Container = styled.div`
  width: 32rem;
  display: flex;
  flex-direction: column;
  padding-bottom: 7.5rem;
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
  box-sizing: border-box;
`;

const Status = styled.span`
  width: 8rem;
  color: ${(props) => (props.$isWinner ? '#3586D7' : props.theme.colors.gray70)};
  font-size: 1.4rem;
  ${(props) => props.theme.fontStyles.basic.body2Med};
`;

const Name = styled.span`
  width: 8rem;
  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fontStyles.basic.body2Med};
  font-size: 1.4rem;
`;

const Phone = styled.span`
  flex: 3;
  width: 12rem;
  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fontStyles.basic.body2Med};
  font-size: 1.4rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0.8rem 1.6rem;
  padding-right: ${(props) => (props.$showCancelButton ? '0.8rem' : '1.6rem')};
  background-color: ${(props) => (props.$isWinner ? '#C7E0F9' : props.theme.colors.white)};
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray10};
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

const Title = styled.span`
  cursor: pointer;
  ${(props) => props.theme.fontStyles.subHeadBold};
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.gray80};
  font-weight: 700;
`;

const TitleDescription = styled.span`
  margin-top: 0.4rem;
  margin-bottom: 1.6rem;
  color: ${(props) => props.theme.colors.gray40};
  ${(props) => props.theme.fontStyles.basic.captionMed};
`;
const TitleContainer = styled.div`
  display: flex;
  text-align: center;
  margin-top: 2.4rem;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-width: 375px;
  max-width: 768px;
  display: flex;
  justify-content: space-between;
`;

const ActionButton = styled.button`
  width: 100%;
  height: 6.4rem;
  background-color: ${(props) => {
    if (props.$buttonType === 'singleDraw') {
      return props.$isEnabled ? '#89B2DB' : props.theme.colors.gray50;
    }
    if (props.$buttonType === 'fullDraw') {
      return props.$isEnabled ? '#3586D7' : props.theme.colors.gray60;
    }
    return props.theme.colors.gray60; // 기본 색상
  }};
  color: ${(props) => (props.$isEnabled ? props.theme.colors.white : props.theme.colors.gray40)};
  border: none;
  cursor: ${(props) => (props.$isEnabled ? 'pointer' : 'not-allowed')};
  font-size: 1.6rem;
  ${(props) => props.theme.fontStyles.basic.body1Bold};
`;

const CancelButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;
