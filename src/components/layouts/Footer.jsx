import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import instaLogo from '@/assets/svgs/layouts/instaLogo.svg';

export default function Footer() {
  const nav = useNavigate();
  const location = useLocation();
  const [isAtFooter, setIsAtFooter] = useState(false);

  const handleNavigation = (path) => {
    if (location.pathname === path) {
      // 같은 페이지로 이동할 때
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      // 다른 페이지로 이동할 때
      nav(path);
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 100);
    }
  };

  const handleGoBack = () => {
    nav(-1);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.getElementById('footer');
      const footerTop = footerElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerTop <= windowHeight) {
        setIsAtFooter(true);
      } else {
        setIsAtFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FooterLayout id="footer">
      <PreviousBtn isAtFooter={isAtFooter} onClick={handleGoBack}>
        <span>이전 화면으로</span>
      </PreviousBtn>
      <LikelionBtn onClick={() => handleNavigation('/likelion')}>
        <span>제작 멋쟁이사자처럼 &gt;</span>
      </LikelionBtn>
      <GaehwaBtn onClick={() => handleNavigation('/gaehwa')}>
        <span>총학생회 개화 ; 開花 &gt;</span>
      </GaehwaBtn>
      <DaedongjeContainer>
        <span>대동제 채널 바로가기</span>
        <a href="https://www.instagram.com/hiufestival_official/" target="_blank" rel="noopener noreferrer">
          <img src={instaLogo} alt="instaLogo" />
        </a>
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
  position: relative;
`;

const PreviousBtn = styled.div`
  position: ${(props) => (props.isAtFooter ? 'static' : 'fixed')};
  bottom: ${(props) => (props.isAtFooter ? '' : '5.2rem')};
  left: ${(props) => (props.isAtFooter ? '' : '50%')};
  transform: ${(props) => (props.isAtFooter ? '' : 'translateX(-50%)')};
  z-index: 100;
  margin: ${(props) => (props.isAtFooter ? '2rem auto 0' : '')};
  cursor: pointer;
  width: 12.8rem;
  height: 6rem;
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
  margin-top: 2.6rem;
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
    margin-bottom: 6.4rem;
  }
`;
