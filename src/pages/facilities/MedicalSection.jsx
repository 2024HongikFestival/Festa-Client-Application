import ContentContainer from '@/components/common/ContentContainer';
import * as S from '@/pages/facilities/styles';
import { useTranslation } from 'react-i18next';
import medMap from '@/assets/webps/facilities/medMap.webp';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const MedicalSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <ContentContainer>
        <S.Title>
          {t('facilities.medical.title1')} <span>{t('facilities.medical.title2')}</span>
        </S.Title>

        <TransformWrapper
          initialScale={2.1}
          initialPositionX={-108}
          initialPositionY={-104}
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
              <S.Map src={medMap} alt="Medical Map" />
            </TransformComponent>
          </S.MapWrapper>
        </TransformWrapper>

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
