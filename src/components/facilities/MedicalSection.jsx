import { useTranslation } from 'react-i18next';
import ContentContainer from '@/components/common/ContentContainer';
import * as S from '@/pages/facilities/styles';
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

        <DraggableMap
          src={medMap}
          alt="Medical Map"
          initialScale={2.1}
          initialPositionX={-108}
          initialPositionY={-104}
        />

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
