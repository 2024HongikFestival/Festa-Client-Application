import { lazy, Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContentContainer from '@/components/common/ContentContainer';
import PageTitle from '@/components/common/PageTitle';
import * as S from '@/pages/facilities/styles';

const RestroomSection = lazy(() => import('@/components/facilities/RestroomSection'));
const MedicalSection = lazy(() => import('@/components/facilities/MedicalSection'));
const LostAndFoundSection = lazy(() => import('@/components/facilities/LostAndFoundSection'));

const FacilitiesPage = () => {
  const [selectedFacility, setSelectedFacility] = useState('restroom');
  const { t } = useTranslation();

  const handleToggleClick = (facility) => {
    setSelectedFacility(facility);
  };

  const getTranslateX = () => {
    switch (selectedFacility) {
      case 'restroom':
        return '0';
      case 'medical':
        return '8.15rem';
      case 'lostAndFound':
        return '19.3rem';
      default:
        return '0';
    }
  };

  const getWidth = () => {
    switch (selectedFacility) {
      case 'restroom':
        return '8.2rem';
      case 'medical':
        return '11.1rem';
      case 'lostAndFound':
        return '11.2rem';
      default:
        return '0';
    }
  };

  return (
    <>
      <S.FacilitiesLayout>
        <PageTitle title={t('facilities.amenities')} />
        <S.ToggleWrapper>
          <ContentContainer>
            <S.Toggle>
              <S.AnimatedBackground
                style={{
                  transform: `translateX(${getTranslateX()})`,
                  width: getWidth(),
                }}
              />
              <S.RestroomBtn $isActive={selectedFacility === 'restroom'} onClick={() => handleToggleClick('restroom')}>
                {t('facilities.restroomToggle')}
              </S.RestroomBtn>
              <S.MedicalBtn $isActive={selectedFacility === 'medical'} onClick={() => handleToggleClick('medical')}>
                {t('facilities.medicalFacilityToggle')}
              </S.MedicalBtn>
              <S.LostAndFoundBtn
                $isActive={selectedFacility === 'lostAndFound'}
                onClick={() => handleToggleClick('lostAndFound')}
              >
                {t('facilities.lostAndFoundCenterToggle')}
              </S.LostAndFoundBtn>
            </S.Toggle>
          </ContentContainer>
        </S.ToggleWrapper>
        <Suspense fallback={null}>
          {selectedFacility === 'restroom' && <RestroomSection />}
          {selectedFacility === 'medical' && <MedicalSection />}
          {selectedFacility === 'lostAndFound' && <LostAndFoundSection />}
        </Suspense>
      </S.FacilitiesLayout>
    </>
  );
};

export default FacilitiesPage;
