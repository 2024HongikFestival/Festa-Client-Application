import ContentContainer from '@/components/common/ContentContainer';
import * as S from '@/pages/facilities/styles';
import { useTranslation } from 'react-i18next';

const RestroomSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <ContentContainer>
        <S.Title>
          {t('facilities.restroom.title1')} <span>{t('facilities.restroom.title2')}</span>
        </S.Title>
        <S.Map />
        <S.RestroomDetail>
          <S.DetailItem>
            <S.Number>1</S.Number>
            <S.GrayBar />
            <S.Building>{t('facilities.restroom.building1')}</S.Building>
            <S.Floor>{t('facilities.restroom.floor1')}</S.Floor>
          </S.DetailItem>
          <S.DetailItem>
            <S.Number>2</S.Number>
            <S.GrayBar />
            <S.Building>
              {t('facilities.restroom.building2')}
              <br />
              {t('facilities.restroom.building2-2')}
            </S.Building>
            <S.Floor>{t('facilities.restroom.floor2')}</S.Floor>
          </S.DetailItem>
          <S.DetailItem>
            <S.Number>3</S.Number>
            <S.GrayBar />
            <S.Building>{t('facilities.restroom.building3')}</S.Building>
            <S.Floor>{t('facilities.restroom.floor3')}</S.Floor>
          </S.DetailItem>
        </S.RestroomDetail>
      </ContentContainer>
      <S.MarginBottom />
    </>
  );
};

export default RestroomSection;
