import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import styled from 'styled-components';
import map from '@/assets/webps/stageInfo/map.webp';
import map_2 from '@/assets/webps/stageInfo/map_2.webp';
import button from '@/assets/webps/stageInfo/button_scale.webp';
import Lottie from 'react-lottie';
import arrowAnimation from '@/assets/lotties/stageInfo/arrowAnimation.json';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: arrowAnimation,
};

const LocationInfo = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Container>
      <MapContainer>
        {/* 첫 번째 지도 - 이미지만 표시 */}
        <MapBox>
          <MapTitle>{t('locationInfo.mapTitle')}</MapTitle>
          <TransformWrapper
            initialScale={2.5}
            initialPositionX={-100}
            initialPositionY={-240}
            minScale={1}
            maxScale={6}
          >
            <MapWrapper>
              <TransformComponent>
                <Map src={map_2} alt="Stage Info Map" />
              </TransformComponent>
              <FloatingButton src={button} alt="button" />
            </MapWrapper>
          </TransformWrapper>
        </MapBox>

        <MapBox>
          <MapTitle>{t('locationInfo.entranceInfo')}</MapTitle>
          <MapWrapper>
            <Map src={map} alt="Entrance Info Map" />
            <LottieWrapper>
              <Lottie options={lottieOptions} />
            </LottieWrapper>
          </MapWrapper>
        </MapBox>
      </MapContainer>

      <InfoContainer>
        <Info>
          <InfoText>
            <Trans
              i18nKey="locationInfo.hongikZoneInfo"
              components={{
                highlight: <Highlight />,
                br: <br />,
              }}
            />
          </InfoText>
          <Button onClick={() => navigate('/hongik-zone')}>{t('locationInfo.hongikZoneButton')}</Button>
        </Info>
      </InfoContainer>
    </Container>
  );
};

export default LocationInfo;

const Container = styled.div`
  width: 33.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const InfoContainer = styled.div`
  display: flex;
  padding: 1.8rem 7.2rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.6rem;
  background-color: ${(props) => props.theme.colors.white};
`;

const MapBox = styled.div`
  display: flex;
  padding: 2.4rem 0;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 1.6rem;
  background-color: ${(props) => props.theme.colors.white};
`;

const MapTitle = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.gray100};
  text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.25);
  ${(props) => props.theme.fontStyles.main.headline6};
`;

const MapWrapper = styled.div`
  position: relative;
  width: 33.5rem;
  height: 25rem;
  background-color: #b1daff;
`;

const Map = styled.img`
  width: 33.5rem;
  height: 25rem;
  object-fit: cover;
`;

const LottieWrapper = styled.div`
  position: absolute;
  top: -0.2rem;
  left: 1rem;
  width: 33.5rem;
  height: 25rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  flex-shrink: 0;
  align-self: stretch;
`;

const InfoText = styled.div`
  color: ${(props) => props.theme.colors.gray100};
  text-align: center;
  ${(props) => props.theme.fontStyles.basic.body2Med};
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.colors.hongikBlue};
  ${(props) => props.theme.fontStyles.basic.body2Bold};
`;

const Button = styled.button`
  width: 11.4rem;
  height: 4rem;
  padding: 0.8rem;
  border-radius: 10rem;
  background-color: ${(props) => props.theme.colors.hongikBlue};
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  cursor: pointer;
`;
const FloatingButton = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
`;
