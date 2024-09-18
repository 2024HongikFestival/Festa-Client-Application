import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from '@/components/layouts/HeaderStyles';
import AdminMenuBar from '@/components/layouts/AdminMenuBar';
import CommonMenuBar from '@/components/layouts/CommonMenuBar';
import routeConfig from '@/constants/layouts/routeConfig';
import { useCamera } from '@/context/AuthProvider';
import xBtnBlack from '@/assets/svgs/layouts/xBtnBlack.svg';
import hiuLogoBlack from '@/assets/webps/layouts/hiuLogoBlack.webp';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [menuClass, setMenuClass] = useState('');
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const { isCamera } = useCamera();
  const nav = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);
  const adminMenuRef = useRef(null);
  const commonMenuRef = useRef(null);

  let currentRoute = routeConfig.default;

  // 경로
  const flamePaths = [
    '/flame',
    '/flame/',
    '/flame/map',
    '/flame/timetable',
    '/flame/reservation',
    '/flame/lineup',
    '/flame/md',
    '/flame/promotion',
  ];
  const adminPaths = ['/admin', '/admin/', '/admin/event', '/admin/losts'];
  const isFlamePath = flamePaths.includes(location.pathname);
  const isAdminPath = adminPaths.includes(location.pathname);
  const searchParams = new URLSearchParams(location.search);
  const isAdminEventPathDetail =
    location.pathname === '/admin/event' && searchParams.get('view') === 'participants' && searchParams.get('detailId');

  if (isFlamePath) {
    currentRoute = routeConfig['/flame'];
  } else if (isAdminPath) {
    currentRoute =
      typeof routeConfig['/admin/event'] === 'function'
        ? routeConfig['/admin/event'](searchParams)
        : routeConfig['/admin/event'];
  } else if (routeConfig[location.pathname]) {
    currentRoute = routeConfig[location.pathname];
  }

  // 대동제 페이지에서 메뉴 오픈 시 header logo, xBtn 검정으로 고정
  if (isMenuOpen && !isFlamePath && !isAdminPath) {
    currentRoute = {
      ...currentRoute,
      logo: hiuLogoBlack, // 검정 로고
      xBtn: xBtnBlack, // 검정 xBtn
    };
  }

  // 메뉴바 여닫기
  const toggleMenu = (event) => {
    event.stopPropagation(); // 이벤트 전파를 막아 외부 클릭과의 충돌 방지
    setIsAnimating(true);
    setIsMenuOpen((prev) => !prev);
  };

  // backBtn
  const handleGoBack = () => {
    if (location.pathname === '/lost-and-found/add') {
      // /lost-and-found/add에서는 /lost-and-found로 이동
      nav('/lost-and-found');
    } else if (isAdminEventPathDetail) {
      nav('/admin/event');
      nav(0);
    } else {
      // 그 외: -1로 이동
      nav(-1);
    }
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 100);
  };

  // 메뉴바 & 헤더 밖 클릭 범위 지정 & admin 로직
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (commonMenuRef.current && !commonMenuRef.current.contains(event.target)) ||
        (adminMenuRef.current && !adminMenuRef.current.contains(event.target))
      ) {
        if (headerRef.current && !headerRef.current.contains(event.target)) {
          setIsMenuOpen(false);
          if (isAdminPath) {
            setShowLogoutPopup(false);
          }
        }
      }
    };

    // -> 범위 밖 누르면 닫기
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isAdminPath, commonMenuRef, adminMenuRef, headerRef, setIsMenuOpen, setShowLogoutPopup]);

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
        <S.HeaderBg $path={location.pathname} $isMenuOpen={isMenuOpen} $isCamera={isCamera}>
          {currentRoute.showBackButton || isAdminEventPathDetail ? (
            <S.HambergerMenu onClick={handleGoBack}>
              <img src={currentRoute.menuIcon} alt="backBtn" />
            </S.HambergerMenu>
          ) : (
            <S.HambergerMenu onClick={toggleMenu}>
              <img src={isMenuOpen ? currentRoute.xBtn : currentRoute.menuIcon} alt="menuIcon" />
            </S.HambergerMenu>
          )}
          <S.HiuLogo onClick={() => (isFlamePath ? nav('/flame') : nav('/'))}>
            <img src={currentRoute.logo} alt="logo" />
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
              setShowLogoutPopup={setShowLogoutPopup}
              showLogoutPopup={showLogoutPopup}
            />
          ) : (
            <CommonMenuBar
              className={menuClass}
              nav={nav}
              closeMenu={() => setIsMenuOpen(false)}
              flame={isFlamePath}
              commonMenuRef={commonMenuRef}
            />
          ))}
      </S.HeaderLayout>
    </>
  );
}
