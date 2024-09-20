import { useState } from 'react';
import ContentContainer from '@/components/common/ContentContainer';
import PageTitle from '@/components/common/PageTitle';
import { useTranslation } from 'react-i18next';
import Ranking from '@/components/booth/ranking/Ranking';
import PubOperatingHour from '@/components/booth/pub/PubOperatingHour';
import PubCard from '@/components/booth/pub/PubCard';
import * as S from './BoothPage.styled';

export default function BoothPage() {
  const { t } = useTranslation();

  const [selectedTab, setSelectedTab] = useState('pub');
  return (
    <S.Container>
      <PageTitle title={t('booth.pub.pageTitle')}></PageTitle>
      <S.ForGapWrapper>
        {/* 메뉴탭 컴포넌트 */}
        <S.SelectionBar>
          <S.ActiveBackground $activeTab={selectedTab} /> {/* 슬라이딩 배경 */}
          <S.SelectionButton onClick={() => setSelectedTab('pub')} $isActive={selectedTab === 'pub'}>
            {t('booth.pub.pub')}
          </S.SelectionButton>
          <S.SelectionButton onClick={() => setSelectedTab('map')} $isActive={selectedTab === 'map'}>
            {t('booth.pub.location')}
          </S.SelectionButton>
        </S.SelectionBar>
        {/* 주점 지도 컴포넌트 */}
        {selectedTab === 'map' && (
          <ContentContainer>
            <S.MapTitle>{t('booth.pub.mapTitle')}</S.MapTitle>
            <S.MapImage src="src/assets/webps/booth/mapExample.webp" />
          </ContentContainer>
        )}
        {selectedTab === 'pub' && <PubCard />}
        {/* 주점 운영시간 정보 컴포넌트 */}
        {selectedTab === 'pub' && (
          <div data-aos="fade-up">
            <PubOperatingHour />
          </div>
        )}
        {/* 실시간 랭킹 정보 컴포넌트 */}
        {selectedTab === 'pub' && (
          <div data-aos="fade-up" data-aos-delay={'200'}>
            <Ranking kind="122" />
          </div>
        )}
      </S.ForGapWrapper>
    </S.Container>
  );
}
