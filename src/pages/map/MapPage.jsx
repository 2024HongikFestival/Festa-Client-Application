import { MapBox, MapTitle, MapToggle, MapToggleBtn, MainMapWrapper, MapToggleBox } from './styles.js';
import React, { useState } from 'react';
import ContentContainer from '@/components/common/ContentContainer.jsx';

const MapPage = () => {
  // State to track which map view is active
  const [activeView, setActiveView] = useState('all'); // 'all' or 'detail'

  // Handlers for toggling map views
  const handleToggle = (view) => {
    setActiveView(view);
  };

  return (
    <MainMapWrapper>
      <MapTitle>로드맵</MapTitle>
      <MapBox>
        <ContentContainer>
          <MapToggle>
            <MapToggleBtn
              aria-pressed={activeView === 'all'}
              isActive={activeView === 'all'}
              onClick={() => handleToggle('all')}
            >
              전체지도
            </MapToggleBtn>
            <MapToggleBtn
              aria-pressed={activeView === 'detail'}
              isActive={activeView === 'detail'}
              onClick={() => handleToggle('detail')}
            >
              상세지도
            </MapToggleBtn>
          </MapToggle>
        </ContentContainer>

        <ContentContainer>
          <MapToggleBox>에휴</MapToggleBox>
        </ContentContainer>
      </MapBox>
    </MainMapWrapper>
  );
};

export default MapPage;
