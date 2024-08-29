import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LocationInfo = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <MapContainer>
        <Map>
          <MapTitle>무대 주변 지도</MapTitle>
        </Map>
        <Map>
          <MapTitle>출입구 정보</MapTitle>
        </Map>
      </MapContainer>
      <InfoContainer>
        <Info>
          <InfoText>
            홍익존은 <Highlight>사전예매</Highlight>하신
            <br /> 홍익대학교 학생들만 입장 가능해요
          </InfoText>
          {/* 온클릭 구현해야 함 */}
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
  padding: 1.6rem 7.2rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.2rem;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);
`;
const Map = styled.div`
  display: flex;
  padding: 2.4rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 1.2rem;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);
`;
const MapTitle = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.gray100};
  text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.25);
  ${(props) => props.theme.fontStyles.main.headline6};
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
  height: 4.4rem;
  padding: 0.8rem 2.9rem;
  border-radius: 10rem;
  background-color: ${(props) => props.theme.colors.hongikBlue};
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  cursor: pointer;
`;
