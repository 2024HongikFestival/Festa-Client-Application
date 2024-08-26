import { useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import instaLogo from '@/assets/webps/layouts/instaLogo.webp';
import flameFooterBg from '@/assets/webps/layouts/flameFooterBg.webp';
import mangae from '@/assets/webps/layouts/mangae.webp';
import { useTranslation } from 'react-i18next';
import flameVideo from '@/assets/videos/flameMainFooter.mp4';

export default function Footer() {
  const nav = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

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
  const flameMain = location.pathname == '/flame';
  const showPreviousBtn = location.pathname == '/likelion' || location.pathname == '/gaehwa';
  const daedongje =
    location.pathname !== '/likelion' && location.pathname !== '/gaehwa' && !location.pathname.startsWith('/flame');

  return (
    <FooterLayout path={location.pathname}>
      {flameMain && (
        <VideoContainer>
          <BackgroundVideo autoPlay loop muted>
            <source src={flameVideo} type="video/mp4" />
          </BackgroundVideo>
        </VideoContainer>
      )}
      {showPreviousBtn && (
        <PreviousBtn onClick={handleGoBack}>
          <span>{t('layouts.footer.prev')}</span>
        </PreviousBtn>
      )}
      {daedongje && (
        <Mangae>
          <img src={mangae} alt="mangae" />
        </Mangae>
      )}
      <LikelionBtn path={location.pathname} onClick={() => handleNavigation('/likelion')}>
        <span>{t('layouts.footer.toLikelion')}</span>
      </LikelionBtn>
      <GaehwaBtn onClick={() => handleNavigation('/gaehwa')}>
        <span>{t('layouts.footer.toGaehwa')}</span>
      </GaehwaBtn>
      <DaedongjeContainer>
        <span>{t('layouts.footer.toDaedongjeInsta')}</span>
        <a href="https://www.instagram.com/hiufestival_official/" target="_blank" rel="noopener noreferrer">
          <img src={instaLogo} alt="instaLogo" />
        </a>
      </DaedongjeContainer>
    </FooterLayout>
  );
}

const FooterLayout = styled.div`
  width: 100%;
  /* height: auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: transparent;
  overflow: hidden;

  ${(props) =>
    (props.path === '/likelion' || props.path === '/gaehwa') &&
    css`
      background-color: ${(props) => props.theme.colors.makersBackgroundColor};
    `}

  ${(props) =>
    props.path.startsWith('/flame') &&
    css`
      background-color: ${(props) => props.theme.colors.flameBackgroundColor};
      background-image: url(${flameFooterBg});
      background-size: cover;
      background-position: center 20%;
    `}
    ${(props) =>
    props.path === '/flame' &&
    css`
      background-color: transparent;
      background-image: none;
      height: 34.9rem;
    `}
`;

const Mangae = styled.div`
  width: 10rem;
  margin: 2.8rem auto 0;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 100%;
  }
`;

const PreviousBtn = styled.div`
  z-index: 100;
  margin: 2rem auto 0;
  cursor: pointer;
  width: 10.9rem;
  height: 4.5rem;
  border-radius: 5rem;
  border: 0.1rem solid ${(props) => props.theme.colors.gray80};
  background: ${(props) => props.theme.colors.gray100};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  span {
    color: ${(props) => props.theme.colors.gray5};
    font-family: 'Pretendard', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.1rem;
  }
`;

const LikelionBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 3.6rem;
  z-index: 2;
  span {
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    ${(props) => props.theme.fontStyles.basic.body2Bold};
  }

  ${(props) =>
    (props.path === '/likelion' || props.path === '/gaehwa') &&
    css`
      margin-top: 2.4rem;
    `}

  ${(props) =>
    props.path.startsWith('/flame') &&
    css`
      margin-top: 2.8rem;
    `}
`;

const GaehwaBtn = styled.div`
  cursor: pointer;
  margin-top: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
  span {
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    ${(props) => props.theme.fontStyles.basic.body2Bold};
  }
`;

const DaedongjeContainer = styled.div`
  margin: 8rem 2rem 6.4rem;
  display: flex;
  flex-direction: column;
  z-index: 2;
  span {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fontStyles.basic.captionBold};
    margin-bottom: 0.8rem;
  }

  a {
    width: 2.4rem;
    height: 2.4rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
const VideoContainer = styled.div`
  position: absolute;
  background: linear-gradient(
    179.92deg,
    #010304 10.06%,
    rgba(1, 3, 4, 0.1) 41.26%,
    rgba(1, 3, 4, 0.45) 62.62%,
    #010304 99.93%
  );
  width: 100%;
  height: 34.9rem;
  pointer-events: none;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;
