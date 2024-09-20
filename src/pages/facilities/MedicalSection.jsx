import ContentContainer from '@/components/common/ContentContainer';
import * as S from '@/pages/facilities/styles';
import { useTranslation } from 'react-i18next';
import medMap from '@/assets/webps/facilities/medMap.webp';
import DraggableMap from '@/components/facilities/DraggableMap';

const MedicalSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <ContentContainer>
        <S.Title>
          {t('facilities.medical.title1')} <span>{t('facilities.medical.title2')}</span>
        </S.Title>

        <DraggableMap src={medMap} alt="med map" $bottom="-16.5rem" $left="-15.8rem" />

        <S.Description>
          <span>{t('facilities.medical.description1')}</span>
          {t('facilities.medical.description2')}
          <span>{t('facilities.medical.description2-2')}</span>
          <br />
          {t('facilities.medical.description3')}
        </S.Description>
      </ContentContainer>
      <S.MarginBottom />
    </>
  );
};

export default MedicalSection;
