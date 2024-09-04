import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { adminAxiosInstance } from '@/api/axios';
import deleteBtn from '@/assets/webps/admin/deleteBtn.webp';

const prizeMapping = {
  에어팟: 'A',
  변신로봇: 'B',
  장검: 'C',
};

const Winners = () => {
  const [winners, setWinners] = useState([]);
  const [prizes, setPrizes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch data
  const fetchData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('accessToken');

      // Fetch winners
      const winnersResponse = await adminAxiosInstance.get('/admin/entries/winners', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setWinners(winnersResponse.data.data);

      // Fetch prizes
      const prizesResponse = await adminAxiosInstance.get('/admin/entries/prizes', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPrizes(prizesResponse.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Map prize names to prize data
  const prizeMap = prizes.reduce((acc, prize) => {
    const mappedPrizeName = prizeMapping[prize.prizeName];
    if (mappedPrizeName) {
      acc[mappedPrizeName] = prize;
    }
    return acc;
  }, {});

  // Group winners by prize
  const getGroupedWinners = useCallback(() => {
    return winners.reduce((acc, winner) => {
      const prizeKey = winner.prize;
      const prizeData = prizeMap[prizeKey];
      if (prizeData) {
        if (!acc[prizeData.prizeName]) {
          acc[prizeData.prizeName] = {
            drawCompleted: prizeData.drawCompleted,
            winners: [],
          };
        }
        acc[prizeData.prizeName].winners.push(winner);
      }
      return acc;
    }, {});
  }, [winners, prizeMap]);

  const groupedWinners = getGroupedWinners();

  const handleCancelWinner = async (entryId) => {
    if (!entryId) return;

    try {
      const token = localStorage.getItem('accessToken');

      await adminAxiosInstance.delete(`/admin/entries/${entryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Fetch data again after canceling the winner
      fetchData();
    } catch (error) {
      console.error('Error canceling winner: ', error);
    }
  };

  if (loading) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>로딩 중...</p>;
  }

  if (!winners.length) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>당첨자가 없습니다.</p>;
  }

  return (
    <ListContainer>
      <Container>
        {Object.entries(groupedWinners).map(([prizeName, { drawCompleted, winners }]) => (
          <div key={prizeName}>
            <TitleSection>
              <SubTitle>[{prizeName}] 당첨자</SubTitle>
              <Status $drawstatus={drawCompleted ? 'PUBLISHED' : 'NOT_PUBLISHED'}>
                &middot; {drawCompleted ? '추첨 완료' : '추첨 전'}
              </Status>
            </TitleSection>
            {winners.map((winner) => (
              <List key={winner.entryId}>
                <InfoSection $duplicated={winner.duplicate ? 'true' : 'false'}>
                  <WinnerStatus $isWinner={winner.winner}>{winner.winner ? '당첨' : '응모'}</WinnerStatus>
                  <Name>{winner.name}</Name>
                  <Phone>{formatPhoneNumber(winner.phone)}</Phone>
                  {winner.winner && (
                    <CancelButton onClick={() => handleCancelWinner(winner.entryId)} src={deleteBtn} alt="Cancel" />
                  )}
                </InfoSection>
              </List>
            ))}
          </div>
        ))}
      </Container>
      <ButtonContainer>
        <PrintButton>당첨자 정보 출력</PrintButton>
      </ButtonContainer>
    </ListContainer>
  );
};

export default Winners;

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
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray10};
  min-height: 100vh;
`;

const Container = styled.div`
  width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray10};
  background: ${(props) => props.theme.colors.gray20};
  padding: 0.8rem 1.6rem;
  box-sizing: border-box;
`;

const InfoSection = styled.div`
  display: flex;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray10};
  background: ${(props) => (props.$duplicated === 'true' ? '#E5B6B6' : props.theme.colors.white)};
  font-weight: 700;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0.8rem 1.6rem;
  box-sizing: border-box;
`;

const SubTitle = styled.div`
  color: ${(props) => props.theme.colors.gray60};
  ${(props) => props.theme.fontStyles.basic.body2Bold};
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WinnerStatus = styled.span`
  width: 6.4rem;
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

const Status = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${(props) => props.theme.fontStyles.basic.captionBold};
  text-align: right;
  font-size: 1.2rem;
  color: ${(props) => (props.$drawstatus === 'PUBLISHED' ? '#3586D7' : '#888E94')};
  font-weight: 700;
`;

const CancelButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-width: 375px;
  max-width: 768px;
  display: flex;
`;

const PrintButton = styled.button`
  width: 100%;
  height: 6.4rem;
  background-color: ${(props) => props.theme.colors.gray80};
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.body1Bold};
`;
