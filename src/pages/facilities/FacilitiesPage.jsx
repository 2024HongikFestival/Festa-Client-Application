import ContentContainer from '@/components/common/ContentContainer';
import PageTitle from '@/components/common/PageTitle';
import { useState } from 'react';
import * as S from '@/pages/facilities/styles';
import ToiletSection from '@/pages/facilities/ToiletSection';
import MedicalSection from '@/pages/facilities/MedicalSection';
import LostAndFoundSection from '@/pages/facilities/LostAndFoundSection';
import { useTranslation } from 'react-i18next';

const FacilitiesPage = () => {
  const [selectedFacility, setSelectedFacility] = useState('toilet');
  const { t } = useTranslation();

  const handleToggleClick = (facility) => {
    setSelectedFacility(facility);
  };

  return (
    <>
      <S.FacilitiesLayout>
        <PageTitle title={t('facilities.amenities')} />
        <S.ToggleWrapper>
          <ContentContainer>
            <S.Toggle>
              <S.ToggleBtn $isActive={selectedFacility === 'toilet'} onClick={() => handleToggleClick('toilet')}>
                {t('facilities.restroom')}
              </S.ToggleBtn>
              <S.ToggleBtn $isActive={selectedFacility === 'medical'} onClick={() => handleToggleClick('medical')}>
                {t('facilities.medicalFacility')}
              </S.ToggleBtn>
              <S.ToggleBtn
                $isActive={selectedFacility === 'lostAndFound'}
                onClick={() => handleToggleClick('lostAndFound')}
              >
                {t('facilities.lostAndFoundCenter')}
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
