import { useState, useEffect, useRef } from 'react';
import * as S from './HeaderStyles';
import hiuLogo from '@/assets/webps/layouts/hiuLogo.webp';
import hiuLogoBlack from '@/assets/webps/layouts/hiuLogoBlack.webp';
import backBtn from '@/assets/webps/layouts/backBtn.webp';
import hambergerMenu from '@/assets/webps/layouts/hambergerMenu.webp';
import hambergerMenuBlack from '@/assets/webps/layouts/hambergerMenuBlack.webp';
import xBtnBlack from '@/assets/svgs/layouts/xBtnBlack.svg';
import xBtnWhite from '@/assets/svgs/layouts/xBtnWhite.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AdminMenuBar from './AdminMenuBar';
import CommonMenuBar from './CommonMenuBar';

export default function Header() {
  const nav = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [menuClass, setMenuClass] = useState('');
  const [isKorActive, setIsKorActive] = useState(true); // language toggle
  const [openAccordion, setOpenAccordion] = useState(null);

  const adminMenuRef = useRef(null);
  const commonMenuRef = useRef(null);

  // path
  const makers = location.pathname === '/likelion' || location.pathname === '/gaehwa';
  const flame = location.pathname.startsWith('/flame');
  const isAdminPath =
    location.pathname === '/admin' || location.pathname === '/admin/event' || location.pathname === '/admin/losts';

  const useWhiteImages = (path) => {
    // 하얀색 홍익로고, 메뉴바 로고 들어가는 path
    const whiteImagePaths = ['/likelion', '/gaehwa'];
    if (path.startsWith('/flame')) {
      return true;
    }
    return whiteImagePaths.includes(path);
  };
  const whiteImages = useWhiteImages(location.pathname);

  // 메뉴바 여닫기
  const toggleMenu = (event) => {
    event.stopPropagation(); // 이벤트 전파를 막아 외부 클릭과의 충돌 방지
    setIsAnimating(true);
    setIsMenuOpen((prev) => !prev);
  };

  // 메뉴바 열렸을 때 스크롤 막기
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      setMenuClass('open');
    } else {
      document.body.style.overflow = '';
      setMenuClass('close');
    }
  }, [isMenuOpen]);

  // 메뉴바 닫을 때 애니메이션
  useEffect(() => {
    if (menuClass === 'close' && isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [menuClass, isAnimating]);

  // common 메뉴바 열렸을 때 바깥 클릭시 메뉴바 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (commonMenuRef.current && !commonMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsAnimating(true);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // backBtn
  const handleGoBack = () => {
    nav(-1);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 100);
  };

  // language toggle 초기화
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setIsKorActive(storedLanguage === 'ko');
    } else {
      setIsKorActive(true); // 기본값: 한국어
      localStorage.setItem('language', 'ko');
    }
  }, []);

  // language toggle
  const clickHandler = (lng) => {
    setIsKorActive(lng === 'ko');
    localStorage.setItem('language', lng);
    i18n.changeLanguage(lng);
  };

  const toggleLanguage = () => {
    const newLanguage = isKorActive ? 'en' : 'ko';
    clickHandler(newLanguage);
  };

  // 대동제 메뉴바 아코디언 토글
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      <S.HeaderLayout $path={location.pathname}>
        <S.HeaderBg $path={location.pathname} $isMenuOpen={isMenuOpen} $flame={flame}>
          {makers && (
            <S.HambergerMenu onClick={handleGoBack}>
              <img src={backBtn} alt="backBtb" />
            </S.HambergerMenu>
          )}
          {!makers && (
            <S.HambergerMenu onClick={toggleMenu}>
              <img
                src={
                  whiteImages ? (isMenuOpen ? xBtnWhite : hambergerMenu) : isMenuOpen ? xBtnBlack : hambergerMenuBlack
                }
                alt="hambergerMenu"
              />
            </S.HambergerMenu>
          )}
          <S.HiuLogo onClick={() => nav('/')}>
            <img src={whiteImages ? hiuLogo : hiuLogoBlack} alt="hiuLogo" />
          </S.HiuLogo>

          <S.Right></S.Right>
        </S.HeaderBg>
        {(isMenuOpen || isAnimating) &&
          (isAdminPath ? (
            <AdminMenuBar
              className={menuClass}
              nav={nav}
              closeMenu={() => setIsMenuOpen(false)}
              adminMenuRef={adminMenuRef}
              t={t}
            />
          ) : (
            <CommonMenuBar
              className={menuClass}
              commonMenuRef={commonMenuRef}
              closeMenu={() => setIsMenuOpen(false)}
              isKorActive={isKorActive}
              toggleLanguage={toggleLanguage}
              t={t}
              flame={flame}
              nav={nav}
              openAccordion={openAccordion}
              toggleAccordion={toggleAccordion}
            />
          ))}
      </S.HeaderLayout>
    </>
  );
}
