import ContentContainer from '@/components/common/ContentContainer';
import * as S from '@/pages/facilities/styles';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import lostAndFoundMap from '@/assets/webps/facilities/lostAndFoundMap.webp';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const LostAndFoundSection = () => {
  const nav = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <ContentContainer>
        <S.Title>
          {t('facilities.lostAndFound.title1')} <span>{t('facilities.lostAndFound.title2')}</span>
        </S.Title>

        <TransformWrapper
          initialScale={2.5}
          initialPositionX={-138}
          initialPositionY={-248}
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
              <S.Map src={lostAndFoundMap} alt="Lost And Found Map" />
            </TransformComponent>
          </S.MapWrapper>
        </TransformWrapper>

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
