import React, { useState } from 'react';
import * as S from './styles/StageInfoPage';
import StageSchedule from '@/components/stage/StageSchedule';
import LocationInfo from '@/components/stage/LocationInfo';

const StageInfoPage = () => {
  const [selectedTab, setSelectedTab] = useState('schedule');

  return (
    <>
      <S.Container>
        <S.Title>관람 정보</S.Title>
        <S.SelectionBar>
          <S.ActiveBackground activeTab={selectedTab} /> {/* 슬라이딩 배경 */}
          <S.SelectionButton onClick={() => setSelectedTab('schedule')} active={selectedTab === 'schedule'}>
            중앙 무대 일정
          </S.SelectionButton>
          <S.SelectionButton onClick={() => setSelectedTab('location')} active={selectedTab === 'location'}>
            위치
          </S.SelectionButton>
        </S.SelectionBar>
        {selectedTab === 'schedule' && <StageSchedule />}
        {selectedTab === 'location' && <LocationInfo />}
      </S.Container>
    </>
  );
};

export default StageInfoPage;
