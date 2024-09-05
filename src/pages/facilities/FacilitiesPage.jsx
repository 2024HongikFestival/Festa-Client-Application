import ContentContainer from '@/components/common/ContentContainer';
import PageTitle from '@/components/common/PageTitle';
import { useState } from 'react';
import styled from 'styled-components';

const FacilitiesPage = () => {
  const [selectedFacility, setSelectedFacility] = useState('toilet');

  const handleToggleClick = (facility) => {
    setSelectedFacility(facility);
  };

  return (
    <FacilitiesLayout>
      <PageTitle title={'편의시설'}>편의시설</PageTitle>
      <ToggleWrapper>
        <ContentContainer>
          <Toggle>
            <ToggleBtn isActive={selectedFacility === 'toilet'} onClick={() => handleToggleClick('toilet')}>
              화장실
            </ToggleBtn>
            <ToggleBtn isActive={selectedFacility === 'medical'} onClick={() => handleToggleClick('medical')}>
              의료 시설
            </ToggleBtn>
            <ToggleBtn isActive={selectedFacility === 'lostAndFound'} onClick={() => handleToggleClick('lostAndFound')}>
              분실물 센터
            </ToggleBtn>
          </Toggle>
        </ContentContainer>
      </ToggleWrapper>
      <ContentContainer>
        <p>주점 위치</p>
      </ContentContainer>
    </FacilitiesLayout>
  );
};

export default FacilitiesPage;

const FacilitiesLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ToggleWrapper = styled.div`
  margin-bottom: 2.8rem;
`;

const Toggle = styled.div`
  display: flex;
  padding: 0.8rem 3.2rem;
  gap: 2.4rem;
`;

const ToggleBtn = styled.div`
  color: ${({ isActive, theme }) => (isActive ? theme.colors.hongikBlue : theme.colors.gray60)};
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  font-family: 'Pretendard', sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  line-height: 150%;
  letter-spacing: -0.0016rem;
  font-weight: ${({ isActive }) => (isActive ? '700' : '600')};
  border-radius: ${({ isActive }) => (isActive ? '3rem' : '0')};
  background: ${({ isActive }) => (isActive ? 'rgba(24, 51, 219, 0.05)' : 'transparent')};
  padding: ${({ isActive }) => (isActive ? '0.6rem 2.4rem' : '0')};
  opacity: ${({ isActive }) => (isActive ? '1' : '0.6')};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
