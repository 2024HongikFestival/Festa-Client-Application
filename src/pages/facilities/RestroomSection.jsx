import ContentContainer from '@/components/common/ContentContainer';
import * as S from '@/pages/facilities/styles';
import { useTranslation } from 'react-i18next';
import restroomMap from '@/assets/webps/facilities/restroomMap.webp';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const RestroomSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <ContentContainer>
        <S.Title>
          {t('facilities.restroom.title1')} <span>{t('facilities.restroom.title2')}</span>
        </S.Title>

        <TransformWrapper
          initialScale={2.1}
          initialPositionX={-108}
          initialPositionY={-260}
          minScale={1}
          maxScale={1}
          wheel={{ disabled: true }} // 스크롤 줌 X
          pinch={{ disabled: true }} // 핀치 줌 X
          pan={{ disabled: false }} // 팬 기능 O
          zoomIn={{ disabled: true }} // 줌 인 X
          zoomOut={{ disabled: true }} // 줌 아웃 X
          doubleClick={{ disabled: true }}
        >
          <S.MapWrapper>
            <TransformComponent>
              <S.Map src={restroomMap} alt="Restroom Map" />
            </TransformComponent>
          </S.MapWrapper>
        </TransformWrapper>

        <S.RestroomDetail>
          <S.DetailItem>
            <S.Number>1</S.Number>
            <S.GrayBar />
            <S.Building>
              <span>{t('facilities.restroom.building1-1')}</span>
              {t('facilities.restroom.building1-2')}
            </S.Building>
            <S.Floor>{t('facilities.restroom.floor1')}</S.Floor>
          </S.DetailItem>
          <S.DetailItem>
            <S.Number>2</S.Number>
            <S.GrayBar />
            <S.Building>
              <span>{t('facilities.restroom.building2-1')}</span>
              {t('facilities.restroom.building2-2')}
              <br />
              <span>{t('facilities.restroom.building2-3')}</span>
            </S.Building>
            <S.Floor>{t('facilities.restroom.floor2')}</S.Floor>
          </S.DetailItem>
          <S.DetailItem>
            <S.Number>3</S.Number>
            <S.GrayBar />
            <S.Building>
              <span>{t('facilities.restroom.building3-1')}</span>
              {t('facilities.restroom.building3-2')}
            </S.Building>
            <S.Floor>{t('facilities.restroom.floor3')}</S.Floor>
          </S.DetailItem>
        </S.RestroomDetail>
      </ContentContainer>
      <S.MarginBottom />
    </>
  );
};

export default RestroomSection;
