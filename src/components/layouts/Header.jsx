import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import hiuLogo from '@/assets/webps/layouts/hiuLogo.webp';
import hiuLogoBlack from '@/assets/webps/layouts/hiuLogoBlack.webp';
import hambergerMenu from '@/assets/webps/layouts/hambergerMenu.webp';
import hambergerMenuBlack from '@/assets/webps/layouts/hambergerMenuBlack.webp';
import { useNavigate, useLocation } from 'react-router-dom';
import Popup from '@/pages/admin/Popup';
import PropTypes from 'prop-types';

export default function Header() {
  const nav = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isAdminPath = location.pathname === '/admin' || location.pathname === '/admin/event';

  const useBlackImages = (path) => {
    // 검정색 홍익로고, 검정 메뉴바 로고 들어가는 path
    const blackImagePaths = ['/admin', '/admin/event'];
    return blackImagePaths.includes(path);
  };
  const blackImages = useBlackImages(location.pathname);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const handleLogout = () => {
    console.log('Before logout:', localStorage.getItem('accessToken')); // 디버그용
    localStorage.removeItem('accessToken');
    console.log('After logout:', localStorage.getItem('accessToken')); // 디버그용
    setIsLoggedIn(false);
    nav(0);
  };
  const handleConfirmLogout = () => {
    console.log('Handle Confirm Logout called'); // 디버깅용 로그 추가
    handleLogout();
    setIsMenuOpen(false);
    setShowLogoutPopup(false);
  };

  const handleCancelLogout = () => {
    console.log('Handle Cancel Logout called'); // 디버깅용 로그 추가
    setIsMenuOpen(false);
    setShowLogoutPopup(false);
  };
  return (
    <>
      <HeaderLayout path={location.pathname}>
        <HeaderBg path={location.pathname}>
          <HambergerMenu onClick={toggleMenu}>
            <img src={blackImages ? hambergerMenuBlack : hambergerMenu} alt="hambergerMenu" />
          </HambergerMenu>
          <HiuLogo onClick={() => nav('/')}>
            <img src={blackImages ? hiuLogoBlack : hiuLogo} alt="hiuLogo" />
          </HiuLogo>
          <Right></Right>
        </HeaderBg>
        {isMenuOpen &&
          (isAdminPath ? (
            <AdminMenuBar
              handleCancelLogout={handleCancelLogout}
              handleConfirmLogout={handleConfirmLogout}
              showLogoutPopup={showLogoutPopup}
              setShowLogoutPopup={setShowLogoutPopup}
              nav={nav}
              closeMenu={() => setIsMenuOpen(false)}
            />
          ) : (
            <CommonMenuBar closeMenu={toggleMenu} />
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
}) => {
  const adminMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (adminMenuRef.current && !adminMenuRef.current.contains(event.target)) {
        closeMenu();
        setShowLogoutPopup(false); // 팝업 닫기
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <>
      <AdminBar ref={adminMenuRef}>
        <PageMenu>
          <Menu
            onClick={() => {
              nav('/admin');
              window.location.reload();
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

const CommonMenuBar = ({ closeMenu }) => (
  <MenuBar>
    <ul>
      <li>Common Menu 1</li>
      <li>Common Menu 2</li>
      <li>Common Menu 3</li>
    </ul>
  </MenuBar>
);

CommonMenuBar.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

AdminMenuBar.propTypes = {
  nav: PropTypes.func.isRequired,
  handleCancelLogout: PropTypes.func.isRequired,
  handleConfirmLogout: PropTypes.func.isRequired,
  showLogoutPopup: PropTypes.bool.isRequired,
  setShowLogoutPopup: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

const HeaderLayout = styled.div`
  width: 100%;
  max-width: 768px;
  min-width: 375px;
  margin: 0 auto;
  height: 5.6rem;
  background-color: ${(props) => props.theme.colors.black};
  position: fixed;
  top: 0rem;
  z-index: 100;

  ${(props) =>
    props.path === '/admin' &&
    css`
      background-color: ${(props) => props.theme.colors.white};
      background-size: cover;
      background-position: center;
    `}
  ${(props) =>
    props.path === '/admin/event' &&
    css`
      background-color: ${(props) => props.theme.colors.white};
      background-size: cover;
      background-position: center;
    `}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 98;
  padding-left: 4.4rem;
`;
const HeaderBg = styled.div`
  width: 100%;
  max-width: 768px;
  min-width: 375px;
  height: 5.6rem;
  background: rgba(22, 22, 22, 0.1);
  box-shadow: 0rem 0rem 0.4rem 0rem rgba(255, 255, 255, 0.12) inset;
  backdrop-filter: blur(0.2rem);
  position: fixed;
  top: 0rem;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.path === '/admin' &&
    css`
      background-color: ${(props) => props.theme.colors.white};
      background-size: cover;
      background-position: center;
    `}
  ${(props) =>
    props.path === '/admin/event' &&
    css`
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
  position: absolute;
  top: 5.6rem;
  left: 0;
  width: 100%;
  height: 100vh;
  max-width: 19.2rem;
  background-color: white;
  z-index: 99;
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
