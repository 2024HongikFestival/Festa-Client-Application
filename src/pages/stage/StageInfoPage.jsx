import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles/StageInfoPage';
import StageSchedule from '@/components/stage/StageSchedule';
import LocationInfo from '@/components/stage/LocationInfo';

const StageInfoPage = () => {
  const [selectedTab, setSelectedTab] = useState('schedule');
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Title>{t('stageInfoPage.title')}</S.Title>
      <S.SelectionBar>
        {/* Transient Prop ($activeTab) 사용 */}
        <S.ActiveBackground $activeTab={selectedTab} />

        {/* 선택된 탭에 따라 스타일이 적용되도록 Transient Prop ($active) 사용 */}
        <S.SelectionButton onClick={() => setSelectedTab('schedule')} $active={selectedTab === 'schedule'}>
          {t('stageInfoPage.selectionBar.schedule')}
        </S.SelectionButton>
        <S.SelectionButton onClick={() => setSelectedTab('location')} $active={selectedTab === 'location'}>
          {t('stageInfoPage.selectionBar.location')}
        </S.SelectionButton>
      </S.SelectionBar>
      {selectedTab === 'schedule' && <StageSchedule />}
      {selectedTab === 'location' && <LocationInfo />}
    </S.Container>
  );
};

export default StageInfoPage;
