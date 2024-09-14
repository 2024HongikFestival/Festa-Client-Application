import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LocationInfo = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <MapContainer>
        <MapBox>
          <MapTitle>무대 주변 지도</MapTitle>
          <Map></Map>
        </MapBox>
        <MapBox>
          <MapTitle>출입구 정보</MapTitle>
          <Map></Map>
        </MapBox>
      </MapContainer>
      <InfoContainer>
        <Info>
          <InfoText>
            홍익존은 <Highlight>사전예매</Highlight>하신
            <br /> 홍익대학교 학생들만 입장 가능해요
          </InfoText>
          <Button onClick={() => navigate('/hongik-zone')}>홍익존</Button>
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
  /* box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12); */
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
  /* box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12); */
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
  ${(props) => props.theme.fontStyles.basic.body2Bold}; /* "사전예매"에 적용될 스타일 */
`;
const Button = styled.button`
  width: 11.4rem;
  height: 4rem;
  padding: 0.8rem 2.9rem;
  border-radius: 10rem;
  background-color: ${(props) => props.theme.colors.hongikBlue};
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  cursor: pointer;
`;