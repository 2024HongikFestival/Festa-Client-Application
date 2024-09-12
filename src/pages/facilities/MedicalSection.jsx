import ContentContainer from '@/components/common/ContentContainer';
import * as S from '@/pages/facilities/styles';
import { useTranslation } from 'react-i18next';

const MedicalSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <ContentContainer>
        <S.Title>
          {t('facilities.medical.title1')} <span>{t('facilities.medical.title2')}</span>
        </S.Title>
        <S.Map />
        <S.Description>
          <span>{t('facilities.medical.description1')}</span>
          {t('facilities.medical.description2')}
          <br />
          {t('facilities.medical.description3')}
        </S.Description>
      </ContentContainer>
      <S.MarginBottom />
    </>
  );
};

export default MedicalSection;
