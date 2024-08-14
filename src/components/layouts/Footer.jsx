import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import instaLogo from '@/static/image/layouts/instaLogo.svg';

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
  background-color: ${(props) => props.theme.colors.makersBackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PreviousBtn = styled.div`
  margin: 10rem auto 0;
  cursor: pointer;
  width: 12.7rem;
  height: 4.5rem;
  border-radius: 5rem;
  border: 0.1rem solid ${(props) => props.theme.colors.gray50};
  background: ${(props) => props.theme.colors.gray100};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  span {
    padding-top: 0.2rem;
    color: ${(props) => props.theme.colors.gray5};
    font-family: 'Pretendard Variable', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.1rem;
  }
`;

const LikelionBtn = styled.div`
  cursor: pointer;
  margin-top: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  span {
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    ${(props) => props.theme.fontStyles.basic.body2Bold};
  }
`;

const GaehwaBtn = styled.div`
  cursor: pointer;
  margin-top: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  span {
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    ${(props) => props.theme.fontStyles.basic.body2Bold};
  }
`;

const DaedongjeContainer = styled.div`
  margin: 8rem 0 0 2rem;
  display: flex;
  flex-direction: column;
  span {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fontStyles.basic.captionBold};
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-top: 0.8rem;
    margin-bottom: 15.5rem;
  }
`;
