import ContentContainer from '@/components/common/ContentContainer';
import * as S from '@/pages/facilities/styles';
import { useTranslation } from 'react-i18next';

const ToiletSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <ContentContainer>
        <S.Title>
          {t('facilities.toilet.title1')} <span>{t('facilities.toilet.title2')}</span>
        </S.Title>
        <S.Map />
        <S.ToiletDetail>
          <S.DetailItem>
            <S.Number>1</S.Number>
            <S.GrayBar />
            <S.Building>{t('facilities.toilet.building1')}</S.Building>
            <S.Floor>{t('facilities.toilet.floor1')}</S.Floor>
          </S.DetailItem>
          <S.DetailItem>
            <S.Number>2</S.Number>
            <S.GrayBar />
            <S.Building>
              {t('facilities.toilet.building2')}
              <br />
              {t('facilities.toilet.building2-2')}
            </S.Building>
            <S.Floor>{t('facilities.toilet.floor2')}</S.Floor>
          </S.DetailItem>
          <S.DetailItem>
            <S.Number>3</S.Number>
            <S.GrayBar />
            <S.Building>{t('facilities.toilet.building3')}</S.Building>
            <S.Floor>{t('facilities.toilet.floor3')}</S.Floor>
          </S.DetailItem>
        </S.ToiletDetail>
      </ContentContainer>
      <S.MarginBottom />
    </>
  );
};

export default ToiletSection;
