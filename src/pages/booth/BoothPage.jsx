// import FloatingHearts from '@/components/main/Heart';
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa6';
import { axiosInstance } from '@/api/axios';
import styled from 'styled-components';
import ContentContainer from '@/components/common/ContentContainer';
import PageTitle from '@/components/common/PageTitle';
import { useTranslation } from 'react-i18next';
import Ranking from '@/components/booth/ranking/Ranking';
import PubOperatingHour from '@/components/booth/pub/PubOperatingHour';
import PubCard from '@/components/booth/pub/PubCard';

export default function BoothPage() {
  const { t } = useTranslation();

  const [selectedTab, setSelectedTab] = useState('pub');
  return (
    <Container>
      <PageTitle title={t('booth.pub.pageTitle')}></PageTitle>
      <ForGapWrapper>
        {/* 메뉴탭 컴포넌트 */}
        <SelectionBar>
          <ActiveBackground $activeTab={selectedTab} /> {/* 슬라이딩 배경 */}
          <SelectionButton onClick={() => setSelectedTab('pub')} $isActive={selectedTab === 'pub'}>
            {t('booth.pub.pub')}
          </SelectionButton>
          <SelectionButton onClick={() => setSelectedTab('map')} $isActive={selectedTab === 'map'}>
            {t('booth.pub.location')}
          </SelectionButton>
        </SelectionBar>
        {/* 주점 지도 컴포넌트 */}
        {selectedTab === 'map' && (
          <ContentContainer>
            <MapTitle>{t('booth.pub.mapTitle')}</MapTitle>
            <MapImage src="src/assets/webps/booth/mapExample.webp" />
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
          <div data-aos="fade-up">
            <Ranking kind="122" />
          </div>
        )}
      </ForGapWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ForGapWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.8rem;
`;

const MapImage = styled.img`
  width: 33.5rem;
  height: 25.2rem;
  margin-bottom: 2.4rem;
  border-top: 0.1rem solid #bfc2c8;
  border-bottom: 0.1rem solid #bfc2c8;
`;

const MapTitle = styled.div`
  width: 33.5rem;
  height: 3.2rem;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
  ${(props) => props.theme.fontStyles.main.headline6};
`;

const Btn = styled.div`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  width: 25rem;
  height: 3rem;
  background-color: lightpink;
  border-radius: 1rem;
  border: solid 0.1rem gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const SelectionBar = styled.div`
  position: relative; /* 슬라이딩 배경이 절대 위치로 작동하기 위한 상대 위치 */
  width: 33.5rem;
  height: 5.6rem;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.6rem;
  background-color: ${(props) => props.theme.colors.white};
`;

const ActiveBackground = styled.div`
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  width: 15.8rem;
  height: 4rem;
  background-color: rgba(24, 51, 219, 0.05);
  border-radius: 3rem;
  transition: transform 0.25s ease;

  /* 탭에 따라 슬라이딩 배경의 위치를 설정 */
  transform: ${({ $activeTab }) => ($activeTab === 'pub' ? 'translateX(0)' : 'translateX(15.8rem)')};
`;

const SelectionButton = styled.button`
  width: 15.8rem;
  padding: 0.6rem 2rem;
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.hongikBlue : 'rgba(107, 114, 118, 0.6)')};
  background-color: transparent; /* 버튼 자체는 투명하게 유지 */
  border: none;
  border-radius: 3rem;
  cursor: pointer;
  transition: color 0.25s ease;
`;
