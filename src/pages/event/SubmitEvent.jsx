import styled from 'styled-components';
import graphicBg from '@/assets/webps/event/graphic.webp';
import shareIcon from '@/assets/webps/event/shareIcon.webp';
import { useLocation } from 'react-router-dom';

const SubmitEvent = () => {
  const location = useLocation();
  const { date } = location.state || {}; // 전달받은 date 값

  // 조건에 따라 내용 변경
  const renderContent = () => {
    if (date === 1 || date === 2) {
      return (
        <ContentBox1>
          내일&nbsp;<span>오전 10시</span>에 응모권 1장 받고
          <br />또 도전해보세요!
        </ContentBox1>
      );
    } else if (date === 3) {
      return (
        <ContentBox2>
          <p>축제가 끝났어요</p>
          당첨자는{' '}
          <span>
            0월 0일
            <br />
            000를 통해 발표
          </span>
          됩니다
        </ContentBox2>
      );
    } else {
      return (
        <ContentBox1>
          내일&nbsp;<span>오전 10시</span>에 응모권 1장 받고
          <br />또 도전해보세요!
        </ContentBox1>
      );
    }
  };

  return (
    <Wrapper>
      <BackGroundContainer>
        <BackGroundImage src={graphicBg} alt="graphic" />
      </BackGroundContainer>
      <TitleBox>
        <Title>응모 완료!</Title>
      </TitleBox>
      {renderContent()}
      <ShareButton>
        <ShareIcon src={shareIcon} alt="shareIcon" />
        <p>이벤트 공유</p>
      </ShareButton>
    </Wrapper>
  );
};

export default SubmitEvent;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
`;

const BackGroundContainer = styled.div`
  width: 37.5rem;
  height: 70.7rem;
  position: relative;
`;

const BackGroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

const TitleBox = styled.div`
  position: absolute;
  top: 13.9rem;
`;

const Title = styled.h1`
  font-family: 'M PLUS 1';
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
  color: var(---on, #cdff3f);
  text-align: center;
`;

const ContentBox1 = styled.div`
  position: absolute;
  top: 45.4rem;

  ${(props) => props.theme.fontStyles.basic.subHeadMed};
  color: ${(props) => props.theme.colors.white};

  text-align: center;

  span {
    ${(props) => props.theme.fontStyles.basic.subHeadMed};
    color: var(--Schemes-On-Primary, #cdff3f);
  }
`;

const ContentBox2 = styled(ContentBox1)`
  top: 43.7rem;

  p {
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    ${(props) => props.theme.fontStyles.basic.headline5};
    padding-bottom: 2rem;
  }
`;

const ShareButton = styled.button`
  position: absolute;
  top: 61.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.1rem;
  width: 33.5rem;
  height: 5.2rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 0.1rem solid #ffff24;
  background: ${(props) => props.theme.colors.gray100};

  p {
    color: #ffff24;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const ShareIcon = styled.img`
  width: 3.9rem;
  height: 3.9rem;
  position: absolute;
  left: 8.3rem;
`;
