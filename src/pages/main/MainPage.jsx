import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import mainImg from '@/assets/webps/main/mainExample.webp';
import OperatingHours from '@/components/main/OperatingHours';
import StageInfoContainer from '@/components/main/StageInfoContainer';

export default function MainPage() {
  // const { t, i18n } = useTranslation();

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
      {/* 라인업 정보 컴포넌트 */}
      <LineupTitleWrapper>
        <Date>9.25 (수)</Date>
        <LineupTitle>오늘의 라인업</LineupTitle>
      </LineupTitleWrapper>
      {/* 이 부분은 아직 확정나지 않아서 크기만 잡아두었습니다. */}
      <LineupInfoWrapper></LineupInfoWrapper>
      <GoLineupPageBtn>전체 라인업 보러가기 {'>'}</GoLineupPageBtn>
      <Hr />
      {/* 중앙 무대 일정 컴포넌트 */}
      <StageInfoContainer />
      <Hr />
      {/* 운영 시간 컴포넌트 */}
      <OperatingHours />
    </Container>
  );
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

const GoLineupPageBtn = styled.button`
  margin-top: 4.4rem;
  width: 33.5rem;
  height: 5.4rem;
  box-shadow: 0px 0px 0.8rem 0 rgba(0, 0, 0, 0.12);
  ${(props) => props.theme.fontStyles.basic.headline5}
  margin-bottom: 6.4rem;
`;

const Hr = styled.div`
  width: 100%;
  height: 1.2rem;
  background-color: rgba(160, 227, 255, 0.5);
`;
