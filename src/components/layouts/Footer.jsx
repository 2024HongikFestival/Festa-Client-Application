import { useLocation, useNavigate } from 'react-router-dom';
import mangaeLogo from '@/assets/webps/layouts/mangae.webp';
import { useTranslation } from 'react-i18next';
import rightArrow from '@/assets/svgs/makers/rightArrow.svg';
import rightArrowGray from '@/assets/svgs/makers/rightArrowGray.svg';
import flameLogo from '@/assets/svgs/makers/flame.svg';
import mangaeInsta from '@/assets/svgs/makers/mangaeInsta.svg';
import wdfInsta from '@/assets/svgs/makers/wdfInsta.svg';
import gaehwaInsta from '@/assets/svgs/makers/gaehwaInsta.svg';
import up from '@/assets/svgs/layouts/up.svg';
import flameVideo from '@/assets/videos/flameMainFooter.mp4';
import * as S from '@/components/layouts/FooterStyles';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [isAtFooter, setIsAtFooter] = useState(false);
  const nav = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const flame = location.pathname.startsWith('/flame');
  const flameMain = location.pathname === '/flame' || location.pathname === '/flame/';
  const daedongjeMain = location.pathname === '/';
  const showPreviousBtn = location.pathname == '/likelion' || location.pathname == '/gaehwa';

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
      const footer = document.getElementById('footer');
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const buttonHeight = 45;

      // 푸터가 화면 상단에서 보이기 시작할 때 버튼을 고정
      if (footerTop <= windowHeight - buttonHeight) {
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
    <S.FooterLayout id="footer" $path={location.pathname}>
      {daedongjeMain && (
        <>
          <S.FloatingBtn $isAtFooter={isAtFooter} onClick={() => nav('/flame')} className="floatingDedongje">
            <span>{t('layouts.footer.goFlame')}</span>
          </S.FloatingBtn>
          <S.UpBtn $isAtFooter={isAtFooter} className="floatingDaedongje">
            <img src={up} alt="up"></img>
          </S.UpBtn>
        </>
      )}
      {flameMain && (
        <>
          <S.FloatingBtn $isAtFooter={isAtFooter} onClick={() => nav('/')}>
            <span>{t('layouts.footer.goDaedongje')}</span>
          </S.FloatingBtn>
          <S.UpBtn $isAtFooter={isAtFooter}>
            <img src={up} alt="up"></img>
          </S.UpBtn>
        </>
      )}
      {showPreviousBtn && (
        <S.FloatingBtn $isAtFooter={isAtFooter} onClick={handleGoBack}>
          <span>{t('layouts.footer.prev')}</span>
        </S.FloatingBtn>
      )}
      {flameMain && (
        <S.VideoContainer>
          <S.BackgroundVideo autoPlay loop muted>
            <source src={flameVideo} type="video/mp4" />
          </S.BackgroundVideo>
        </S.VideoContainer>
      )}
      {flame ? (
        <S.Flame>
          <img src={flameLogo} alt="flame" />
        </S.Flame>
      ) : (
        <S.Mangae>
          <img src={mangaeLogo} alt="mangae" />
        </S.Mangae>
      )}
      <S.Contributor $path={location.pathname}>
        <span>{t('layouts.footer.contributors')}</span>
      </S.Contributor>
      <S.LikelionBtn $path={location.pathname}>
        <span className="likelion">{t('layouts.footer.likelion')}</span>
        <span onClick={() => handleNavigation('/likelion')} className="toLikelion">
          {t('layouts.footer.toLikelion')}
        </span>
        <img
          onClick={() => handleNavigation('/likelion')}
          src={flame ? rightArrowGray : rightArrow}
          alt={flame ? 'rightArrowGray' : 'rightArrow'}
        />
      </S.LikelionBtn>
      <S.GaehwaBtn $path={location.pathname}>
        <span className="gaehwa">{t('layouts.footer.gaehwa')}</span>
        <span onClick={() => handleNavigation('/gaehwa')} className="toGaehwa">
          {t('layouts.footer.toGaehwa')}
        </span>
        <img
          onClick={() => handleNavigation('/gaehwa')}
          src={flame ? rightArrowGray : rightArrow}
          alt={flame ? 'rightArrowGray' : 'rightArrow'}
        />
      </S.GaehwaBtn>
      <S.InstaContainer $path={location.pathname}>
        <span>{t('layouts.footer.instagram')}</span>
        <S.Instagrams>
          <a href="https://www.instagram.com/hiufestival_official/" target="_blank" rel="noopener noreferrer">
            <img src={mangaeInsta} alt="mangaeInsta" />
          </a>
          <a href="https://www.instagram.com/hiu_wodf_official/" target="_blank" rel="noopener noreferrer">
            <img src={wdfInsta} alt="wdfInsta" />
          </a>
          <a href="https://www.instagram.com/hiu_student_council/" target="_blank" rel="noopener noreferrer">
            <img src={gaehwaInsta} alt="gaehwaInsta" />
          </a>
        </S.Instagrams>
      </S.InstaContainer>
    </S.FooterLayout>
  );
}
