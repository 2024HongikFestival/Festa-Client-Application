import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import styled from 'styled-components';
import map from '@/assets/webps/stageInfo/map.webp';
import Lottie from 'react-lottie';
import arrowAnimation from '@/assets/lotties/stageInfo/arrowAnimation.json';

const LocationInfo = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: arrowAnimation,
  };

  return (
    <Container>
      <MapContainer>
        {/* 첫 번째 지도 - 이미지만 표시 */}
        <MapBox>
          <MapTitle>{t('locationInfo.mapTitle')}</MapTitle>
          <Map src={map} alt="Stage Info Map" />
        </MapBox>

        {/* 두 번째 지도 - 이미지와 Lottie 애니메이션 */}
        <MapBox>
          <MapTitle>{t('locationInfo.entranceInfo')}</MapTitle>
          <MapWrapper>
            <Map src={map} alt="Entrance Info Map" />
            <LottieWrapper>
              <Lottie options={defaultOptions} />
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
`;

const Map = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LottieWrapper = styled.div`
  position: absolute;
  top: -0.2rem;
  left: 1rem;
  width: 100%;
  height: 100%;
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
