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
import AdminMenuBar from './AdminMenuBar';
import CommonMenuBar from './CommonMenuBar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [menuClass, setMenuClass] = useState('');
  const nav = useNavigate();
  const location = useLocation();
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
            />
          ) : (
            <CommonMenuBar
              className={menuClass}
              nav={nav}
              closeMenu={() => setIsMenuOpen(false)}
              flame={flame}
              commonMenuRef={commonMenuRef}
            />
          ))}
      </S.HeaderLayout>
    </>
  );
}
