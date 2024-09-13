import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // i18next import
import * as S from './styles/StageInfoPage';
import StageSchedule from '@/components/stage/StageSchedule';
import LocationInfo from '@/components/stage/LocationInfo';

const StageInfoPage = () => {
  const [selectedTab, setSelectedTab] = useState('schedule');
  const { t } = useTranslation(); // useTranslation hook 사용

  return (
    <>
      <S.Container>
        <S.Title>{t('stageInfoPage.title')}</S.Title>
        <S.SelectionBar>
          <S.ActiveBackground activeTab={selectedTab} /> {/* 슬라이딩 배경 */}
          <S.SelectionButton onClick={() => setSelectedTab('schedule')} active={selectedTab === 'schedule'}>
            {t('stageInfoPage.selectionBar.schedule')}
          </S.SelectionButton>
          <S.SelectionButton onClick={() => setSelectedTab('location')} active={selectedTab === 'location'}>
            {t('stageInfoPage.selectionBar.location')}
          </S.SelectionButton>
        </S.SelectionBar>
        {selectedTab === 'schedule' && <StageSchedule />}
        {selectedTab === 'location' && <LocationInfo />}
      </S.Container>
    </>
  );
};

export default StageInfoPage;
