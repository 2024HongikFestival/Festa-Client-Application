import ContentContainer from '@/components/common/ContentContainer';
import PageTitle from '@/components/common/PageTitle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const FacilitiesPage = () => {
  const [selectedFacility, setSelectedFacility] = useState('toilet');
  const nav = useNavigate();

  const handleToggleClick = (facility) => {
    setSelectedFacility(facility);
  };

  return (
    <S.FacilitiesLayout>
      <PageTitle title={'편의시설'}>편의시설</PageTitle>
      <S.ToggleWrapper>
        <ContentContainer>
          <S.Toggle>
            <S.ToggleBtn isActive={selectedFacility === 'toilet'} onClick={() => handleToggleClick('toilet')}>
              화장실
            </S.ToggleBtn>
            <S.ToggleBtn isActive={selectedFacility === 'medical'} onClick={() => handleToggleClick('medical')}>
              의료 시설
            </S.ToggleBtn>
            <S.ToggleBtn
              isActive={selectedFacility === 'lostAndFound'}
              onClick={() => handleToggleClick('lostAndFound')}
            >
              분실물 센터
            </S.ToggleBtn>
          </S.Toggle>
        </ContentContainer>
      </S.ToggleWrapper>
      {selectedFacility === 'toilet' && (
        <>
          <ContentContainer>
            <S.Title>
              화장실 <span>위치</span>
            </S.Title>
            <S.Map />
            <S.ToiletDetail>
              <S.DetailItem>
                <S.Number>1</S.Number>
                <S.GrayBar />
                <S.Building>M동</S.Building>
                <S.Floor>1층</S.Floor>
              </S.DetailItem>
              <S.DetailItem>
                <S.Number>2</S.Number>
                <S.GrayBar />
                <S.Building>Z4동</S.Building>
                <S.Floor>1층 (장애인 화장실)</S.Floor>
              </S.DetailItem>
              <S.DetailItem>
                <S.Number>3</S.Number>
                <S.GrayBar />
                <S.Building>Z4동</S.Building>
                <S.Floor>2층</S.Floor>
              </S.DetailItem>
            </S.ToiletDetail>
          </ContentContainer>
          <S.MarginBottom />
        </>
      )}
      {selectedFacility === 'medical' && (
        <>
          <ContentContainer>
            <S.Title>
              의료 시설 <span>위치</span>
            </S.Title>
            <S.Map />
            <S.Description>
              <span>정보통신센터(Q동) 계단 앞 건강관리센터</span>에서
              <br />
              비상시 응급 치료를 받으실 수 있습니다.
            </S.Description>
          </ContentContainer>
          <S.MarginBottom />
        </>
      )}
      {selectedFacility === 'lostAndFound' && (
        <>
          <ContentContainer>
            <S.Title>
              분실물 센터 <span>위치</span>
            </S.Title>
            <S.Map />
            <S.Description>
              <span>대운동장 구령대 중앙</span>에
              <br />
              분실물 센터가 위치해 있습니다.
            </S.Description>
          </ContentContainer>
          <S.GoLostAndFoundBtn onClick={() => nav('/lost-and-found')}>온라인 분실물 센터 바로가기</S.GoLostAndFoundBtn>
          <S.MarginBottom />
        </>
      )}
    </S.FacilitiesLayout>
  );
};

export default FacilitiesPage;
