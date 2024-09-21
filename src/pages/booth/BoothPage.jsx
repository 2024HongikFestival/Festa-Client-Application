import { useState } from 'react';
import ContentContainer from '@/components/common/ContentContainer';
import PageTitle from '@/components/common/PageTitle';
import { useTranslation } from 'react-i18next';
import Ranking from '@/components/booth/ranking/Ranking';
import PubOperatingHour from '@/components/booth/pub/PubOperatingHour';
import PubCard from '@/components/booth/pub/PubCard';
import * as S from './BoothPage.styled';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import boothMapImg from '@/assets/webps/booth/map/boothMapImg.webp';

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
            {/* <S.MapImage src="src/assets/webps/booth/mapExample.webp" /> */}
            <TransformWrapper
              options={{
                limitToBounds: true, // 이미지를 컨테이너 경계 안에 제한
                minScale: 1, // 최소 축소 비율 (1: 원본 크기)
                maxScale: 5, // 최대 확대 비율 (4배)
                centerContent: true, // 콘텐츠를 중앙에 배치
              }}
              pan={{
                velocity: 0.8, // 드래그 시 이동 속도
                lockAxisX: false, // X축 드래그 제한 여부 (false로 설정해 제한하지 않음)
                lockAxisY: false, // Y축 드래그 제한 여부 (false로 설정해 제한하지 않음)
              }}
              pinch={{
                step: 15, // 핀치 제스처의 감도 (숫자가 클수록 더 빨리 확대/축소)
                disabled: false, // 핀치 확대/축소 활성화 여부
              }}
              wheel={{
                wheelEnabled: true, // 휠 확대/축소 활성화
                step: 0.1, // 휠 단계 조정 (0.1로 세밀하게 조정)
              }}
              zoomIn={{
                step: 10, // 확대 속도 증가
              }}
              zoomOut={{
                step: 10, // 축소 속도 증가
              }}
            >
              <TransformComponent>
                <img
                  src={boothMapImg} // 지도 이미지 URL
                  alt="Map"
                  style={{ width: '100%', height: '100%' }}
                />
              </TransformComponent>
            </TransformWrapper>
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
