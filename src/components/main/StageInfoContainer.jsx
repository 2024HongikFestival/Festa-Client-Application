import styled from 'styled-components';
import StageInfo from '@/components/main/StageInfo';
import HibsLogo from '@/assets/webps/main/hibs.webp';
import youtubeIcon from '@/assets/webps/main/youtubeIcon.webp';

export default function StageInfoContainer() {
  return (
    <StageContainer>
      <StageTitle>중앙 무대 일정</StageTitle>
      {/* 무대 일정에 따라 컴포넌트 변화 있을 수 있어 임시 하드코딩 */}
      <StageInfo />
      <StageInfo />
      <StageInfo />
      {/* 실시간 방송 보러가기 버튼 컴포넌트 */}
      <GoHibsBtn>
        <BtnWrapper>
          <BtnText>
            <LogoContainer>
              <Logo src={HibsLogo} alt="hibsLogo" />
              <TopText>HIBS 홍대방송국</TopText>
            </LogoContainer>
            <BottomText>실시간 공연 보러가기 !</BottomText>
          </BtnText>
          <YoutubeIconWrapper>
            <YoutubeIcon src={youtubeIcon} alt="youtube" />
          </YoutubeIconWrapper>
        </BtnWrapper>
      </GoHibsBtn>
    </StageContainer>
  );
}
const StageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6.4rem;
  margin-bottom: 6.4rem;
`;

const StageTitle = styled.div`
  ${(props) => props.theme.fontStyles.main.headline3}
  margin-bottom: 2.8rem;
`;

const GoHibsBtn = styled.div`
  width: 33.6rem;
  height: 8.2rem;
  margin-top: 2rem;
  border: none;
  border-radius: 1.2rem;
  background: linear-gradient(91.85deg, rgba(3, 124, 158, 0.32) 5.35%, rgba(22, 170, 234, 0.32) 102.2%);
  position: relative;
  overflow: hidden;
  display: flex;
  padding-top: 0.8rem;
  justify-content: center;

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

const BtnWrapper = styled.div`
  width: 29.1rem;
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const BtnText = styled.div`
  width: 19.7rem;
  height: 5.9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopText = styled.p`
  ${({ theme }) => theme.fontStyles.basic.captionBold};
  margin-left: 0.8rem;
  color: white;
`;

const BottomText = styled.p`
  ${({ theme }) => theme.fontStyles.main.headline6};
  font-size: 1.8rem;
  color: white;
`;

const YoutubeIconWrapper = styled.div`
  width: 7rem;
  height: 6.5rem;
  border-left: 0.1rem solid white;
`;

const YoutubeIcon = styled.img`
  width: 3.825rem;
  height: 2.677rem;
  margin-left: 2.784rem;
  margin-top: 1.911rem;
`;