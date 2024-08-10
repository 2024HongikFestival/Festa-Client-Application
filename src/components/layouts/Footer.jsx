import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import instaLogo from '@/assets/layouts/instaLogo.svg';

export default function Footer() {
  const nav = useNavigate();

  return (
    <FooterLayout>
      <PreviousBtn onClick={() => nav(-1)}>
        <span>이전 화면으로</span>
      </PreviousBtn>
      <LikelionBtn onClick={() => nav('/likelion')}>
        <span>제작 멋쟁이사자처럼 &gt;</span>
      </LikelionBtn>
      <GaehwaBtn onClick={() => nav('/gaehwa')}>
        <span>총학생회 개화 ; 開花 &gt;</span>
      </GaehwaBtn>
      <DaedongjeContainer>
        <span>대동제 채널 바로가기</span>
        <img src={instaLogo} alt="instaLogo" />
      </DaedongjeContainer>
    </FooterLayout>
  );
}

const FooterLayout = styled.div`
  width: 100%;
  height: auto;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PreviousBtn = styled.div`
  margin: 100px auto 0;
  cursor: pointer;
  width: 127px;
  height: 45px;
  border-radius: 50px;
  border: 1px solid #888e94;
  background: #181a1b;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  span {
    color: #fafafb;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
  }
`;

const LikelionBtn = styled.div`
  cursor: pointer;
  margin-top: 32px;
  color: white;
  text-align: center;

  /* Body/Body_2_bold */
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.014px;
`;

const GaehwaBtn = styled.div`
  cursor: pointer;
  margin-top: 8px;
  color: white;
  text-align: center;

  /* Body/Body_2_bold */
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.014px;
`;

const DaedongjeContainer = styled.div`
  margin: 80px 0 0 20px;
  display: flex;
  flex-direction: column;
  span {
    color: white;

    /* Caption/Caption_bold */
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: -0.012px;
  }

  img {
    width: 24px;
    height: 24px;
    margin-top: 8px;
    margin-bottom: 155px;
  }
`;
