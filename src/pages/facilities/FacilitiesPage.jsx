import ContentContainer from '@/components/common/ContentContainer';
import PageTitle from '@/components/common/PageTitle';
import { useState } from 'react';
import * as S from './styles';
import ToiletSection from './ToiletSection';
import MedicalSection from './MedicalSection';
import LostAndFoundSection from './LostAndFoundSection';

const FacilitiesPage = () => {
  const [selectedFacility, setSelectedFacility] = useState('toilet');

  const handleToggleClick = (facility) => {
    setSelectedFacility(facility);
  };

  return (
    <>
      <S.FacilitiesLayout>
        <PageTitle title={'편의시설'}>편의시설</PageTitle>
        <S.ToggleWrapper>
          <ContentContainer>
            <S.Toggle>
              <S.ToggleBtn $isActive={selectedFacility === 'toilet'} onClick={() => handleToggleClick('toilet')}>
                화장실
              </S.ToggleBtn>
              <S.ToggleBtn $isActive={selectedFacility === 'medical'} onClick={() => handleToggleClick('medical')}>
                의료 시설
              </S.ToggleBtn>
              <S.ToggleBtn
                $isActive={selectedFacility === 'lostAndFound'}
                onClick={() => handleToggleClick('lostAndFound')}
              >
                분실물 센터
              </S.ToggleBtn>
            </S.Toggle>
          </ContentContainer>
        </S.ToggleWrapper>
        {selectedFacility === 'toilet' && <ToiletSection />}
        {selectedFacility === 'medical' && <MedicalSection />}
        {selectedFacility === 'lostAndFound' && <LostAndFoundSection />}
      </S.FacilitiesLayout>
    </>
  );
};

export default FacilitiesPage;
