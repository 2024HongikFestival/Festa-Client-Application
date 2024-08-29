import styled from 'styled-components';
import MoveToWdfBtn from '@/components/main/MoveToWdfBtn';
import { useTranslation } from 'react-i18next';
import mainImg from '@/assets/webps/main/mainExample.webp';
import StageInfo from '@/components/main/StageInfo';
export default function MainPage() {
  // const { t, i18n } = useTranslation();

  // const clickHandler = (lng) => {
  //   console.log(`conver to ${lng}`);
  //   localStorage.setItem('language', lng);
  //   i18n.changeLanguage(lng);
  // };

  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
      <LineupTitleWrapper>
        <Date>9.25 (수)</Date>
        <LineupTitle>오늘의 라인업</LineupTitle>
      </LineupTitleWrapper>
      {/* <LineupInfoWrapper>
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
      </LineupInfoWrapper> */}
      <LineupInfoWrapper></LineupInfoWrapper>
      <GoLineupPageBtn>전체 라인업 보러가기 {'>'}</GoLineupPageBtn>
      <Hr />
      <StageContainer>
        <StageTitle>중앙 무대 일정</StageTitle>
        <StageInfo />
        <StageInfo />
        <StageInfo />
        <GoHibsBtn />
      </StageContainer>
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

const Wrapper = styled.div`
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
  color: ${(props) => props.theme.colors.gray10};
  text-align: center;
`;

const LineupTitle = styled.p`
  ${(props) => props.theme.fontStyles.main.headline3}
  text-align: center;
`;

const LineupInfoWrapper = styled.div`
  width: 33.5rem;
  height: 50.9rem;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 1.2rem;
  border: 1px solid black;
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
  margin-bottom: 6.4rem;
`;

const LineupText = styled.div`
  width: 16.2rem;
  height: 6.9rem;
  ${(props) => props.theme.fontStyles.main.headline6}
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hr = styled.div`
  width: 100%;
  height: 1.2rem;
  background-color: rgba(160, 227, 255, 0.5);
`;

const StageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6.4rem;
`;

const StageTitle = styled.div`
  ${(props) => props.theme.fontStyles.main.headline3}
  margin-bottom: 2.8rem;
`;

const GoHibsBtn = styled.button`
  width: 33.2rem;
  height: 7.8rem;
  margin-top: 3.6rem;
  border: none;
  border-radius: 1.2rem;
  background: linear-gradient(91.85deg, rgba(3, 124, 158, 0.32) 5.35%, rgba(22, 170, 234, 0.32) 102.2%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1.2rem;
    padding: 0.2rem;
    background: linear-gradient(180deg, rgba(199, 255, 208, 0.56) 0%, rgba(79, 181, 255, 0.2) 100%);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: xor;
    pointer-events: none;
  }

  box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.12);
`;
