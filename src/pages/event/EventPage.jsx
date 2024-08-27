import { useEffect, useState } from 'react';
import { EVENTS_KAKAO_AUTH_URL } from '@/auth/OAuth';
import styled from 'styled-components';
import raffle from '@/assets/webps/event/raffle.webp';

const EventPage = () => {
  const [stateData, setStateData] = useState();

  const handleRandomState = () => {
    const array = new Uint32Array(1);
    self.crypto.getRandomValues(array);
    setStateData(array[0]);
  };

  const handleKakaoAuth = () => {
    window.location.href = EVENTS_KAKAO_AUTH_URL + `&state=${stateData}`;
  };

  useEffect(() => {
    handleRandomState();
  }, []);

  return (
    <Wrapper>
      <Title>
        <p>2024</p>
        <p>홍익 대동제 래플</p>
      </Title>
      <div>
        <img src={raffle} alt="raffle" height={184} />
      </div>
      <NoticeText>매일 오전 10시 응모권 1장 부여</NoticeText>
      <NoticeTimeBox>
        <NoticeTime>마감까지 남은 시간</NoticeTime>
        <NoticeTime>00:00:00</NoticeTime>
      </NoticeTimeBox>
      <QNABox>
        <QText>Q. 홍익 래플이 뭐예요?</QText>
        <AText>A. 응모자 추첨을 통해 경품을 지급하는 이벤트입니다.</AText>
      </QNABox>

      {/* <button
            style={{
              backgroundColor: '#FADB34',
              color: 'black',
              border: 'none',
              width: '20rem',
              height: '3rem',
            }}
            onClick={handleKakaoAuth}
          >
            카카오 인증 후 응모하기
          </button> */}
    </Wrapper>
  );
};

export default EventPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.7rem;
  color: ${(props) => props.theme.colors.white};
  p {
    ${(props) => props.theme.fontStyles.basic.eventTitle}
  }
`;

const NoticeText = styled.div`
  margin-top: 1.1rem;
  margin-bottom: 2.3rem;
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${(props) => props.theme.colors.white};
`;

const NoticeTimeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.5rem;
  height: 13.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: linear-gradient(180deg, #ffff24 0%, #a9ff1e 100%);
`;

const NoticeTime = styled.div`
  ${(props) => props.theme.fontStyles.basic.body1Bold}
  color: ${(props) => props.theme.colors.flameBackgroundColor};
`;

const QNABox = styled.div`
  display: flex;
  width: 33.5rem;
  padding: 1.6rem 1.8rem;
  margin-top: 2.8rem;
  margin-bottom: 3.2rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.gray100};
`;

const QText = styled.div`
  text-align: center;
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  color: ${(props) => props.theme.colors.gray10};
`;

const AText = styled.div`
  text-align: center;
  ${(props) => props.theme.fontStyles.basic.body2Reg};
  color: ${(props) => props.theme.colors.gray10};
`;
