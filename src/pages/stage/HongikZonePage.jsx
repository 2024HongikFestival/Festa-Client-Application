// 대동제 홍익존
// url: /hongik-zone

import React from 'react';
import {
  BlackHighlight,
  BlueHighlight,
  BoxContainer,
  Info,
  List,
  LocationBox,
  LocationTitle,
  Map,
  PageContainer,
  SubTitle,
  TextBox,
  Title,
} from './styles/HongikZonePage';

const HongikZonePage = () => {
  return (
    <PageContainer>
      <Title>홍익존</Title>
      <BoxContainer>
        <Info>
          <TextBox>
            <SubTitle>홍익존이 뭐에요?</SubTitle>
            <List>
              <li>
                <BlackHighlight>홍익존</BlackHighlight>은 <BlackHighlight>사전 예매가 확인</BlackHighlight>된 홍익대학교
                학생만 입장 가능한 메인스테이지 관람존입니다
              </li>
              <li>휴학생, 졸업유예생, 대학원생 모두 가능합니다</li>
            </List>
          </TextBox>
          <TextBox>
            <SubTitle>입장하기 위해 준비해 주세요!</SubTitle>
            <List>
              <li>
                입장 시간은 <BlueHighlight>16시 30분</BlueHighlight>부터입니다
              </li>
              <li>
                입장 전 입구에서 <BlueHighlight>‘톡켓’</BlueHighlight>의
                <br />
                사전 예매 내역을 확인하고 입장합니다
              </li>
              <li>
                톡켓 티켓 미소지자는 18시 30분 이후부터 현장 잔여석에 한하여 톡켓 어플에서 추가 티켓을 발급 받으실 수
                있습니다
              </li>
            </List>
          </TextBox>
        </Info>
        <LocationBox>
          <LocationTitle>홍익존 위치</LocationTitle>
          <Map>지도</Map>
        </LocationBox>
        <Info>
          <TextBox>
            <SubTitle className="gray100">입장하기 전 알아두세요!</SubTitle>
            <List>
              <li>많은 사람이 모일 경우, 현장 안전요원의 지시에 따라 질서를 잘 지켜주시기 바랍니다</li>
              <li>무리하게 펜스에 매달리거나 기대는 행위는 안전상 문제가 발생할 수 있으니 삼가주시기 바랍니다</li>
              <li>안전요원의 지시에 불응하여 문제를 일으킬 경우 퇴장조치를 받을 수 있습니다</li>
            </List>
          </TextBox>
        </Info>
      </BoxContainer>
    </PageContainer>
  );
};

export default HongikZonePage;
