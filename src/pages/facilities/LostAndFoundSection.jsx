import ContentContainer from '@/components/common/ContentContainer';
import * as S from '@/pages/facilities/styles';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const LostAndFoundSection = () => {
  const nav = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <ContentContainer>
        <S.Title>
          {t('facilities.lostAndFound.title1')} <span>{t('facilities.lostAndFound.title2')}</span>
        </S.Title>
        <S.Map />
        <S.Description>
          <span>{t('facilities.lostAndFound.description1')}</span>
          {t('facilities.lostAndFound.description2')}
          <span>{t('facilities.lostAndFound.description2-2')}</span>
          <br />
          {t('facilities.lostAndFound.description3')}
        </S.Description>
      </ContentContainer>
      <S.GoLostAndFoundBtn onClick={() => nav('/lost-and-found')}>
        {t('facilities.lostAndFound.goLostAndFoundBtn')}
      </S.GoLostAndFoundBtn>
      <S.MarginBottom />
    </>
  );
};

export default LostAndFoundSection;
