import { useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import mangaeLogo from '@/assets/webps/layouts/mangae.webp';
import { useTranslation } from 'react-i18next';
import rightArrow from '@/assets/svgs/makers/rightArrow.svg';
import rightArrowGray from '@/assets/svgs/makers/rightArrowGray.svg';
import flameLogo from '@/assets/svgs/makers/flame.svg';
import mangaeInsta from '@/assets/svgs/makers/mangaeInsta.svg';
import wdfInsta from '@/assets/svgs/makers/wdfInsta.svg';
import gaehwaInsta from '@/assets/svgs/makers/gaehwaInsta.svg';
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

  const flame = location.pathname.startsWith('/flame');
  const flameMain = location.pathname === '/flame' || location.pathname === '/flame/';

  return (
    <FooterLayout $path={location.pathname}>
      {flameMain && (
        <VideoContainer>
          <BackgroundVideo autoPlay loop muted>
            <source src={flameVideo} type="video/mp4" />
          </BackgroundVideo>
        </VideoContainer>
      )}
      {!flame && (
        <Mangae>
          <img src={mangaeLogo} alt="mangae" />
        </Mangae>
      )}
      {flame && (
        <Flame>
          <img src={flameLogo} alt="flame" />
        </Flame>
      )}
      <Contributor $path={location.pathname}>
        <span>{t('layouts.footer.contributors')}</span>
      </Contributor>
      <LikelionBtn $path={location.pathname}>
        <span className="likelion">{t('layouts.footer.likelion')}</span>
        <span onClick={() => handleNavigation('/likelion')} className="toLikelion">
          {t('layouts.footer.toLikelion')}
        </span>
        {!flame && <img onClick={() => handleNavigation('/likelion')} src={rightArrow} alt="rightArrow" />}
        {flame && <img onClick={() => handleNavigation('/likelion')} src={rightArrowGray} alt="rightArrowGray" />}
      </LikelionBtn>
      <GaehwaBtn $path={location.pathname}>
        <span className="gaehwa">{t('layouts.footer.gaehwa')}</span>
        <span onClick={() => handleNavigation('/gaehwa')} className="toGaehwa">
          {t('layouts.footer.toGaehwa')}
        </span>
        {!flame && <img onClick={() => handleNavigation('/gaehwa')} src={rightArrow} alt="rightArrow" />}
        {flame && <img onClick={() => handleNavigation('/gaehwa')} src={rightArrowGray} alt="rightArrowGray" />}
      </GaehwaBtn>
      <InstaContainer $path={location.pathname}>
        <span>{t('layouts.footer.instagram')}</span>
        <Instagrams>
          <a href="https://www.instagram.com/hiufestival_official/" target="_blank" rel="noopener noreferrer">
            <img src={mangaeInsta} alt="mangaeInsta" />
          </a>
          <a href="https://www.instagram.com/hiu_wodf_official/" target="_blank" rel="noopener noreferrer">
            <img src={wdfInsta} alt="wdfInsta" />
          </a>
          <a href="https://www.instagram.com/hiu_student_council/" target="_blank" rel="noopener noreferrer">
            <img src={gaehwaInsta} alt="gaehwaInsta" />
          </a>
        </Instagrams>
      </InstaContainer>
    </FooterLayout>
  );
}

const FooterLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: transparent;
  overflow: hidden;
  z-index: 0;
`;

const Mangae = styled.div`
  margin-top: 3.2rem;
  margin-left: 3.2rem;
  margin-bottom: 4.8rem;
  width: 9.9rem;
  overflow: hidden;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Flame = styled.div`
  margin-top: 2.4rem;
  margin-left: 2.45rem;
  margin-bottom: 4rem;
  width: 11.5rem;
  overflow: hidden;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Contributor = styled.div`
  margin-left: 3.2rem;
  margin-bottom: 1.2rem;
  height: 1.8rem;
  z-index: 1;
  span {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fontStyles.basic.captionMed};
    font-weight: 300;
  }
  ${(props) =>
    props.$path.startsWith('/flame') &&
    css`
      span {
        color: ${(props) => props.theme.colors.gray10};
      }
    `};
`;
const LikelionBtn = styled.div`
  margin-left: 3.2rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  z-index: 1;

  .likelion {
    width: 4.9rem;
    ${(props) => props.theme.fontStyles.basic.body2Bold};
    margin-right: 2rem;
    ${(props) =>
      props.$path.startsWith('/flame') &&
      css`
        color: ${(props) => props.theme.colors.gray40};
      `};
  }
  .toLikelion {
    cursor: pointer;
    ${(props) => props.theme.fontStyles.basic.body2Med};
    font-weight: 400;
    margin-right: 0.6rem;
    ${(props) =>
      props.$path.startsWith('/flame') &&
      css`
        color: ${(props) => props.theme.colors.gray40};
      `};
  }
  img {
    cursor: pointer;
    width: 0.6rem;
    height: 1rem;
  }
`;

const GaehwaBtn = styled.div`
  margin-left: 3.2rem;
  margin-top: 1.2rem;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  z-index: 1;

  .gaehwa {
    width: 4.9rem;
    ${(props) => props.theme.fontStyles.basic.body2Bold};
    margin-right: 2rem;
    ${(props) =>
      props.$path.startsWith('/flame') &&
      css`
        color: ${(props) => props.theme.colors.gray40};
      `};
  }
  .toGaehwa {
    cursor: pointer;
    ${(props) => props.theme.fontStyles.basic.body2Med};
    font-weight: 400;
    margin-right: 0.6rem;
    ${(props) =>
      props.$path.startsWith('/flame') &&
      css`
        color: ${(props) => props.theme.colors.gray40};
      `};
  }
  img {
    cursor: pointer;
    width: 0.6rem;
    height: 1rem;
  }
`;

const InstaContainer = styled.div`
  margin-left: 3.2rem;
  display: flex;
  flex-direction: column;
  z-index: 1;
  span {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fontStyles.basic.captionMed};
    font-weight: 300;
    margin-bottom: 1.15rem;
    ${(props) =>
      props.$path.startsWith('/flame') &&
      css`
        color: ${(props) => props.theme.colors.gray30};
      `};
  }

  a {
    width: 3.2rem;
    height: 3.2rem;
    margin-right: 1.1rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const Instagrams = styled.div`
  display: flex;
  margin-bottom: 6.65rem;
`;

const VideoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 35.1rem;
  pointer-events: none;
  background-color: transparent;
  background: linear-gradient(
    180deg,
    #010304 10.06%,
    rgba(1, 3, 4, 0.1) 41.26%,
    rgba(1, 3, 4, 0.45) 62.62%,
    #010304 99.93%
  );
`;

const BackgroundVideo = styled.video`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
