// 대동제 공연 (관람 정보)
// url: /stage-info

import React, { useState } from 'react';
import { Container, SelectionBar, SelectionButton, Title } from './styles/StageInfoPage';
import StageSchedule from './components/StageSchedule';
import LocationInfo from './components/LocationInfo';

const StageInfoPage = () => {
  const [selectedTab, setSelectedTab] = useState('schedule');

  return (
    <>
      <Container>
        <Title>관람 정보</Title>
        <SelectionBar>
          <SelectionButton onClick={() => setSelectedTab('schedule')} active={selectedTab === 'schedule'}>
            중앙 무대 일정
          </SelectionButton>
          <SelectionButton onClick={() => setSelectedTab('location')} active={selectedTab === 'location'}>
            위치
          </SelectionButton>
        </SelectionBar>
        {selectedTab === 'schedule' && <StageSchedule />}
        {selectedTab === 'location' && <LocationInfo />}
      </Container>
    </>
  );
};

export default StageInfoPage;
