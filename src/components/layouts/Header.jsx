import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from '@/components/layouts/HeaderStyles';
import AdminMenuBar from '@/components/layouts/AdminMenuBar';
import CommonMenuBar from '@/components/layouts/CommonMenuBar';
import routeConfig from '@/constants/layouts/routeConfig';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [menuClass, setMenuClass] = useState('');
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const nav = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);
  const adminMenuRef = useRef(null);
  const commonMenuRef = useRef(null);

  let currentRoute = routeConfig.default;

  if (location.pathname.startsWith('/flame')) {
    currentRoute = routeConfig['/flame'];
  } else if (location.pathname.startsWith('/admin')) {
    currentRoute = routeConfig['/admin'];
  } else if (routeConfig[location.pathname]) {
    currentRoute = routeConfig[location.pathname];
  }

  // 메뉴바 여닫기
  const toggleMenu = (event) => {
    event.stopPropagation(); // 이벤트 전파를 막아 외부 클릭과의 충돌 방지
    setIsAnimating(true);
    setIsMenuOpen((prev) => !prev);
  };

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

  // 메뉴바 & 헤더 밖 클릭 범위 지정 & admin 로직
  const handleClickOutside = (event) => {
    if (
      (commonMenuRef.current && !commonMenuRef.current.contains(event.target)) ||
      (adminMenuRef.current && !adminMenuRef.current.contains(event.target))
    ) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        if (location.pathname.startsWith('/admin')) {
          setShowLogoutPopup(false);
        }
      }
    }
  };

  // 메뉴바 열렸을 때 바깥 클릭 시 메뉴바 '닫기'
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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

  return (
    <>
      <S.HeaderLayout ref={headerRef} $path={location.pathname}>
        <S.HeaderBg $path={location.pathname} $isMenuOpen={isMenuOpen}>
          {currentRoute.showBackButton ? (
            <S.HambergerMenu onClick={handleGoBack}>
              <img src={currentRoute.menuIcon} alt="backBtn" />
            </S.HambergerMenu>
          ) : (
            <S.HambergerMenu onClick={toggleMenu}>
              <img src={isMenuOpen ? currentRoute.xBtn : currentRoute.menuIcon} alt="menuIcon" />
            </S.HambergerMenu>
          )}
          <S.HiuLogo onClick={() => nav('/')}>
            <img src={currentRoute.logo} alt="logo" />
          </S.HiuLogo>
          <S.Right></S.Right>
        </S.HeaderBg>

        {(isMenuOpen || isAnimating) &&
          (location.pathname.startsWith('/admin') ? (
            <AdminMenuBar
              className={menuClass}
              nav={nav}
              closeMenu={() => setIsMenuOpen(false)}
              adminMenuRef={adminMenuRef}
              setShowLogoutPopup={setShowLogoutPopup}
              showLogoutPopup={showLogoutPopup}
            />
          ) : (
            <CommonMenuBar
              className={menuClass}
              nav={nav}
              closeMenu={() => setIsMenuOpen(false)}
              flame={location.pathname.startsWith('/flame')}
              commonMenuRef={commonMenuRef}
            />
          ))}
      </S.HeaderLayout>
    </>
  );
}
