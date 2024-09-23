import { lazy, Suspense, useState } from 'react';
import PageTitle from '@/components/common/PageTitle';
import { useTranslation } from 'react-i18next';
import * as S from './BoothPage.styled';

const PubMap = lazy(() => import('@/components/booth/pub/PubMap'));
const PubCard = lazy(() => import('@/components/booth/pub/PubCard'));
const PubOperatingHour = lazy(() => import('@/components/booth/pub/PubOperatingHour'));
const Ranking = lazy(() => import('@/components/booth/ranking/Ranking'));

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
          <Suspense fallback={null}>
            <PubMap />
          </Suspense>
        )}
        {selectedTab === 'pub' && (
          <Suspense fallback={null}>
            <PubCard />
            <div data-aos="fade-up">
              <PubOperatingHour />
            </div>
            <div data-aos="fade-up" data-aos-delay={'200'}>
              <Ranking />
            </div>
          </Suspense>
        )}
      </S.ForGapWrapper>
    </S.Container>
  );
}
