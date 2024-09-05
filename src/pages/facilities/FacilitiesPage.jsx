import ContentContainer from '@/components/common/ContentContainer';
import PageTitle from '@/components/common/PageTitle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FacilitiesPage = () => {
  const [selectedFacility, setSelectedFacility] = useState('toilet');
  const nav = useNavigate();

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
      {selectedFacility === 'toilet' && (
        <>
          <ContentContainer>
            <Title>
              화장실 <span>위치</span>
            </Title>
            <Map />
            <ToiletDetail>
              <DetailItem>
                <Number>1</Number>
                <GrayBar />
                <Building>M동</Building>
                <Floor>1층</Floor>
              </DetailItem>
              <DetailItem>
                <Number>2</Number>
                <GrayBar />
                <Building>Z4동</Building>
                <Floor>1층 (장애인 화장실)</Floor>
              </DetailItem>
              <DetailItem>
                <Number>3</Number>
                <GrayBar />
                <Building>Z4동</Building>
                <Floor>2층</Floor>
              </DetailItem>
            </ToiletDetail>
          </ContentContainer>
          <MarginBottom />
        </>
      )}
      {selectedFacility === 'medical' && (
        <>
          <ContentContainer>
            <Title>
              의료 시설 <span>위치</span>
            </Title>
            <Map />
            <Description>
              <span>정보통신센터(Q동) 계단 앞 건강관리센터</span>에서
              <br />
              비상시 응급 치료를 받으실 수 있습니다.
            </Description>
          </ContentContainer>
          <MarginBottom />
        </>
      )}
      {selectedFacility === 'lostAndFound' && (
        <>
          <ContentContainer>
            <Title>
              분실물 센터 <span>위치</span>
            </Title>
            <Map />
            <Description>
              <span>대운동장 구령대 중앙</span>에
              <br />
              분실물 센터가 위치해 있습니다.
            </Description>
          </ContentContainer>
          <GoLostAndFoundBtn onClick={() => nav('/lost-and-found')}>온라인 분실물 센터 바로가기</GoLostAndFoundBtn>
          <MarginBottom />
        </>
      )}
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
  margin-bottom: 2rem;
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
  cursor: pointer;
`;

const Title = styled.p`
  margin-top: 2.4rem;
  margin-bottom: 2rem;
  ${(props) => props.theme.fontStyles.main.headline6};
  color: ${(props) => props.theme.colors.hongikBlue};

  span {
    ${(props) => props.theme.fontStyles.main.headline6};
    color: ${(props) => props.theme.colors.gray100};
  }
`;

const Map = styled.div`
  width: 100%;
  height: 25rem;
  border-top: 1px solid ${(props) => props.theme.colors.gray30};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray30};
`;

const ToiletDetail = styled.ul`
  width: 100%;
  padding: 1.8rem 2.4rem 2.4rem 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

const Number = styled.span`
  margin-right: 0.9rem;
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  color: ${(props) => props.theme.colors.gray100};
`;

const DetailItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;

  &:nth-child(1) ${Number} {
    margin-right: 0.9rem; /* 1의 Number와 GrayBar 간 간격 0.9rem */
  }

  &:nth-child(n + 2) ${Number} {
    margin-right: 0.8rem; /* 2 이후 항목의 Number와 GrayBar 간 간격 0.8rem */
  }
`;

const GrayBar = styled.div`
  width: 0.1rem;
  height: 1.6rem;
  margin-right: 1.2rem;
  background-color: ${(props) => props.theme.colors.gray40};
`;

const Building = styled.span`
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${(props) => props.theme.colors.gray100};
  margin-right: 0.4rem;
`;

const Floor = styled.span`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  color: ${(props) => props.theme.colors.hongikBlue};
`;

const Description = styled.div`
  width: 100%;
  padding: 1.8rem 2.4rem 2.4rem;
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${(props) => props.theme.colors.gray70};
  span {
    ${(props) => props.theme.fontStyles.basic.body1Bold};
    color: ${(props) => props.theme.colors.gray100};
  }
`;

const GoLostAndFoundBtn = styled.div`
  margin-top: 2.4rem;
  cursor: pointer;
  width: 33.5rem;
  height: 5.2rem;
  border-radius: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.colors.hongikBlue};
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 2rem 0 rgba(255, 255, 255, 0.8);
`;

const MarginBottom = styled.div`
  margin-bottom: 6.4rem;
`;
