import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdminLogin from './AdminLogin';
import Participants from '@/components/admin/Participants';
import Winners from '@/components/admin/Winners';

const AdminEvent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeComponent, setActiveComponent] = useState('participants');
  const [isDetailView, setIsDetailView] = useState(false);
  const [selectedListId, setSelectedListId] = useState(null);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);
  if (!isLoggedIn) {
    return <AdminLogin onLoginSuccess={() => setIsLoggedIn(true)} />;
  }
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
        {/* {activeComponent === 'participants' && */}
        {/* //   (isDetailView ? ( */}
        {/* //     <PostDetail */}
        {/* //       postId={selectedListId}
        //       onBack={() => {
        //         setIsDetailView(false);
        //         setSelectedListId(null);
        //       }}
        //     />
        //   ) : (
        //     <Participants setIsDetailView={setIsDetailView} setPostId={setSelectedListId} lists={lists} />
        //   ))}
        // {activeComponent === 'winners' &&
        //   (isDetailView ? ( */}
        {/* //     <PostDetail
        //       postId={selectedListId}
        //       onBack={() => {
        //         setIsDetailView(false);
        //         setSelectedListId(null);
        //       }}
        //     />
        //   ) : (
        //     <Winners setIsDetailView={setIsDetailView} setPostId={setSelectedListId} />
        //   ))} */}
      </Container>
    </>
  );
};
export default AdminEvent;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.gray10};
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
