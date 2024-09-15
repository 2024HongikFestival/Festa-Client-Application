import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next'; // Trans 컴포넌트도 추가
import styled from 'styled-components';

const LocationInfo = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // useTranslation hook 사용

  return (
    <Container>
      <MapContainer>
        <MapBox>
          <MapTitle>{t('locationInfo.mapTitle')}</MapTitle>
          <Map></Map>
        </MapBox>
        <MapBox>
          <MapTitle>{t('locationInfo.entranceInfo')}</MapTitle>
          <Map></Map>
        </MapBox>
      </MapContainer>
      <InfoContainer>
        <Info>
          {/* Trans 컴포넌트를 사용해 특정 부분에 태그를 넣음 */}
          <InfoText>
            <Trans
              i18nKey="locationInfo.hongikZoneInfo"
              components={{
                highlight: <Highlight />, // 사전예매 부분에 적용할 태그 설정
                br: <br />, // 줄바꿈 태그도 적용 가능
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

const Map = styled.div`
  width: 33.5rem;
  height: 25rem;
`;

const Info = styled.div`
  display: flex;
  width: 19.2rem;
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
