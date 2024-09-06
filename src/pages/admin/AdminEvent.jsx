import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdminLogin from './AdminLogin';
import Participants from '@/components/admin/Participants';
import Winners from '@/components/admin/Winners';
import EntryDetail from '@/components/admin/EntryDetail';

const AdminEvent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeComponent, setActiveComponent] = useState('participants');
  const [isDetailView, setIsDetailView] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <Container>
        {!isDetailView && (
          <SelectBar>
            <Title onClick={() => setActiveComponent('participants')} $active={activeComponent === 'participants'}>
              응모 목록
            </Title>
            <Title onClick={() => setActiveComponent('winners')} $active={activeComponent === 'winners'}>
              당첨자
            </Title>
          </SelectBar>
        )}
        {activeComponent === 'participants' &&
          (isDetailView ? (
            selectedList && (
              <EntryDetail
                prizeName={selectedList.prizeName}
                title={selectedList.prizeName}
                titleDescription={`수량 ${selectedList.quantity}개 / ${selectedList.entryCount}명 응모`}
                quantity={selectedList.quantity}
                entryCount={selectedList.entryCount}
              />
            )
          ) : (
            <Participants setIsDetailView={setIsDetailView} setPostId={setSelectedList} lists={lists} />
          ))}
        {activeComponent === 'winners' && <Winners setIsDetailView={setIsDetailView} setPostId={setSelectedList} />}
      </Container>
    </>
  );
};
export default AdminEvent;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.gray10};

  min-height: 100vh;
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
