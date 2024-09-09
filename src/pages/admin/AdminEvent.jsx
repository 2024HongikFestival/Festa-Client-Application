import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AdminLogin from './AdminLogin';
import Participants from '@/components/admin/Participants';
import Winners from '@/components/admin/Winners';
import EntryDetail from '@/components/admin/EntryDetail';
import { adminAxiosInstance } from '@/api/axios';

const AdminEvent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeComponent, setActiveComponent] = useState('participants');
  const [isDetailView, setIsDetailView] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(window.location.search);
  const view = queryParams.get('view') || 'participants';
  const detailId = queryParams.get('detailId');

  useEffect(() => {
    if (lists.length > 0) {
      setActiveComponent(view);

      if (detailId) {
        const selected = lists.find((list) => list.prizeName === detailId);
        setSelectedList(selected || null);
        setIsDetailView(true);
      } else {
        setIsDetailView(false);
        setSelectedList(null);
      }
    }
  }, [view, detailId, lists]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      adminAxiosInstance
        .get('/test/admin', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        })
        .catch(() => {
          setIsLoggedIn(false);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setIsLoggedIn(false);
      setLoading(false);
    }
  }, []);

  if (!isLoggedIn) {
    return <AdminLogin state={{ from: '/admin/event' }} />;
  }
  const handleChangeView = (view) => {
    setActiveComponent(view);
    setIsDetailView(false); // 디테일 모드 종료
    navigate(`?view=${view}`); // URL 쿼리 업데이트
  };

  const handleOpenDetailView = (entry) => {
    setSelectedList(entry);
    setIsDetailView(true);
    navigate(`?view=${activeComponent}&detailId=${entry.prizeName}`);
  };

  return (
    <>
      <Container>
        {!isDetailView && (
          <SelectBar>
            <Title onClick={() => handleChangeView('participants')} $active={activeComponent === 'participants'}>
              응모 목록
            </Title>
            <Title onClick={() => handleChangeView('winners')} $active={activeComponent === 'winners'}>
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
                onBack={() => {
                  setIsDetailView(false);
                  setSelectedList(null);
                  navigate('?view=participants'); // 디테일 모드 종료 후 기본 페이지로 이동
                }}
              />
            )
          ) : (
            <Participants setIsDetailView={setIsDetailView} setPostId={handleOpenDetailView} lists={lists} />
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
