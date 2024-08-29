import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import hiuLogo from '@/assets/webps/layouts/hiuLogo.webp';
import hiuLogoBlack from '@/assets/webps/layouts/hiuLogoBlack.webp';
import backBtn from '@/assets/webps/layouts/backBtn.webp';
import hambergerMenu from '@/assets/webps/layouts/hambergerMenu.webp';
import hambergerMenuBlack from '@/assets/webps/layouts/hambergerMenuBlack.webp';
import globe from '@/assets/webps/layouts/globe.webp';
import { useNavigate, useLocation } from 'react-router-dom';
import Popup from '@/components/admin/Popup';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const nav = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isKorActive, setIsKorActive] = useState(true); // language toggle
  const isAdminPath = location.pathname === '/admin' || location.pathname === '/admin/event';

  const adminMenuRef = useRef(null);

  const useWhiteImages = (path) => {
    // 하얀색 홍익로고, 메뉴바 로고 들어가는 path
    const whiteImagePaths = ['/likelion', '/gaehwa'];
    if (path.startsWith('/flame')) {
      return true;
    }
    return whiteImagePaths.includes(path);
  };
  const whiteImages = useWhiteImages(location.pathname);

  const toggleMenu = (event) => {
    event.stopPropagation(); // 이벤트 전파를 막아 외부 클릭과의 충돌 방지
    setIsMenuOpen((prev) => !prev);
  };

  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    nav(0);
  };

  const handleConfirmLogout = () => {
    handleLogout();
    setIsMenuOpen(false);
    setShowLogoutPopup(false);
  };

  const handleCancelLogout = () => {
    setIsMenuOpen(false);
    setShowLogoutPopup(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (adminMenuRef.current && !adminMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setShowLogoutPopup(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleGoBack = () => {
    nav(-1);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 100);
  };

  const makers = location.pathname === '/likelion' || location.pathname === '/gaehwa';

  const clickHandler = (lng) => {
    setIsKorActive(lng === 'ko');
    localStorage.setItem('language', lng);
    i18n.changeLanguage(lng);
  };

  const toggleLanguage = () => {
    const newLanguage = isKorActive ? 'en' : 'ko';
    clickHandler(newLanguage);
  };

  return (
    <>
      <HeaderLayout $path={location.pathname}>
        <HeaderBg $path={location.pathname}>
          {makers && (
            <HambergerMenu onClick={handleGoBack}>
              <img src={backBtn} alt="backBtb" />
            </HambergerMenu>
          )}
          {!makers && (
            <HambergerMenu onClick={toggleMenu}>
              <img src={whiteImages ? hambergerMenu : hambergerMenuBlack} alt="hambergerMenu" />
            </HambergerMenu>
          )}
          <HiuLogo onClick={() => nav('/')}>
            <img src={whiteImages ? hiuLogo : hiuLogoBlack} alt="hiuLogo" />
          </HiuLogo>

          <Right></Right>
        </HeaderBg>
        {isMenuOpen &&
          (isAdminPath ? (
            <AdminMenuBar
              adminMenuRef={adminMenuRef}
              handleCancelLogout={handleCancelLogout}
              handleConfirmLogout={handleConfirmLogout}
              showLogoutPopup={showLogoutPopup}
              setShowLogoutPopup={setShowLogoutPopup}
              nav={nav}
              closeMenu={() => setIsMenuOpen(false)}
            />
          ) : (
            <CommonMenuBar closeMenu={toggleMenu} isKorActive={isKorActive} toggleLanguage={toggleLanguage} t={t} />
          ))}
      </HeaderLayout>
    </>
  );
}

const AdminMenuBar = ({
  nav,
  handleCancelLogout,
  handleConfirmLogout,
  showLogoutPopup,
  setShowLogoutPopup,
  closeMenu,
  adminMenuRef,
}) => {
  return (
    <>
      <AdminBar ref={adminMenuRef}>
        <PageMenu>
          <Menu
            onClick={() => {
              nav('/admin');
              nav(0);
              closeMenu();
            }}
          >
            분실물 게시판 관리
          </Menu>
          <Menu
            onClick={() => {
              nav('/admin/event');
              closeMenu();
            }}
          >
            이벤트 관리
          </Menu>
        </PageMenu>
        <Logout onClick={() => setShowLogoutPopup(true)}>로그아웃</Logout>
      </AdminBar>
      {showLogoutPopup && (
        <Popup
          message="로그아웃 할까요?"
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
          confirmText="로그아웃"
          cancelText="취소"
        />
      )}
    </>
  );
};

const CommonMenuBar = ({ closeMenu, isKorActive, toggleLanguage, t }) => (
  <MenuBar>
    <MenuList>
      <MenuItem>
        <span>{t('layouts.header.toRoadmap')}</span>
      </MenuItem>
      <Divider />
      <MenuItem>
        <span>{t('layouts.header.toStage')}</span>
      </MenuItem>
      <Divider />
      <MenuItem>
        <span>{t('layouts.header.toBooth')}</span>
      </MenuItem>
      <Divider />
      <MenuItem>
        <span>{t('layouts.header.toFacilities')}</span>
      </MenuItem>
      <Divider />
      <MenuItem>
        <span>{t('layouts.header.toEvent')}</span>
      </MenuItem>
    </MenuList>
    <LanguageWrapper>
      <Divider />
      <LanguageBox>
        <img src={globe} alt="globe" />
        <span className="language">Language</span>
        <ToggleBox onClick={toggleLanguage}>
          <Slider $isKorActive={isKorActive} />
          <KorBox $isKorActive={isKorActive}>
            <span>KOR</span>
          </KorBox>
          <EngBox $isKorActive={!isKorActive}>
            <span>ENG</span>
          </EngBox>
        </ToggleBox>
      </LanguageBox>
    </LanguageWrapper>
  </MenuBar>
);

CommonMenuBar.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  isKorActive: PropTypes.bool.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

AdminMenuBar.propTypes = {
  nav: PropTypes.func.isRequired,
  handleCancelLogout: PropTypes.func.isRequired,
  handleConfirmLogout: PropTypes.func.isRequired,
  showLogoutPopup: PropTypes.bool.isRequired,
  setShowLogoutPopup: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  adminMenuRef: PropTypes.oneOfType([
    PropTypes.func, // ref로서의 함수 타입
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }), // ref로서의 객체 타입
  ]).isRequired,
};

const HeaderLayout = styled.div`
  width: 100%;
  max-width: 768px;
  min-width: 375px;
  margin: 0 auto;
  height: 5.6rem;
  background-color: transparent;
  position: fixed;
  top: 0rem;
  z-index: 100;
`;

const HeaderBg = styled.div`
  width: 100%;
  max-width: 768px;
  min-width: 375px;
  height: 5.6rem;
  position: fixed;
  top: 0rem;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.colors.gray20};
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 0.4rem 0 rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(0.2rem);

  ${(props) =>
    (props.$path === '/likelion' || props.$path === '/gaehwa') &&
    css`
      border: none;
      background-color: ${(props) => props.theme.colors.black};
      box-shadow: 0rem 0rem 0.4rem 0rem rgba(255, 255, 255, 0.12) inset;
      backdrop-filter: blur(0.2rem);
    `}

  ${(props) =>
    props.$path.startsWith('/flame') &&
    css`
      border: none;
      background-color: ${(props) => props.theme.colors.flameBackgroundColor};
      box-shadow: 0 0 0.4rem 0 rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(0.2rem);
    `}

  ${(props) =>
    props.$path === '/admin' &&
    css`
      border: none;
      background-color: ${(props) => props.theme.colors.white};
      background-size: cover;
      background-position: center;
    `}

  ${(props) =>
    props.$path === '/admin/event' &&
    css`
      border: none;
      background-color: ${(props) => props.theme.colors.white};
      background-size: cover;
      background-position: center;
    `}
`;

const HambergerMenu = styled.div`
  cursor: pointer;
  margin-left: 2rem;
  width: 2.4rem;
  height: 2.4rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const HiuLogo = styled.div`
  cursor: pointer;
  width: 14.7rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Right = styled.div`
  margin-right: 2rem;
  width: 2.4rem;
  height: 2.4rem;
`;

const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 5.6rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 5.6rem);
  max-width: 26.1rem;
  background-color: #f1fbfd;
  border-right: 0.1rem solid #d1c2f3;
  z-index: 99;
`;

const MenuList = styled.ul`
  margin: 5.5rem 2.2rem 0;
`;

const MenuItem = styled.li`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  span {
    ${(props) => props.theme.fontStyles.basic.body1Med};
  }
`;

const Divider = styled.div`
  height: 0.1rem;
  width: 100%;
  background: linear-gradient(90deg, #85daff 0%, #a9f2dd 25.9%, #becdf9 43.9%, #ece6f0 89.4%);
`;

const LanguageWrapper = styled.div`
  height: 6.5rem;
  margin: 0 2.2rem 6.4rem;
  display: flex;
  flex-direction: column;
`;

const LanguageBox = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 1.8rem 0;
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.8rem;
  }
  .language {
    color: rgba(0, 115, 180, 0.8);
    ${(props) => props.theme.fontStyles.basic.body2Med};
    text-align: center;
    margin-right: 1.6rem;
  }
`;

const ToggleBox = styled.div`
  display: flex;
  align-items: center;
  width: 8.2rem;
  height: 2.8rem;
  border-radius: 1.5rem;
  border: 0.05rem solid #b0dbf3;
  background-color: white;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  justify-content: space-between;
`;

const Slider = styled.div`
  margin: 0 0.5rem;
  position: absolute;
  width: 3.6rem;
  height: 2rem;
  border-radius: 1.5rem;
  background: linear-gradient(110deg, #27b0eb 40.84%, #d1dbfa 81.65%);
  transition: transform 0.3s ease;
  transform: ${({ $isKorActive }) => ($isKorActive ? 'translateX(0)' : 'translateX(100%)')};
`;

const KorBox = styled.div`
  margin-left: 0.5rem;
  position: relative;
  width: 3.6rem;
  height: 2rem;
  border-radius: 1rem;
  text-align: center;
  z-index: 1;
  color: ${({ $isKorActive }) => ($isKorActive ? 'white' : '#27b0eb')};
  transition: color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  span {
    text-align: center;
    font-family: 'Pretendard', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.001rem;
  }
`;

const EngBox = styled.div`
  margin-right: 0.5rem;
  position: relative;
  width: 3.6rem;
  height: 2rem;
  border-radius: 1rem;
  text-align: center;
  z-index: 1;
  color: ${({ $isKorActive }) => ($isKorActive ? 'white' : '#27b0eb')};
  transition: color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  span {
    text-align: center;
    font-family: 'Pretendard', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.001rem;
  }
`;
const AdminBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 5.6rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 5.6rem);
  max-width: 19.2rem;
  background-color: white;
  z-index: 99;
`;

const PageMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const Menu = styled.span`
  padding: 1.6rem;
  text-align: left;
  ${(props) => props.theme.fontStyles.basic.body1Med};
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.gray20};
  }
`;

const Logout = styled.span`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  padding: 1.6rem;
  font-size: 1.6rem;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.gray70};
  cursor: pointer;
`;
