import styled from 'styled-components';
import MoveToWdfBtn from '@/components/main/MoveToWdfBtn';
import { useTranslation } from 'react-i18next';
import mainImg from '@/assets/webps/main/mainExample.webp';
export default function MainPage() {
  // const { t, i18n } = useTranslation();

  // const clickHandler = (lng) => {
  //   console.log(`conver to ${lng}`);
  //   localStorage.setItem('language', lng);
  //   i18n.changeLanguage(lng);
  // };

  return (
    <Container>
      <Title>
        2024
        <br />
        홍익대동제
      </Title>
      <Desc>
        활짝 피어있는 지금
        <br />
        있는 그대로 만개한 청춘인 이 순간을
        <br />
        2024 화양연화 ; 만개로 하여금 기록되어
        <br />
        오랫동안 기억될 것입니다.
      </Desc>
      <Img src={mainImg} alt="main" />
      <LineupTitleWrapper>
        <Date>9.25 (수)</Date>
        <LineupTitle>오늘의 라인업</LineupTitle>
      </LineupTitleWrapper>
      <LineupInfoWrapper>
        <LineupCompWrapper>
          <LineupComp height={'long'}>
            <LineupText>이름텍스트영역</LineupText>
          </LineupComp>
          <LineupComp height={'short'}>
            <LineupText>이름텍스트영역</LineupText>
          </LineupComp>
        </LineupCompWrapper>
        <LineupCompWrapper>
          <LineupComp height={'short'}>
            <LineupText>이름텍스트영역</LineupText>
          </LineupComp>
          <LineupComp height={'long'}>
            <LineupText>이름텍스트영역</LineupText>
          </LineupComp>
        </LineupCompWrapper>
      </LineupInfoWrapper>
      <GoLineupPageBtn>전체 라인업 보러가기 {'>'}</GoLineupPageBtn>
    </Container>
  );
}

{
  /* <p>{t('hello')}</p>
      <p>{t('goodbye')}</p>
      <p>{t('main.sorry')}</p>
      <button onClick={() => clickHandler('ko')}>ko</button>
      <button onClick={() => clickHandler('en')}>en</button> */
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  ${(props) => props.theme.fontStyles.main.headline1}
  text-align: center;
  margin-top: 4.4rem;
`;

const Desc = styled.div`
  ${(props) => props.theme.fontStyles.basic.body1Med}
  text-align: center;
`;

const Img = styled.img`
  width: 37.8rem;
  height: 42.3rem;
  object-fit: contain;
`;

const LineupTitleWrapper = styled.div`
  width: 100%;
  height: 7.7rem;
  margin-top: 3.2rem;
  margin-bottom: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Date = styled.p`
  ${(props) => props.theme.fontStyles.basic.subHeadBold}
  text-align: center;
`;

const LineupTitle = styled.p`
  ${(props) => props.theme.fontStyles.main.headline3}
  text-align: center;
`;

const LineupInfoWrapper = styled.div`
  width: 33.5rem;
  display: flex;
  justify-content: space-between;
`;

const LineupCompWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.2rem;
  gap: 1.2rem;
`;

const LineupComp = styled.div`
  width: 16.2rem;
  height: ${(props) => (props.height === 'long' ? '27.7rem' : '20.8rem')};
  box-shadow: 0px 0px 0.8rem 0 rgba(0, 0, 0, 0.12);
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const GoLineupPageBtn = styled.button`
  margin-top: 4.4rem;
  width: 33.5rem;
  height: 5.4rem;
  box-shadow: 0px 0px 0.8rem 0 rgba(0, 0, 0, 0.12);
  ${(props) => props.theme.fontStyles.basic.headline5}
`;

const LineupText = styled.div`
  width: 16.2rem;
  height: 6.9rem;
  ${(props) => props.theme.fontStyles.main.headline6}
  display: flex;
  justify-content: center;
  align-items: center;
`;
